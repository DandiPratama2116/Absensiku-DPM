import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Validasi login sederhana
    if (username && password) {
      navigation.navigate("Pilihan"); // Navigasi ke halaman Pilihan
    } else {
      alert("Please enter username and password!");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/WhatsApp_Image_2024-12-05_at_16.40.42_c109cd1c__1_-removebg-preview.png")}
        style={styles.logo}
      />
      <Text style={styles.appName}>ABSENSIKU</Text>
      <Text style={styles.welcomeText}>Selamat Datang</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="#9E9E9E"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#9E9E9E"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  appName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2D7CF3",
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 50,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    fontSize: 16,
    color: "#333333",
  },
  button: {
    width: "100%",
    backgroundColor: "#ADD8E6",
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default LoginScreen;
