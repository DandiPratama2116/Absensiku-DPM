import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

const BuatKelas = ({ navigation, route }) => {
  const [formData, setFormData] = useState({
    kelas: "",
    mataPelajaran: "",
    hari: "",
    waktu: "",
    tahunAjaran: "",
    semester: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    const { addClass } = route.params;
    if (
      !formData.kelas ||
      !formData.mataPelajaran ||
      !formData.hari ||
      !formData.waktu
    ) {
      Alert.alert("Error", "Harap isi semua data!");
      return;
    }
    addClass({ ...formData, jadwal: null }); // Jadwal diset null saat kelas dibuat
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {/* Tombol Kembali dengan Ikon */}
        {navigation.canGoBack() && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Image
              source={require("../../../assets/back.png")} // Ganti dengan path gambar back.png
              style={styles.backIcon} // Gaya untuk mengatur ukuran ikon
            />
          </TouchableOpacity>
        )}

        {/* Logo ABSENSIKU */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/sidikjari.png")}
            style={styles.logo}
          />
          <Text style={styles.logoText}>ABSENSIKU</Text>
        </View>
      </View>

      {/* Form Pembuatan Kelas */}
      <Text style={styles.title}>Buat Kelas</Text>
      <View style={styles.formContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>1. Kelas</Text>
          <TextInput
            style={styles.input}
            placeholder="Nama Kelas"
            value={formData.kelas}
            onChangeText={(text) => handleInputChange("kelas", text)}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>2. Mata Pelajaran</Text>
          <TextInput
            style={styles.input}
            placeholder="Mata Pelajaran"
            value={formData.mataPelajaran}
            onChangeText={(text) => handleInputChange("mataPelajaran", text)}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>3. Hari</Text>
          <TextInput
            style={styles.input}
            placeholder="Hari"
            value={formData.hari}
            onChangeText={(text) => handleInputChange("hari", text)}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>4. Waktu</Text>
          <TextInput
            style={styles.input}
            placeholder="Waktu"
            value={formData.waktu}
            onChangeText={(text) => handleInputChange("waktu", text)}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>5. Tahun Ajaran</Text>
          <TextInput
            style={styles.input}
            placeholder="Tahun Ajaran"
            value={formData.tahunAjaran}
            onChangeText={(text) => handleInputChange("tahunAjaran", text)}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>6. Semester</Text>
          <TextInput
            style={styles.input}
            placeholder="Semester"
            value={formData.semester}
            onChangeText={(text) => handleInputChange("semester", text)}
          />
        </View>
      </View>

      {/* Tombol Simpan */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Simpan</Text>
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
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  // Gaya untuk tombol back dengan ikon
  backButton: {
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
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  logoText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2D7CF3",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Nunito Sans",
  },
  formContainer: {
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#ADD8E6",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default BuatKelas;
