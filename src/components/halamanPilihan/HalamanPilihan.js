import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const HalamanPilihan = ({ navigation, route }) => {
  const { username, role } = route.params;

  // Function to handle back navigation
  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
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
      <Text style={styles.subText}>{username}</Text>

      {/* Teacher Button */}
      <TouchableOpacity
        style={styles.roleButton}
        onPress={() =>
          navigation.navigate("HalamanBerhasil", {
            username: username,
            role: "Teacher",
          })
        }
      >
        <Text style={styles.roleButtonText}>TEACHER</Text>
      </TouchableOpacity>

      {/* Student Button */}
      <TouchableOpacity
        style={styles.roleButton}
        onPress={() =>
          navigation.navigate("HalamanBerhasil", {
            username: username,
            role: "Student",
          })
        }
      >
        <Text style={styles.roleButtonText}>STUDENT</Text>
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
    padding: 10,
  },
  backIcon: {
    width: 18, // Lebar ikon
    height: 18, // Tinggi ikon
    resizeMode: "contain", // Memastikan ikon tidak terdistorsi
    tintColor: "#000", // (Opsional) Mengatur warna ikon jika mendukung transparansi
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
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#82C2E6",
  },
  roleButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});

export default HalamanPilihan;
