import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function ScreenA() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("screenB", {
      name: "John Doe",
    });
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
      }}
    >
      <Button
        title="Go to Screen B"
        onPress={() => {openScreen()}}
      />
          
    </View>
  );
}
