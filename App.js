import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "./src/components/LoadingScreen/LoadingScreen";
import LoginScreen from "./src/components/LoginScreen/LoginScreen";
import HalamanPilihan from "./src/components/halamanPilihan/HalamanPilihan";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Pilihan" component={HalamanPilihan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
