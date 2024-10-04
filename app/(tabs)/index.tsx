import { View, Text } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";

const Home = () => {
  return (
    <View className="">
      <Text className="text-error-500">Home</Text>

      <Button size="md" variant="solid" action="primary">
        <ButtonText>Hello World!</ButtonText>
      </Button>
    </View>
  );
};

export default Home;
