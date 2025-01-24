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
  const { addClass } = route.params; // Mendapatkan fungsi addClass dari parameter
  const [formData, setFormData] = useState({
    kelas: "",
    mataPelajaran: "",
    hari: "",
    waktu: "",
    tahunAjaran: "",
    semester: "",
  });
  const [newClass, setNewClass] = useState(null); // State untuk kelas yang baru dibuat

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    if (
      !formData.kelas ||
      !formData.mataPelajaran ||
      !formData.hari ||
      !formData.waktu ||
      !formData.tahunAjaran ||
      !formData.semester
    ) {
      Alert.alert("Error", "Semua field harus diisi.");
      return;
    }

    const generateCode = () =>
      Math.floor(100000 + Math.random() * 900000).toString();
    const generatedCode = generateCode();

    const dataToSend = {
      kelas: formData.kelas,
      mataPelajaran: formData.mataPelajaran,
      hari: formData.hari,
      waktu: formData.waktu,
      tahunAjaran: formData.tahunAjaran,
      semester: formData.semester,
      code: generatedCode,
      teacher_id: "1", // Ganti dengan ID guru yang sedang login
    };

    try {
      const response = await fetch("http://192.168.1.4:8083/buatkelas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();

      if (response.ok) {
        addClass(data.data); // Menambahkan kelas ke daftar kelas di halaman home guru
        setNewClass(data.data); // Menyimpan kelas yang baru dibuat
        Alert.alert("Success", `Kelas berhasil dibuat! Kode: ${generatedCode}`);
        navigation.goBack();
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      console.error("Error saat mengirim data:", error);
      Alert.alert("Error", "Terjadi kesalahan pada server.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {navigation.canGoBack() && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Image
              source={require("../../../assets/back.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        )}

        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/sidikjari.png")}
            style={styles.logo}
          />
          <Text style={styles.logoText}>ABSENSIKU</Text>
        </View>
      </View>

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

      {newClass && (
        <View style={styles.tokenContainer}>
          <Text style={styles.tokenLabel}>Kelas Baru:</Text>
          <Text style={styles.token}>Nama: {newClass.kelas}</Text>
          <Text style={styles.token}>
            Mata Pelajaran: {newClass.mataPelajaran}
          </Text>
          <Text style={styles.token}>Hari: {newClass.hari}</Text>
          <Text style={styles.token}>Waktu: {newClass.waktu}</Text>
          <Text style={styles.token}>Tahun Ajaran: {newClass.tahunAjaran}</Text>
          <Text style={styles.token}>Semester: {newClass.semester}</Text>
          <Text style={styles.token}>Kode: {newClass.code}</Text>
        </View>
      )}

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
  backButton: {
    marginBottom: 8,
  },
  backIcon: {
    width: 18,
    height: 18,
    tintColor: "#333",
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
  tokenContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  tokenLabel: {
    fontWeight: "bold",
  },
  token: {
    marginVertical: 4,
  },
});

export default BuatKelas;
