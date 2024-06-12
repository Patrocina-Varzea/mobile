import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import { ScrollView } from "react-native";
import CardChampionship from "./CardChampionship";

export default function TabsChampionships() {
  return (
    <Tabs defaultValue="current">
      <TabsList>
        <TabsTrigger
          id="current"
          title="Próximos Campeonatos"
          value="current"
        />
        <TabsTrigger id="past" title="Campeonatos Realizados" value="past" />
      </TabsList>
      <TabsContent value="current" className="w-full flex-1 border-0">
        <ScrollView showsVerticalScrollIndicator={false}>
          <CardChampionship />
          <CardChampionship />
          <CardChampionship />
          <CardChampionship />
          <CardChampionship />
          <CardChampionship />
          <CardChampionship />
          <CardChampionship />
          <CardChampionship />
          <CardChampionship />
        </ScrollView>
      </TabsContent>
      <TabsContent value="past" className="w-full flex-1 border-0">
        <ScrollView showsVerticalScrollIndicator={false}>
          <CardChampionship />
          <CardChampionship />
          <CardChampionship />
          <CardChampionship />
          <CardChampionship />
          <CardChampionship />
          <CardChampionship />
          <CardChampionship />
          <CardChampionship />
          <CardChampionship />
        </ScrollView>
      </TabsContent>
    </Tabs>
  );
}
