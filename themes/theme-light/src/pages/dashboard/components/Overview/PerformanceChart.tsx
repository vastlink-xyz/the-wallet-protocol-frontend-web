import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { formatNumberWithCommas } from '@/lib/utils/transaction';
import { log } from '@/lib/utils';

interface PerformanceChartProps {
  data: number[];
  labels: string[];
}

// Get boundary range configuration based on data length
const getRangeConfig = (length: number) => {
  if (length <= 7) {
    return { start: 1, end: 1 }; // Reserve 1 point at both ends for less than 7 points
  } else if (length <= 30) {
    return { start: 2, end: 2 }; // Reserve 2 points at both ends for up to 30 points
  } else {
    return { start: Math.floor(length * 0.1), end: Math.floor(length * 0.1) }; // Use 10% for larger datasets
  }
};

export function PerformanceChart({ data, labels }: PerformanceChartProps) {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  
  const maxIndexes = data.reduce<number[]>((acc, value, index) => {
    if (value === maxValue) acc.push(index);
    return acc;
  }, []);
  
  const minIndexes = data.reduce<number[]>((acc, value, index) => {
    if (value === minValue) acc.push(index);
    return acc;
  }, []);

  const selectedMaxIndex = maxIndexes[Math.floor(maxIndexes.length / 2)];
  const selectedMinIndex = minIndexes[Math.floor(minIndexes.length / 2)];
  
  const chartData = data.map((value, index) => ({
    name: labels[index],
    value: value,
    label: (index === selectedMaxIndex || index === selectedMinIndex) ? 
      `$${formatNumberWithCommas(value)}` : null
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={chartData}
        margin={{ top: 30, right: 0, left: 0, bottom: 15 }}
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
          label={({ x, y, value, index }: { x: number, y: number, value: number, index: number }) => {
            if (index === selectedMaxIndex || index === selectedMinIndex) {
              const isMax = index === selectedMaxIndex;

              const { start, end } = getRangeConfig(data.length);
              const isNearStart = index <= start;
              const isNearEnd = index >= data.length - end;
              
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