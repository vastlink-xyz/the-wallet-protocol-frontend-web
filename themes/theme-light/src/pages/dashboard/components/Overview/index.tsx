import { auth, cn, log } from "@/lib/utils";
import { PerformanceChart } from "./PerformanceChart";
import { AllocationChart } from "./AllocationChart";
import { useEffect, useState } from "react";
import { Info } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import api from "@/lib/api";

// mock data
const performanceData = {
  data: [32021.9, 33000, 34000, 35000, 36000, 37000, 38021.9],
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
};

const allocationData = [
  { label: 'ETH', value: 30, color: '#3B82F6' },
  { label: 'BNB', value: 25, color: '#A855F7' },
  { label: 'USDT', value: 25, color: '#EC4899' },
  { label: 'WLD', value: 20, color: '#4F9B94' }
];

export function Overview() {
  const [timeRange, setTimeRange] = useState<'7D' | '30D'>('7D');
  const { address } = auth.all()

  useEffect(() => {
    initPerformanceData();
  }, []);

  const initPerformanceData = async () => {
    const res = await api.get('/user-assets/performance-chart', {
      params: {
        address
      }
    });
    log('performanceData', res);
  }

  return (
    <div>
      <div className={cn(
        'text-[#111111] font-bold',
        'text-2xl mobile:text-[32px]',
        'mb-6'
      )}>Overview</div>
      
      <div className={cn(
        'flex flex-wrap justify-between h-[286px]',
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
              onValueChange={(value) => setTimeRange(value as '7D' | '30D')}
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
            <PerformanceChart data={performanceData.data} labels={performanceData.labels} />
          </div>
        </div>

        {/* Allocation Chart */}
        <div className={cn(
          'border border-[#ebebeb] rounded-xl p-[20px]',
          'flex-1',
        )}>
          <div className="flex justify-between items-center mb-[20px]">
            <p className="text-base text-[#111111] font-bold leading-tight">Crypto allocation</p>
            <button className="text-base text-[#727272]">View all</button>
          </div>
          <div className="h-[200px]">
            <AllocationChart data={allocationData} />
          </div>
        </div>
      </div>
    </div>
  );
}