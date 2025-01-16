import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/native";

const BuatIzin = () => {
  const navigation = useNavigation();
  const [nama, setNama] = useState("");
  const [nisn, setNisn] = useState("");
  const [kelas, setKelas] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [file, setFile] = useState(null);

  const handleFileUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
      });
      if (result.type === "success") {
        setFile(result);
      }
    } catch (error) {
      console.error("Error selecting file: ", error);
    }
  };

  const handleBack = () => {
    navigation.goBack(); // Navigasi kembali ke halaman sebelumnya
  };

  const handleSubmit = () => {
    if (!nama || !nisn || !kelas || !keterangan || !deskripsi) {
      alert("Semua field kecuali file pendukung wajib diisi!");
      return;
    }

    alert("Data berhasil divalidasi!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text onPress={handleBack} style={styles.backText}>
        {"< Back"} {/* Simbol "<" sebagai tanda kembali */}
      </Text>

      <View style={styles.headerContainer}>
        <Image
          source={require("../../../assets/sidikjari.png")}
          style={styles.logo}
        />
        <Text style={styles.headerText}>ABSENSIKU</Text>
      </View>

      <Text style={styles.label}>Nama :</Text>
      <TextInput
        style={styles.input}
        value={nama}
        onChangeText={setNama}
        placeholder="Masukkan nama Anda"
      />

      <Text style={styles.label}>NISN :</Text>
      <TextInput
        style={styles.input}
        value={nisn}
        onChangeText={setNisn}
        placeholder="Masukkan NISN Anda"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Kelas :</Text>
      <TextInput
        style={styles.input}
        value={kelas}
        onChangeText={setKelas}
        placeholder="Masukkan kelas Anda"
      />

      <Text style={styles.label}>Keterangan :</Text>
      <TextInput
        style={styles.input}
        value={keterangan}
        onChangeText={setKeterangan}
        placeholder="Pilih keterangan"
      />

      <Text style={styles.label}>Deskripsi :</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={deskripsi}
        onChangeText={setDeskripsi}
        placeholder="Masukkan deskripsi"
        multiline
      />

      <Text style={styles.label}>Bukti Pendukung (Opsional):</Text>
      <TouchableOpacity style={styles.fileButton} onPress={handleFileUpload}>
        <Text style={styles.fileButtonText}>
          {file ? file.name : "Pilih File"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Upload</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  backText: {
    color: "#007BFF",
    fontSize: 16,
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 10, // Memberikan jarak antara logo dan teks
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007BFF",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  fileButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  fileButtonText: {
    fontSize: 16,
    color: "#007BFF",
  },
  submitButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BuatIzin;
