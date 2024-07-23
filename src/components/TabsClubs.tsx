import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import { ScrollView } from "react-native";
import CardClub from "./CardClub";

export default function TabsClubs() {
  return (
    <Tabs defaultValue="current">
      <TabsList>
        <TabsTrigger id="current" title="Clubes-Times" value="current" />
        <TabsTrigger id="past" title="Seus patrocínios" value="past" />
      </TabsList>
      <TabsContent value="current" className="w-full flex-1 border-0">
        <ScrollView showsVerticalScrollIndicator={false}>
          <CardClub />
          <CardClub />
          <CardClub />
          <CardClub />
          <CardClub />
          <CardClub />
          <CardClub />
          <CardClub />
          <CardClub />
          <CardClub />
        </ScrollView>
      </TabsContent>
      <TabsContent value="past" className="w-full flex-1 border-0">
        <ScrollView showsVerticalScrollIndicator={false}>
          <CardClub />
          <CardClub />
          <CardClub />
          <CardClub />
          <CardClub />
          <CardClub />
          <CardClub />
          <CardClub />
          <CardClub />
          <CardClub />
        </ScrollView>
      </TabsContent>
    </Tabs>
  );
}
