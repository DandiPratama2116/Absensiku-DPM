import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";

const DetailIzinSiswa = ({ route, navigation }) => {
  const { student } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

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

      {/* Header dengan Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/sidikjari.png")}
          style={styles.logo}
        />
        <Text style={styles.logoText}>ABSENSIKU</Text>
      </View>

      {/* Detail Siswa */}
      <View style={styles.detailContainer}>
        <Text style={styles.detailText}>
          <Text style={styles.label}>Nama:</Text> {student.name}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.label}>NISN:</Text> 22102840 0392039
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.label}>Kelas:</Text> 10A
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.label}>Keterangan:</Text> {student.description}
        </Text>

        {/* Deskripsi */}
        <Text style={[styles.detailText, { marginTop: 16 }]}>
          <Text style={styles.label}>Deskripsi:</Text>
        </Text>
        <View style={styles.descriptionBox} />

        {/* Bukti Pendukung */}
        <Text style={[styles.detailText, { marginTop: 16 }]}>
          <Text style={styles.label}>Bukti Pendukung (Opsional):</Text>
        </Text>
        <TouchableOpacity
          style={styles.attachmentButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.attachmentText}>
            Lihat Gambar Bukti Pendukung
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal untuk Menampilkan Gambar Bukti Pendukung */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={{ uri: student.imageUrl }} // Menggunakan URL gambar dari data siswa
              style={styles.image}
              resizeMode="contain"
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    marginBottom: 10,
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
  detailContainer: {
    marginTop: 16,
  },
  detailText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
  },
  descriptionBox: {
    height: 100,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  attachmentButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  attachmentText: {
    fontSize: 14,
    color: "#007AFF",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  closeButton: {
    marginTop: 16,
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default DetailIzinSiswa;
