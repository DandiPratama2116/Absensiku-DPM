import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

const JadwalKelas = ({ navigation, route }) => {
  const { className, mataPelajaran } = route.params || {};
  const [selectedClass, setSelectedClass] = useState(className || "");
  const [selectedSubject, setSelectedSubject] = useState(mataPelajaran || "");
  const [formData, setFormData] = useState({
    pertemuan: "",
    topik: "",
    tanggal: "",
    waktu: "", // Waktu dimasukkan secara manual tanpa validasi
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleUpload = async () => {
    if (
      !selectedClass ||
      !selectedSubject ||
      !formData.pertemuan ||
      !formData.topik ||
      !formData.tanggal ||
      !formData.waktu
    ) {
      Alert.alert("Error", "Harap isi semua data!");
      return;
    }

    try {
      const response = await fetch("https://example.com/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          className: selectedClass,
          subject: selectedSubject,
          pertemuan: formData.pertemuan,
          topik: formData.topik,
          tanggal: formData.tanggal,
          waktu: formData.waktu,
        }),
      });

      if (response.ok) {
        Alert.alert("Jadwal Diupload!", "Data berhasil diupload.");
        navigation.goBack();
      } else {
        Alert.alert("Error", "Terjadi kesalahan saat meng-upload data.");
      }
    } catch (error) {
      console.error("Error uploading data: ", error);
      Alert.alert("Error", "Terjadi masalah saat menghubungi server.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require("../../../assets/back.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Jadwal Kelas</Text>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Kelas</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan Nama Kelas"
            value={selectedClass}
            onChangeText={(text) => setSelectedClass(text)}
          />

          <Text style={styles.label}>Mata Pelajaran</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan Nama Mata Pelajaran"
            value={selectedSubject}
            onChangeText={(text) => setSelectedSubject(text)}
          />

          <Text style={styles.label}>Pertemuan</Text>
          <TextInput
            style={styles.input}
            placeholder="Pertemuan"
            value={formData.pertemuan}
            onChangeText={(text) => handleInputChange("pertemuan", text)}
          />

          <Text style={styles.label}>Topik Belajar</Text>
          <TextInput
            style={styles.input}
            placeholder="Topik"
            value={formData.topik}
            onChangeText={(text) => handleInputChange("topik", text)}
          />

          <Text style={styles.label}>Atur Tanggal</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YYYY"
            value={formData.tanggal}
            onChangeText={(text) => handleInputChange("tanggal", text)}
          />

          <Text style={styles.label}>Waktu</Text>
          <TextInput
            style={styles.input}
            placeholder="HH:MM"
            value={formData.waktu}
            onChangeText={(text) => handleInputChange("waktu", text)} // Input waktu secara manual
            keyboardType="numeric" // Memastikan hanya angka yang bisa dimasukkan
            maxLength={5} // Membatasi input hingga 5 karakter (HH:MM)
          />

          <TouchableOpacity style={styles.button} onPress={handleUpload}>
            <Text style={styles.buttonText}>Upload Jadwal</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
  scrollContainer: {
    padding: 0,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backButton: {
    marginRight: 8,
    marginTop: 16, // Menambahkan margin atas agar ikon back lebih ke bawah
  },
  backIcon: {
    width: 18,
    height: 18,
    marginLeft: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: "#333333",
    marginBottom: 8,
    color: '#08080d',
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#87CEFA",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default JadwalKelas;
