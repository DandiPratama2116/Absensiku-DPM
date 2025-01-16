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
} from "react-native";

const JadwalKelas = ({ navigation, route }) => {
  const { className, mataPelajaran } = route.params || {};
  const [selectedClass, setSelectedClass] = useState(className || "");
  const [selectedSubject, setSelectedSubject] = useState(mataPelajaran || "");
  const [formData, setFormData] = useState({
    pertemuan: "",
    topik: "",
    tanggal: "",
    waktu: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleUpload = () => {
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

    Alert.alert("Jadwal Diupload!", "Data berhasil diupload.");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Tombol Kembali */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backSymbol}>{"Back"}</Text>
      </TouchableOpacity>

      {/* Logo ABSENSIKU */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/sidikjari.png")}
          style={styles.logo}
        />
        <Text style={styles.logoText}>ABSENSIKU</Text>
      </View>

      {/* Form Jadwal Kelas */}
      <Text style={styles.title}>Jadwal Kelas</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.formContainer}>
          {/* Kelas */}
          <View style={styles.formRow}>
            <Text style={styles.label}>Kelas</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Nama Kelas"
              value={selectedClass}
              onChangeText={(text) => setSelectedClass(text)}
            />
          </View>
          <View style={styles.separator} />

          {/* Mata Pelajaran */}
          <View style={styles.formRow}>
            <Text style={styles.label}>Mata Pelajaran</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Nama Mata Pelajaran"
              value={selectedSubject}
              onChangeText={(text) => setSelectedSubject(text)}
            />
          </View>
          <View style={styles.separator} />

          {/* Pertemuan */}
          <View style={styles.formRow}>
            <Text style={styles.label}>Pertemuan</Text>
            <TextInput
              style={styles.input}
              placeholder="Pertemuan"
              value={formData.pertemuan}
              onChangeText={(text) => handleInputChange("pertemuan", text)}
            />
          </View>
          <View style={styles.separator} />

          {/* Topik Belajar */}
          <View style={styles.formRow}>
            <Text style={styles.label}>Topik Belajar</Text>
            <TextInput
              style={styles.input}
              placeholder="Topik"
              value={formData.topik}
              onChangeText={(text) => handleInputChange("topik", text)}
            />
          </View>
          <View style={styles.separator} />

          {/* Atur Tanggal */}
          <View style={styles.formRow}>
            <Text style={styles.label}>Atur Tanggal</Text>
            <TextInput
              style={styles.input}
              placeholder="DD/MM/YYYY"
              value={formData.tanggal}
              onChangeText={(text) => handleInputChange("tanggal", text)}
            />
          </View>
          <View style={styles.separator} />

          {/* Waktu */}
          <View style={styles.formRow}>
            <Text style={styles.label}>Waktu</Text>
            <TextInput
              style={styles.input}
              placeholder="HH:MM"
              value={formData.waktu}
              onChangeText={(text) => handleInputChange("waktu", text)}
            />
          </View>
          <View style={styles.separator} />

          {/* Tombol Upload */}
          <TouchableOpacity style={styles.button} onPress={handleUpload}>
            <Text style={styles.buttonText}>Upload Jadwal</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  formContainer: {
    marginBottom: 24,
  },
  formRow: {
    marginBottom: 16,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
  },
  button: {
    backgroundColor: "#2D7CF3",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  backSymbol: {
    fontSize: 18,
    color: "black",
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#007AFF",
  },
});

export default JadwalKelas;
