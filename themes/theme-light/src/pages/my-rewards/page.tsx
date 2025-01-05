import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ActivityTable } from "./components/ActivityTable";
import { RewardContent } from "./components/RewardContent";

export default function MyRewardsPage() {
  return (
    <div className="container py-6">
      <Tabs defaultValue="rewards">
        <TabsList>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
        </TabsList>

        <TabsContent value="rewards">
          <RewardContent />
        </TabsContent>

        <TabsContent value="activities">
          <ActivityTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
