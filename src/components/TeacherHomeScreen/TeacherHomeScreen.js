import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

const TeacherHomeScreen = ({ navigation, route }) => {
  const { username, role } = route.params;
  const [classes, setClasses] = useState([]);

  const addClass = (newClass) => {
    setClasses((prevClasses) => [...prevClasses, newClass]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {navigation.canGoBack() && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Text style={styles.backSymbol}>{"Back"}</Text>
          </TouchableOpacity>
        )}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/sidikjari.png")}
            style={styles.logo}
          />
          <Text style={styles.logoText}>ABSENSIKU</Text>
        </View>
      </View>

      {/* Informasi Guru */}
      <TouchableOpacity
        style={styles.teacherCard}
        onPress={() =>
          navigation.navigate("TeacherProfile", {
            username,
            role,
            school: "SMA Negeri 1 Pekanbaru",
            position: "Guru Agama Islam",
            nik: "225268414",
            year: "2024/2025",
          })
        }
      >
        <Image
          source={require("../../../assets/student1.png")}
          style={styles.teacherImage}
        />
        <View>
          <Text style={styles.teacherName}>{username}</Text>
          <Text style={styles.teacherRole}>{role}</Text>
        </View>
      </TouchableOpacity>

      {/* Menu Navigasi */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("StudentLeave")}
        >
          <Image
            source={require("../../../assets/note1.png")}
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Izin Siswa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            navigation.navigate("JadwalKelas", {
              className: "Nama Kelas", // Ganti dengan nama kelas yang sesuai
              mataPelajaran: "Mata Pelajaran", // Ganti dengan mata pelajaran yang sesuai
            })
          }
        >
          <Image
            source={require("../../../assets/aaaaa.png")}
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Buat Jadwal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("BuatKelas", { addClass })}
        >
          <Image
            source={require("../../../assets/desktop-calendar.png")}
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Buat Kelas</Text>
        </TouchableOpacity>
      </View>

      {/* Daftar Kelas (Hanya Menampilkan 3 Kelas Terbaru) */}
      <View style={styles.classListContainer}>
        <Text style={styles.sectionTitle}>Daftar Kelas</Text>
        <FlatList
          data={classes} // Menampilkan semua kelas
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.classItem}>
              <View style={styles.classInfoContainer}>
                <Text style={styles.className}>{item.kelas}</Text>
                <Text style={styles.classDetail}>
                  {item.mataPelajaran} - {item.hari} - {item.waktu}
                </Text>
                <Text style={styles.classDetail}>
                  Jadwal: {item.jadwal ? "Tersedia" : "Belum ada jadwal"}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.selectButton}
                onPress={() =>
                  navigation.navigate("JadwalKelas", {
                    className: item.kelas,
                    mataPelajaran: item.mataPelajaran,
                  })
                }
              >
                <Text style={styles.selectButtonText}>Atur Jadwal</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Belum ada kelas yang dibuat.</Text>
          }
        />
      </View>
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
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  backButton: {
    marginBottom: 8,
  },
  backSymbol: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2D7CF3",
  },
  teacherCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  teacherImage: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  teacherName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  teacherRole: {
    fontSize: 14,
    color: "#777",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  menuItem: {
    alignItems: "center",
  },
  menuIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
  classListContainer: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  classItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  classInfoContainer: {
    flex: 1,
  },
  className: {
    fontSize: 16,
    fontWeight: "bold",
  },
  classDetail: {
    fontSize: 14,
    color: "#777",
  },
  selectButton: {
    backgroundColor: "#2D7CF3",
    padding: 10,
    borderRadius: 5,
  },
  selectButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  emptyText: {
    textAlign: "center",
    color: "#777",
  },
});

export default TeacherHomeScreen;
