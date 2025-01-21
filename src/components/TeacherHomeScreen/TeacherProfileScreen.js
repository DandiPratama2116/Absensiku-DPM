import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const TeacherProfileScreen = ({ navigation, route }) => {
  const { username, role, school, position, nik, year } = route.params;

  // Fungsi untuk menangani navigasi kembali
  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  // Fungsi untuk logout dan kembali ke halaman login
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],  // Mengarahkan ke halaman Login
    });
  };

  // Ukuran yang dapat diubah untuk ikon back
  const backIconSize = 18; // Anda dapat mengubah nilai ini untuk menyesuaikan ukuran ikon

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {navigation.canGoBack() && (
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Image
              source={require("../../../assets/back.png")} // Ikon back custom
              style={[styles.backIcon, { width: backIconSize, height: backIconSize }]} // Menambahkan ukuran dinamis untuk ikon back
            />
          </TouchableOpacity>
        )}
        <Image
          source={require("../../../assets/sidikjari.png")}
          style={styles.logo}
        />
        <Text style={styles.logoText}>ABSENSIKU</Text>
      </View>

      {/* Kartu Profil */}
      <View style={styles.profileCard}>
        <Image
          source={require("../../../assets/student1.png")}
          style={styles.profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>{username}</Text>
          <Text style={styles.profileRole}>{role}</Text>
        </View>
      </View>

      {/* Kartu Detail */}
      <View style={styles.detailsCard}>
        <View style={styles.detailRow}>
          <Image
            source={require("../../../assets/school_4130952.png")}
            style={styles.icon}
          />
          <Text style={styles.detailText}>{school}</Text>
        </View>
        <View style={styles.detailRow}>
          <Image
            source={require("../../../assets/smart_15112647.png")}
            style={styles.icon}
          />
          <Text style={styles.detailText}>{position}</Text>
        </View>
        <View style={styles.detailRow}>
          <Image
            source={require("../../../assets/contract.png")}
            style={styles.icon}
          />
          <Text style={styles.detailText}>NUPTK: {nik}</Text>
        </View>
        <View style={styles.detailRow}>
          <Image
            source={require("../../../assets/DefinitionSearchBook1.png")}
            style={styles.icon}
          />
          <Text style={styles.detailText}>Tahun Ajaran: {year}</Text>
        </View>
      </View>

      {/* Tombol Logout */}
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backButton: {
    padding: 8,
    marginRight: 10,
  },
  // Style untuk ikon back
  backIcon: {
    resizeMode: 'contain', // Menjaga ikon agar proporsional saat disesuaikan ukurannya
  },
  logo: {
    width: 40,
    height: 40,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    elevation: 2,
    marginBottom: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileRole: {
    fontSize: 14,
    color: "gray",
  },
  detailsCard: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  detailText: {
    fontSize: 16,
    color: "#333",
  },
  logoutButton: {
    padding: 10,
    backgroundColor: "#FF6347",
    borderRadius: 5,
    marginTop: 20,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default TeacherProfileScreen;
