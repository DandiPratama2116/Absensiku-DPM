import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ClassDescriptionScreen = ({ route }) => {
  const { formData } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deskripsi Kelas</Text>
      <Text style={styles.label}>Kelas: {formData.kelas}</Text>
      <Text style={styles.label}>Mata Pelajaran: {formData.mataPelajaran}</Text>
      <Text style={styles.label}>Pertemuan: {formData.pertemuan}</Text>
      <Text style={styles.label}>Topik: {formData.topik}</Text>
      <Text style={styles.label}>Tanggal: {formData.tanggal}</Text>
      <Text style={styles.label}>Waktu: {formData.waktu}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          /* Logika untuk kembali ke halaman sebelumnya */
          navigation.goBack();
        }}
      >
        <Text style={styles.buttonText}>Kembali</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#ADD8E6",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ClassDescriptionScreen;
