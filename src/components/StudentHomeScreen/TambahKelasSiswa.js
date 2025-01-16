import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const TambahKelas = () => {
  const [name, setName] = useState("");
  const [nisn, setNisn] = useState("");
  const [classCode, setClassCode] = useState("");

  const handleTambahKelas = () => {
    if (!name || !nisn || !classCode) {
      Alert.alert("Error", "Semua field harus diisi!");
      return;
    }

    if (classCode.length < 6) {
      Alert.alert("Error", "Kode kelas harus terdiri dari minimal 6 karakter!");
      return;
    }

    // Simulate class addition process
    Alert.alert(
      "Berhasil",
      `Kelas dengan kode ${classCode} berhasil ditambahkan!`
    );
    setName("");
    setNisn("");
    setClassCode("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tambahkan Kelas</Text>
      <Image
        source={require("../../../assets/sidikjari.png")}
        style={styles.logo}
      />
      <Text style={styles.headerText}>ABSENSIKU</Text>
      <Text style={styles.label}>Nama:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan nama"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>NISN:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan NISN"
        value={nisn}
        onChangeText={setNisn}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Kode Kelas:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan kode kelas"
        value={classCode}
        onChangeText={setClassCode}
      />

      <View style={styles.instructions}>
        <Text style={styles.instructionText}>
          • Gunakan akun yang diizinkan
        </Text>
        <Text style={styles.instructionText}>
          • Gunakan kode kelas yang terdiri atas 6 huruf atau angka, tanpa spasi
          atau simbol
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleTambahKelas}>
        <Text style={styles.buttonText}>MASUK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  instructions: {
    marginBottom: 20,
  },
  instructionText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  button: {
    backgroundColor: "#87CEFA",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TambahKelas;
