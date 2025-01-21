import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const HalamanBerhasil = ({ navigation, route }) => {
  const { username, role } = route.params; // Ambil parameter username dan role

  // Function to handle back navigation
  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {navigation.canGoBack() && (
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Image
              source={require("../../../assets/back.png")} // Ganti dengan path ikon Anda
              style={styles.backIcon}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Main Content */}
      <Image
        source={require("../../../assets/sidikjari.png")}
        style={styles.logo}
      />
      <Text style={styles.appName}>ABSENSIKU</Text>
      <Text style={styles.welcomeText}>Selamat Datang</Text>
      <Text style={styles.name}>{username}</Text>
      <Text style={styles.roleText}>Role: {role}</Text>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => {
          // Jika role adalah Teacher, navigasi ke halaman home teacher
          if (role === "Teacher") {
            navigation.navigate("TeacherHomeScreen", {
              username: username,
              role: role,
            });
          } else if (role === "Student") {
            // Jika role adalah Student, navigasi ke halaman home student
            navigation.navigate("StudentHomeScreen", {
              username: username,
              role: role,
            });
          }
        }}
      >
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
  headerContainer: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  backButton: {
    padding: 5, // Hanya jarak sekitar simbol tanpa latar belakang
  },
  backIcon: {
    width: 18, // Lebar ikon
    height: 18, // Tinggi ikon
    resizeMode: "contain", // Memastikan ikon tidak terdistorsi
    tintColor: "#000", // (Opsional) Warna ikon, jika mendukung transparansi
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
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    color: "#000000",
    fontWeight: "500",
    marginBottom: 10,
  },
  roleText: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 30,
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

export default HalamanBerhasil;
