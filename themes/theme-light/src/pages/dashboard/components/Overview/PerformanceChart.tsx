import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { formatNumberWithCommas } from '@/lib/utils/transaction';
import { log } from '@/lib/utils';

interface PerformanceChartProps {
  data: number[];
  labels: string[];
}

export function PerformanceChart({ data, labels }: PerformanceChartProps) {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  
  const chartData = data.map((value, index) => ({
    name: labels[index],
    value: value,
    label: value === maxValue || value === minValue ? `$${formatNumberWithCommas(value)}` : null
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={chartData}
        margin={{ top: 0, right: 0, left: 0, bottom: 15 }}
      >
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ccfda8" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ccfda8" stopOpacity={0.05}/>
          </linearGradient>
        </defs>
        <XAxis 
          dataKey="name" 
          hide 
        />
        <YAxis 
          hide
        />
        <Tooltip
          formatter={(value: number) => [`$${formatNumberWithCommas(value)}`]}
          contentStyle={{
            backgroundColor: '#fff',
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
          labelStyle={{
            color: '#666'
          }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#52c41a"
          strokeWidth={2}
          fill="url(#colorValue)"
          animationDuration={1000}
          label={({ x, y, value }: { x: number, y: number, value: number }) => {
            if (value === maxValue || value === minValue) {
              // find the index of the value
              const index = data.indexOf(value);
              const isNearStart = index <= 1;  // close to the start
              const isNearEnd = index >= data.length - 2;  // close to the end
              
              // determine the horizontal alignment and x-axis offset
              let textAnchor = "middle";
              let dx = 0;
              if (isNearEnd) {
                textAnchor = "end";
                dx = -10;
              } else if (isNearStart) {
                textAnchor = "start";
                dx = 10;
              }

              // vertical offset remains unchanged
              const dy = value === maxValue ? -10 : 15;

              return (
                <text
                  x={x}
                  y={y}
                  dx={dx}
                  dy={dy}
                  fill="#262626"
                  fontSize={12}
                  textAnchor={textAnchor}
                >
                  ${formatNumberWithCommas(value)}
                </text>
              );
            }
            return null;
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}