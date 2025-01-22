import React from "react";  
import {  
  View,  
  Text,  
  StyleSheet,  
  TouchableOpacity,  
  Image,  
  FlatList,  
} from "react-native";  
import { useNavigation, useRoute } from "@react-navigation/native";  
  
const AbsenKelas = () => {  
  const navigation = useNavigation();  
  const route = useRoute();  
  const { mataPelajaran } = route.params;  
  
  const data = [  
    { no: 1, pertemuan: "Pertemuan 1", topik: "Anatomi" },  
    { no: 2, pertemuan: "Pertemuan 2", topik: "Alat Pencernaan" },  
    { no: 3, pertemuan: "Pertemuan 3", topik: "Rantai Makanan" },  
    { no: 4, pertemuan: "Pertemuan 4", topik: "Organ Manusia" },  
    { no: 5, pertemuan: "Pertemuan 5", topik: "Simbiosis Mutualisme" },  
  ];  
  
  const renderItem = ({ item }) => (  
    <View style={styles.row}>  
      <Text style={[styles.cell, styles.cellNo]}>{item.no}</Text>  
      <Text style={[styles.cell, styles.cellPertemuan]}>{item.pertemuan}</Text>  
      <Text style={[styles.cell, styles.cellTopik]}>{item.topik}</Text>  
      <TouchableOpacity style={styles.absenButton}>  
        <Text style={styles.absenButtonText}>Absen</Text>  
      </TouchableOpacity>  
    </View>  
  );  
  
  return (  
    <View style={styles.container}>  
      {/* Header */}  
      <View style={styles.header}>  
        <TouchableOpacity  
          onPress={() => navigation.goBack()}  
          style={styles.backButton}  
        >  
          <Image  
            source={require("../../../assets/back.png")}  
            style={styles.backIcon}  
          />  
        </TouchableOpacity>  
        <Text style={styles.mataPelajaran}>{mataPelajaran}</Text>  
      </View>  
  
      {/* Tabel Absensi */}  
      <View style={styles.tableContainer}>  
        <View style={styles.tableHeader}>  
          <Text style={[styles.headerCell, styles.headerNo]}>No</Text>  
          <Text style={[styles.headerCell, styles.headerPertemuan]}>Pertemuan</Text>  
          <Text style={[styles.headerCell, styles.headerTopik]}>  
            Topik Pembelajaran  
          </Text>  
          <Text style={styles.headerCell}>Aksi</Text>  
        </View>  
  
        <FlatList  
          data={data}  
          keyExtractor={(item) => item.no.toString()}  
          renderItem={renderItem}  
        />  
      </View>  
    </View>  
  );  
};  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: "#FFFFFF",  
    padding: 16,  
  },  
  header: {  
    flexDirection: "row", // Align items horizontally  
    alignItems: "center", // Center items vertically  
    justifyContent: "space-between", // Space between items  
    marginBottom: 16,  
  },  
  backButton: {  
    padding: 8,  
  },  
  backIcon: {  
    width: 20,  
    height: 20,  
    resizeMode: "contain",  
  },  
  mataPelajaran: {  
    flex: 1, // Allow the text to take up remaining space  
    fontSize: 18,  
    fontWeight: "bold",  
    color: "#333",  
    textAlign: "right", // Align text to the right  
    marginBottom: 15, // Space between text and table  
  },  
  tableContainer: {  
    borderWidth: 1,  
    borderColor: "#E0E0E0",  
    borderRadius: 8,  
    backgroundColor: "#F9F9F9",  
    padding: 8,  
  },  
  tableHeader: {  
    flexDirection: "row",  
    borderBottomWidth: 1,  
    borderBottomColor: "#E0E0E0",  
    paddingBottom: 8,  
    marginBottom: 8,  
  },  
  headerCell: {  
    fontWeight: "bold",  
    fontSize: 14,  
    color: "#333",  
  },  
  headerNo: {  
    width: 40,  
    textAlign: "center",  
  },  
  headerPertemuan: {  
    flex: 2,  
    textAlign: "left",  
    paddingLeft: 8,  
  },  
  headerTopik: {  
    flex: 2,  
    textAlign: "left",  
    paddingLeft: 8,  
  },  
  row: {  
    flexDirection: "row",  
    alignItems: "center",  
    paddingVertical: 10,  
    paddingHorizontal: 8,  
    marginBottom: 8,  
    backgroundColor: "#FFFFFF",  
    borderRadius: 8,  
    shadowColor: "#000",  
    shadowOpacity: 0.1,  
    shadowOffset: { width: 0, height: 1 },  
    shadowRadius: 4,  
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
  cellPertemuan: {  
    flex: 2,  
    textAlign: "left",  
    paddingLeft: 8,  
  },  
  cellTopik: {  
    flex: 2,  
    textAlign: "left",  
    paddingLeft: 8,  
  },  
  absenButton: {  
    backgroundColor: "#a2dbde",  
    paddingVertical: 6,  
    paddingHorizontal: 12,  
    borderRadius: 15,  
  },  
  absenButtonText: {  
    color: "##ffffff",    
    fontSize: 14,  
  },  
});  
  
export default AbsenKelas;  
