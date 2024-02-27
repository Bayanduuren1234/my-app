import { View, Text, Button } from "react-native";

export default function ({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() => {
          navigation.navigate("Login");
        }}
        title="Нэвтрэх"
      />
    </View>
  );
}
