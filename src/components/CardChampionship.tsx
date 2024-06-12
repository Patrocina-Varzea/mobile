import { Text } from "react-native";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card";
import Details from "./Details";

type Props = {
  name?: string;
  organizer?: string;
  date?: string;
  address?: {
    city: string;
  };
};

export default function CardChampionship() {
  return (
    <Card className="mb-3">
      <CardHeader>
        <CardTitle>Copa Patrocina Várzea</CardTitle>
        <CardDescription>Data: 27/10/2024</CardDescription>
      </CardHeader>
      <CardContent>
        <Text className="font-body text-base text-gray-300">
          Cidade: São Paulo - SP
        </Text>
        <Text className="line-clamp-1 font-body text-base text-gray-300">
          Organizador: Valter Fernandez
        </Text>
      </CardContent>
      <CardFooter className="justify-end">
        <Details />
      </CardFooter>
    </Card>
  );
}
