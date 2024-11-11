import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { formatNumberWithCommas } from '@/lib/utils/transaction';

interface PerformanceChartProps {
  data: number[];
  labels: string[];
}

export function PerformanceChart({ data, labels }: PerformanceChartProps) {
  const chartData = data.map((value, index) => ({
    name: labels[index],
    value: value
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={chartData}
        margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#52c41a" stopOpacity={0.1}/>
            <stop offset="95%" stopColor="#52c41a" stopOpacity={0}/>
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
          formatter={(value: number) => [`$${formatNumberWithCommas(value)}`, 'Value']}
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
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}