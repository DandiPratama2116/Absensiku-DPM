import React, { useState, useEffect } from "react";
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

  const fetchClasses = async () => {
    try {
      const response = await fetch("http://localhost:8083/getkelas"); // Pastikan URL ini sesuai dengan endpoint di backend Anda
      const data = await response.json();
      setClasses(data.data); // Sesuaikan jika struktur respons berbeda
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  useEffect(() => {
    fetchClasses(); // Fetch kelas saat komponen pertama kali dimount
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/sidikjari.png")}
            style={styles.logo}
          />
          <Text style={styles.logoText}>ABSENSIKU</Text>
        </View>
      </View>

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
              className: "Nama Kelas",
              mataPelajaran: "Mata Pelajaran",
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

      <View style={styles.classListContainer}>
        <Text style={styles.sectionTitle}>Daftar Kelas</Text>
        <FlatList
          data={classes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.classItem}>
              <View style={styles.classInfoContainer}>
                <Text style={styles.className}>{item.kelas}</Text>
                <Text style={styles.classDetail}>
                  {item.mataPelajaran} - {item.hari} - {item.waktu}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.selectButton}
                onPress={() =>
                  navigation.navigate("StudentList", {
                    kodeKelas: item.code, // Kirim kode kelas untuk melihat siswa
                  })
                }
              >
                <Text style={styles.selectButtonText}>Lihat Siswa</Text>
              </TouchableOpacity>
            </View>
          )}
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
});

export default TeacherHomeScreen;
