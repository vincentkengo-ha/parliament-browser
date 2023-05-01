import { Button, View, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        styles={styles.logo}
        source={require("../assets/logo.png")}
      />
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
  },
  logo: {
    // not resizing the image
    width: null,
    height: null,
    resizeMode: 'contain',
    objectFit: 'scale-down'
  },
})