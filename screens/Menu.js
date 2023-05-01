import { Button, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button 
        title="Members of parliament"
        onPress={() => navigation.navigate("Overview")}
      />
      <StatusBar style="auto"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})