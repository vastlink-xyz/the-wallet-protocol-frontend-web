'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { month: "e321", desktop: 186 },
  { month: "e322", desktop: 305 },
  { month: "e323", desktop: 237 },
  { month: "e324", desktop: 73 },
  { month: "e325", desktop: 209 },
  { month: "e326", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
} satisfies ChartConfig

export function RewardsGraph() {
  return(
    <div className="border rounded-md p-4">
      <div className="flex justify-between items-center mb-4">
        <span>Rewards graph</span>
        <span className="text-gray-400 text-sm cursor-pointer">Claim reward</span>
      </div>

      <div>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <Bar dataKey="desktop" fill="#ed607b" radius={4} barSize={10} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
