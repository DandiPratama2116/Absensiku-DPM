import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const KelasStudent = () => {
  const navigation = useNavigation();

  const data = [
    { no: 1, mataPelajaran: "Biologi", guru: "Wiranto S.Pd" },
    { no: 2, mataPelajaran: "Fisika", guru: "Agung Haryadi S.Pd" },
    {
      no: 3,
      mataPelajaran: "Teknologi Informasi dan Komunikasi",
      guru: "Rahmat Hidayah S.Pd",
    },
    {
      no: 4,
      mataPelajaran: "Pendidikan Kewarganegaraan",
      guru: "Imam Saputra S.Pd",
    },
    { no: 5, mataPelajaran: "Pendidikan Agama Islam", guru: "Firmansyah S.Pd" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.cellNo]}>{item.no}</Text>
      <Text style={[styles.cell, styles.cellMataPelajaran]}>
        {item.mataPelajaran}
      </Text>
      <Text style={[styles.cell, styles.cellGuru]}>{item.guru}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("HalamanLain", {
            mataPelajaran: item.mataPelajaran,
          })
        }
      >
        <Text style={styles.buttonText}>Pilih</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Image
            source={require("../../../assets/sidikjari.png")}
            style={styles.logo}
          />
          <Text style={styles.headerText}>ABSENSIKU</Text>
        </View>
      </View>
      <Text style={styles.kelas}>Siswa Kelas 10A</Text>
      <ScrollView horizontal>
        <View>
          <View style={styles.tableHeader}>
            <Text style={[styles.headerCell, styles.headerNo]}>No</Text>
            <Text style={[styles.headerCell, styles.headerMataPelajaran]}>
              Mata Pelajaran
            </Text>
            <Text style={[styles.headerCell, styles.headerGuru]}>Guru</Text>
            <Text style={styles.headerCell}>Aksi</Text>
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.no.toString()}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  backButton: {
    padding: 4,
    backgroundColor: "#007BFF",
    borderRadius: 4,
  },
  backText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  headerCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2D7CF3",
  },
  kelas: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#2D7CF3",
    paddingBottom: 8,
    marginBottom: 8,
  },
  headerCell: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    color: "#2D7CF3",
  },
  headerNo: {
    width: 40,
  },
  headerMataPelajaran: {
    flex: 2,
    textAlign: "left",
    paddingLeft: 8,
  },
  headerGuru: {
    flex: 1.5,
    textAlign: "left",
    paddingLeft: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 8,
    paddingVertical: 10,
    paddingHorizontal: 8,
    elevation: 2,
  },
  cell: {
    fontSize: 14,
    color: "#333",
  },
  cellNo: {
    width: 40,
    textAlign: "center",
  },
  cellMataPelajaran: {
    flex: 2,
    textAlign: "left",
    paddingLeft: 8,
  },
  cellGuru: {
    flex: 1.5,
    textAlign: "left",
    paddingLeft: 8,
  },
  button: {
    backgroundColor: "#2D7CF3",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
});

export default KelasStudent;
