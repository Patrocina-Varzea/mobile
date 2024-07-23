import { Text, View } from "react-native";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card";
import DetailsClub from "./DetailsClub";

import InstagramIcon from "@/assets/svg/instagram.svg";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { MousePointerClick } from "lucide-react-native";

type Props = {
  name?: string;
  organizer?: string;
  date?: string;
  address?: {
    city: string;
  };
};

export default function CardClub() {
  return (
    <Card className="mb-3">
      <CardHeader>
        <CardTitle>Huters Futebol Clube</CardTitle>
        <CardDescription>Já tem patrocínio? NÃO</CardDescription>
      </CardHeader>
      <CardContent>
        <Text className="font-body text-base text-gray-300">
          Cidade: São Paulo - SP
        </Text>
        <View className="flex flex-row items-center gap-2">
          <Text className="font-body text-base text-gray-300">Instagram:</Text>
          <InstagramIcon width={12} height={12} />
          <Text
            className="font-heading text-base text-gray-300 underline"
            onPress={() => {
              router.navigate("https://www.instagram.com/copaferradura/");
            }}
          >
            copaferradura
          </Text>
          <MousePointerClick
            color={colors.yellow[400]}
            width={16}
            height={16}
            strokeWidth={1}
          />
        </View>
      </CardContent>
      <CardFooter className="justify-end">
        <DetailsClub />
      </CardFooter>
    </Card>
  );
}
