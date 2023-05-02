import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Details } from "./screens/Details";
import { Overview } from "./screens/Overview";
import { Menu } from "./screens/Menu";
import { Roles } from "./screens/Roles";
import { Organization } from "./screens/Organization";


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Overview"
          component={Overview}
          options={{ title: "Members of the Parliament" }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Roles" component={Roles} />
        <Stack.Screen name="Organization" component={Organization} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
