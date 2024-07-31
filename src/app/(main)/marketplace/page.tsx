import { List } from "./components/List";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PurchasedList } from "./components/PurchasedList";

export default async function page() {
  return <div>
    <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="all" className="w-full">All Products</TabsTrigger>
          <TabsTrigger value="purchased" className="w-full">Purchased Products</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <List />
        </TabsContent>

        <TabsContent value="purchased">
          <PurchasedList />
        </TabsContent>
      </Tabs>
  </div>
}
