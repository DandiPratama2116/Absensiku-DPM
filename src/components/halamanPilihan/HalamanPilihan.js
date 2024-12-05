import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const HalamanPilihan = () => {
  const handleSelection = (role) => {
    alert(`Selected Role: ${role}`);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/WhatsApp_Image_2024-12-05_at_16.40.42_c109cd1c__1_-removebg-preview.png")}
        style={styles.logo}
      />
      <Text style={styles.appName}>ABSENSIKU</Text>
      <Text style={styles.welcomeText}>Selamat Datang</Text>
      <Text style={styles.subText}>Ikhsan Ansari</Text>
      <TouchableOpacity
        style={styles.roleButton}
        onPress={() => handleSelection("Teacher")}
      >
        <Text style={styles.roleButtonText}>TEACHER</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.roleButton}
        onPress={() => handleSelection("Student")}
      >
        <Text style={styles.roleButtonText}>STUDENT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
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
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  appName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2D7CF3",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 30,
  },
  roleButton: {
    width: "80%",
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 15,
  },
  roleButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
  },
  continueButton: {
    width: "80%",
    backgroundColor: "#ADD8E6",
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default HalamanPilihan;
