import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login"); // Navigasi ke halaman Login
    }, 3000); // Loading selama 3 detik

    return () => clearTimeout(timer); // Bersihkan timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/WhatsApp_Image_2024-12-05_at_16.40.42_c109cd1c__1_-removebg-preview.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>ABSENSIKU</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF",
  },
});

export default LoadingScreen;
