import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  CheckBox,
  Image,
} from "react-native";

const IzinSiswa = ({ navigation }) => {
  const [students, setStudents] = useState([
    { id: "1", name: "Alfred Thompson", description: "Sakit", approved: false },
    { id: "2", name: "Larry Gonzalez", description: "Sakit", approved: false },
    { id: "3", name: "Thomas Sanchez", description: "Sakit", approved: false },
    { id: "4", name: "Donald Campbell", description: "Sakit", approved: false },
    { id: "5", name: "Elizabeth Baker", description: "Sakit", approved: false },
  ]);

  const toggleApproval = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, approved: !student.approved }
          : student
      )
    );
  };

  const renderStudentRow = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{index + 1}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DetailIzinSiswa", { student: item })
        }
      >
        <Text style={[styles.cell, styles.linkText]}>{item.name}</Text>
      </TouchableOpacity>
      <Text style={styles.cell}>{item.description}</Text>
      <CheckBox
        value={item.approved}
        onValueChange={() => toggleApproval(item.id)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Tombol Kembali dengan Ikon */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../../../assets/back.png")} // Ganti dengan path gambar back.png
          style={styles.backIcon} // Gaya untuk mengatur ukuran ikon
        />
      </TouchableOpacity>

      {/* Logo ABSENSIKU */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/sidikjari.png")}
          style={styles.logo}
        />
        <Text style={styles.logoText}>ABSENSIKU</Text>
      </View>

      {/* Header Teks */}
      <Text style={styles.headerText}>Daftar Izin Siswa</Text>

      {/* Tabel Izin Siswa */}
      <View style={styles.tableContainer}>
        {/* Header Tabel */}
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>No</Text>
          <Text style={styles.headerCell}>Nama</Text>
          <Text style={styles.headerCell}>Keterangan</Text>
          <Text style={styles.headerCell}>Persetujuan</Text>
        </View>

        {/* Data Tabel */}
        <FlatList
          data={students}
          keyExtractor={(item) => item.id}
          renderItem={renderStudentRow}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  // Gaya untuk tombol back dengan ikon
  backButton: {
    padding: 8,
    marginBottom: 8,
  },
  backIcon: {
    width: 18, // Ukuran lebar ikon back
    height: 18, // Ukuran tinggi ikon back
    tintColor: "#333", // Menambahkan warna ikon jika diperlukan
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  logoText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#007AFF",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
    textAlign: "center",
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  cell: {
    flex: 1,
    fontSize: 14,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 16,
  },
});

export default IzinSiswa;
