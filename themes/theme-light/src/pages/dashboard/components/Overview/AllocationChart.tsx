import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useMemo } from 'react';
import { TokenType } from '@/types/tokens';
import { theTokenListingService } from '@/services/TokenListingService';

interface AllocationData {
  label: string;
  value: number;
  color: string;
}

interface AllocationChartProps {
  data: AllocationData[];
}

export function AllocationChart({ data }: AllocationChartProps) {
  // calculate percentage
  const processedData = useMemo(() => {
    const totalValue = data.reduce((sum, item) => sum + item.value, 0);
    return data.map(item => ({
      ...item,
      value: totalValue ? Number((item.value / totalValue * 100).toFixed(2)) : 0
    }));
  }, [data]);
  
  return (
    <div className="">
      {/* Chart */}
      <div className="h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={processedData}
              cx="50%"
              cy="50%"
              innerRadius="75%"
              outerRadius="100%"
              dataKey="value"
              animationDuration={1000}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => [`${value}%`]}
              contentStyle={{
                backgroundColor: '#fff',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex gap-x-4 gap-y-2 flex-wrap justify-center mt-4 mx-auto">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2" title={`$${item.value}`}>
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-600">{theTokenListingService.getToken(item.label as TokenType).symbol}</span>
          </div>
        ))}
      </div>
    </div>
  );
}