import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const StudentHomeScreen = ({ navigation, route }) => {
  const { username } = route.params; // Get username from navigation params

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
        {/* Tombol Back */}
        {navigation.canGoBack() && (
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>{"<"}</Text> {/* Simbol "<" */}
          </TouchableOpacity>
        )}
        {/* Logo ABSENSIKU */}
        <Image source={require("../../../assets/sidikjari.png")} style={styles.logo} />
        <Text style={styles.headerText}>ABSENSIKU</Text>
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <Image source={require("../../../assets/student1.png")} style={styles.profileIcon} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>{username}</Text>
          <Text style={styles.profileRole}>Siswa</Text>
        </View>
      </View>

      {/* Menu Options */}
      <View style={styles.menuRow}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("StudentAttendance")}
        >
          <Image source={require("../../../assets/note1.png")} style={styles.menuIcon} />
          <Text style={styles.menuText}>Buat Izin</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("StudentAssignment")}
        >
          <Image source={require("../../../assets/book.png")} style={styles.menuIcon} />
          <Text style={styles.menuText}>Kelas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("StudentGrade")}
        >
          <Image source={require("../../../assets/simbol kelas.png")} style={styles.menuIcon} />
          <Text style={styles.menuText}>Tambah Mata Pelajaran</Text>
        </TouchableOpacity>
      </View>

      {/* Details Card */}
      <View style={styles.detailsCard}>
        <View style={styles.detailItem}>
          <Image source={require("../../../assets/school_4130952.png")} style={styles.detailIcon} />
          <Text style={styles.detailText}>SMA Negeri 1 Pekanbaru</Text>
        </View>
        <View style={styles.detailItem}>
          <Image source={require("../../../assets/smart_15112647.png")} style={styles.detailIcon} />
          <Text style={styles.detailText}>IPA</Text>
        </View>
        <View style={styles.detailItem}>
          <Image source={require("../../../assets/contract.png")} style={styles.detailIcon} />
          <Text style={styles.detailText}>NISN. 2283391999</Text>
        </View>
        <View style={styles.detailItem}>
          <Image source={require("../../../assets/DefinitionSearchBook1.png")} style={styles.detailIcon} />
          <Text style={styles.detailText}>Tahun Ajaran 2024/2025</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  headerContainer: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  backButton: {
    marginBottom: 5, // Tambahkan jarak antara "<" dan logo
  },
  backButtonText: {
    color: "#000000", // Warna simbol "<"
    fontSize: 20, // Ukuran simbol "<"
    fontWeight: "bold", // Tebal
  },
  logo: {
    width: 40, // Sesuaikan ukuran logo
    height: 40,
    marginTop: 5,
  },
  headerText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2D7CF3",
    marginTop: 5,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F9FC",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 80, // Pastikan konten utama tidak menabrak header
    elevation: 3,
  },
  profileIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  profileTextContainer: {
    flexDirection: "column",
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profileRole: {
    fontSize: 14,
    color: "#888888",
  },
  menuRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  menuItem: {
    alignItems: "center",
    width: "30%",
  },
  menuIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  menuText: {
    fontSize: 12,
    textAlign: "center",
  },
  detailsCard: {
    backgroundColor: "#F7F9FC",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  detailIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  detailText: {
    fontSize: 14,
  },
});

export default StudentHomeScreen;
