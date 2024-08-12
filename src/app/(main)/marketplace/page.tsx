'use client'

import { List } from "./components/List";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslations } from "next-intl";

export default function page() {
  const t = useTranslations('/marketplace.tabs');

  return <div>
    <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="all" className="w-full">{t('all')}</TabsTrigger>
          <TabsTrigger value="purchased" className="w-full">{t('purchased')}</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <List tab={'all'} />
        </TabsContent>

        <TabsContent value="purchased">
          <List tab={'purchased'} />
        </TabsContent>
      </Tabs>
  </div>
}
