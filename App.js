import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import LoadingScreen from "./src/components/LoadingScreen/LoadingScreen";
import LoginScreen from "./src/components/LoginScreen/LoginScreen";
import HalamanPilihan from "./src/components/HalamanPilihan/HalamanPilihan";
import HalamanBerhasil from "./src/components/HalamanBerhasil/HalamanBerhasil";
import TeacherHomeScreen from "./src/components/TeacherHomeScreen/TeacherHomeScreen";
import TeacherProfileScreen from "./src/components/TeacherHomeScreen/TeacherProfileScreen";
import ClassDescriptionScreen from "./src/components/TeacherHomeScreen/ClassDescriptionScreen";
import BuatKelas from "./src/components/TeacherHomeScreen/BuatKelas";
import StudentHomeScreen from "./src/components/StudentHomeScreen/StudentHomeScreen";
import JadwalKelas from "./src/components/TeacherHomeScreen/JadwalKelas";
import IzinSiswa from "./src/components/TeacherHomeScreen/IzinSiswa";
import DetailIzinSiswa from "./src/components/TeacherHomeScreen/DetailIzinSiswa";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* General Screens */}
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Pilihan" component={HalamanPilihan} />
        <Stack.Screen name="HalamanBerhasil" component={HalamanBerhasil} />

        {/* Teacher Screens */}
        <Stack.Screen name="TeacherHomeScreen" component={TeacherHomeScreen} />
        <Stack.Screen name="TeacherProfile" component={TeacherProfileScreen} />
        <Stack.Screen
          name="ClassDescription"
          component={ClassDescriptionScreen}
        />
        <Stack.Screen name="BuatKelas" component={BuatKelas} />
        <Stack.Screen name="JadwalKelas" component={JadwalKelas} />
        <Stack.Screen name="StudentLeave" component={IzinSiswa} />
        <Stack.Screen name="DetailIzinSiswa" component={DetailIzinSiswa} />

        {/* Student Screens */}
        <Stack.Screen name="StudentHomeScreen" component={StudentHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
