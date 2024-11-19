import { auth, cn, handleError, log } from "@/lib/utils";
import { PerformanceChart } from "./PerformanceChart";
import { AllocationChart } from "./AllocationChart";
import { useEffect, useState } from "react";
import { Info } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import api from "@/lib/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { usePerformanceChart } from "@/hooks/usePerformanceChart";

const tokenColors = {
  ETH: '#3d7dc9',
  MATIC: '#c08fec',
  TVWT: '#52c41a',
}

export function Overview() {
  const navigate = useNavigate();
  const { address } = auth.all()

  const [timeRange, setTimeRange] = useState<'7D' | '30D'>('30D');
  // const [performanceData, setPerformanceData] = useState<{ data: number[], labels: string[] }>({ data: [], labels: [] });
  const [performanceChartData, setPerformanceChartData] = useState<number[]>([]);
  const [performanceChartLabels, setPerformanceChartLabels] = useState<string[]>([]);

  const [allocationData, setAllocationData] = useState<{ label: string, value: number, color: string }[]>([])

  const { data: performanceData, isFetched, refetch } = usePerformanceChart({
    enabled: !!address,
  })

  useEffect(() => {
    if (isFetched) {
      init();
    }
  }, [isFetched]);

  const init = async () => {
    try {
      // set performance data
      const list = performanceData?.chartData || []
      const data = list.map((item) => item.value)
      const labels = list.map((item) => item.date)
      setPerformanceChartData(data)
      setPerformanceChartLabels(labels)

      // set allocation data
      const allocationList = performanceData?.distribution || []
      const allocationData = allocationList.map((item) => ({
        label: item.label,
        value: item.value,
        color: tokenColors[item.label as keyof typeof tokenColors]
      }))
      setAllocationData(allocationData)
    } catch (error) {
      const errInfo = handleError(error);
      toast.error(errInfo.message);
    }
  }

  const handleTimeRangeChange = (value: '7D' | '30D') => {
    setTimeRange(value);
    if (value === '7D') {
      setPerformanceChartData(performanceData?.chartData.slice(-7).map((item) => item.value) || [])
      setPerformanceChartLabels(performanceData?.chartData.slice(-7).map((item) => item.date) || [])
    } else {
      setPerformanceChartData(performanceData?.chartData.map((item) => item.value) || [])
      setPerformanceChartLabels(performanceData?.chartData.map((item) => item.date) || [])
    }
  }

  return (
    <div>
      <div className={cn(
        'text-[#111111] font-bold',
        'text-2xl tablet:text-[32px]',
        'mb-6'
      )}>Overview</div>

      <div className={cn(
        'flex flex-wrap justify-between',
        'gap-0 mobile:gap-[18px]',
      )}>
        {/* Performance Chart */}
        <div className={cn(
          'border border-[#ebebeb] rounded-xl p-[20px]',
          'w-full tablet:w-[366px] laptop:w-[500px] desktop:w-[804px]',
        )}>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-1">
              <p className="text-base text-[#111111] font-bold leading-tight">Performance</p>
              <Info size={14} />
            </div>
            <Tabs
              value={timeRange}
              onValueChange={(value) => handleTimeRangeChange(value as '7D' | '30D')}
            >
              <TabsList className="h-[28px] bg-[#f5f5f5]">
                <TabsTrigger
                  value="7D"
                  className={cn(
                    'h-[20px] text-base font-normal text-[#111111]',
                    'data-[state=active]:text-[#979797]',
                  )}
                >
                  7D
                </TabsTrigger>
                <TabsTrigger
                  value="30D"
                  className={cn(
                    'h-[20px] text-base font-normal text-[#111111]',
                    'data-[state=active]:text-[#979797]',
                  )}
                >
                  30D
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="h-[200px]">
            {/* <PerformanceChart data={[
              0,
              1,
              3,
              4,
              5,
              6,
              7,
            ]} labels={[
              'one',
              'two',
              'three',
              'four',
              'five',
              'six',
              'seven',
            ]} /> */}
            <PerformanceChart data={performanceChartData} labels={performanceChartLabels} />
          </div>
        </div>

        {/* Allocation Chart */}
        <div className={cn(
          'border border-[#ebebeb] rounded-xl p-[20px]',
          'flex-1',
        )}>
          <div className="flex justify-between items-center mb-[20px]">
            <p className="text-base text-[#111111] font-bold leading-tight">Crypto allocation</p>
            <button className="text-base text-[#727272]" onClick={() => navigate('/dashboard/viewall')}>View all</button>
          </div>
          <div className="h-[200px]">
            <AllocationChart data={allocationData} />
          </div>
        </div>
      </div>
    </div>
  );
}