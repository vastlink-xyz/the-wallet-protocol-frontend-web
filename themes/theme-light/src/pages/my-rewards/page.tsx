import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RewardTable } from "./components/RewardTable";
import { ActivityTable } from "./components/ActivityTable";
import { Rules } from "./components/Rules";

export default function MyRewardsPage() {
  return (
    <div className="container py-6">
      <Tabs defaultValue="rewards">
        <TabsList>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="rules">Rules</TabsTrigger>
        </TabsList>

        <TabsContent value="rewards">
          <RewardTable />
        </TabsContent>

        <TabsContent value="activities">
          <ActivityTable />
        </TabsContent>

        <TabsContent value="rules">
          <Rules />
        </TabsContent>
      </Tabs>
    </div>
  );
}
