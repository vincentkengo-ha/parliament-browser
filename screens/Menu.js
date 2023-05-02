import { Button, View, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Button
        style={styles.button}
        title="Members of parliament"
        onPress={() => navigation.navigate("Overview")}
      />
      <Button
        style={styles.button}
        title="Roles"
        onPress={() => navigation.navigate("Roles")}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  logo: {
    width: "100%",
    resizeMode: "contain",
  }
});
