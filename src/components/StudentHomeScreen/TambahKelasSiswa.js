import React, { useState } from "react";  
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";  
  
const TambahKelasSiswa = ({ navigation }) => {  
  const [nama, setNama] = useState("");  
  const [nisn, setNisn] = useState("");  
  const [kodeKelas, setKodeKelas] = useState("");  
  
  const handleTambahKelasSiswa = () => {  
    if (!nama || !nisn || !kodeKelas) {  
      Alert.alert("Error", "Semua field harus diisi!");  
      return;  
    }  
  
    if (kodeKelas.length < 6) {  
      Alert.alert("Error", "Kode kelas harus terdiri dari minimal 6 karakter!");  
      return;  
    }  
  
    // Simulate class addition process  
    Alert.alert(  
      "Berhasil",  
      `Kelas dengan kode ${kodeKelas} berhasil ditambahkan!`  
    );  
    setNama("");  
    setNisn("");  
    setKodeKelas("");  
  };  
  
  return (  
    <View style={styles.container}>  
      {/* Back Button */}  
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>  
        <Image source={require("../../../assets/back.png")} style={styles.backIcon} />  
      </TouchableOpacity>  
  
      {/* Logo */}  
      <Image  
        source={require("../../../assets/sidikjari.png")}  
        style={styles.logo}  
      />  
      <Text style={styles.headerText}>ABSENSIKU</Text>  
  
      {/* Input Fields */}  
      <Text style={styles.label}>Nama:</Text>  
      <TextInput  
        style={styles.input}  
        placeholder="Masukkan nama"  
        value={nama}  
        onChangeText={setNama}  
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
        value={kodeKelas}  
        onChangeText={setKodeKelas}  
      />  
  
      {/* Instructions */}  
      <View style={styles.instructions}>  
        <Text style={styles.instructionText}>  
          • Gunakan akun yang diizinkan  
        </Text>  
        <Text style={styles.instructionText}>  
          • Gunakan kode kelas yang terdiri atas 6 huruf atau angka, tanpa spasi atau simbol  
        </Text>  
      </View>  
  
      {/* Button */}  
      <TouchableOpacity style={styles.button} onPress={handleTambahKelasSiswa}>  
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
    justifyContent: "center",  
    alignItems: "center",  
  },  
  backButton: {  
    position: "absolute",  
    top: 20,  
    left: 20,  
  },  
  backIcon: {  
    width: 18,  
    height: 18,  
  },  
  logo: {  
    width: 100,  
    height: 100,  
    marginBottom: 20,  
  },  
  headerText: {  
    fontSize: 20,  
    fontWeight: "bold",  
    textAlign: "center",  
    marginBottom: 30,  
    color: "#2D7CF3",  
  },  
  label: {  
    fontSize: 16,  
    marginVertical: 8,  
    textAlign: "left",  
    width: "100%",  
  },  
  input: {  
    borderWidth: 1,  
    borderColor: "#ccc",  
    borderRadius: 8,  
    padding: 12,  
    marginBottom: 12,  
    fontSize: 16,  
    width: "100%",  
  },  
  instructions: {  
    marginBottom: 20,  
    width: "100%",  
  },  
  instructionText: {  
    fontSize: 14,  
    color: "#555",  
    marginBottom: 4,  
    textAlign: "left",  
  },  
  button: {  
    backgroundColor: "#87CEFA",  
    padding: 14,  
    borderRadius: 8,  
    alignItems: "center",  
    width: "100%",  
  },  
  buttonText: {  
    color: "#fff",  
    fontSize: 16,  
    fontWeight: "bold",  
  },  
});  
  
export default TambahKelasSiswa;  
