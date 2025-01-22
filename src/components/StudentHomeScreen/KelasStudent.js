import React from "react";  
import {  
  View,  
  Text,  
  StyleSheet,  
  TouchableOpacity,  
  FlatList,  
  Image,  
} from "react-native";  
import { useNavigation } from "@react-navigation/native";  
  
const KelasStudent = () => {  
  const navigation = useNavigation();  
  
  const data = [  
    { id: 1, mataPelajaran: "Biologi" },  
    { id: 2, mataPelajaran: "Fisika" },  
    { id: 3, mataPelajaran: "Matematika" },  
    { id: 4, mataPelajaran: "Kimia" },  
  ];  
  
  const renderItem = ({ item }) => (  
    <View style={styles.row}>  
      <Text style={styles.cell}>{item.mataPelajaran}</Text>  
      <TouchableOpacity  
        style={styles.button}  
        onPress={() =>  
          navigation.navigate("AbsenKelas", { mataPelajaran: item.mataPelajaran })  
        }  
      >  
        <Text style={styles.buttonText}>Pilih</Text>  
      </TouchableOpacity>  
    </View>  
  );  
  
  return (  
    <View style={styles.container}>  
      <View style={styles.header}>  
        <TouchableOpacity onPress={() => navigation.goBack()}>  
          <Image source={require("../../../assets/back.png")} style={styles.backIcon} />  
        </TouchableOpacity>  
        <Text style={styles.headerText}>Daftar Mata Pelajaran</Text>  
      </View>  
      <FlatList  
        data={data}  
        keyExtractor={(item) => item.id.toString()}  
        renderItem={renderItem}  
        contentContainerStyle={styles.listContainer}  
      />  
    </View>  
  );  
};  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: "#F5F5F5", // Changed background color  
    padding: 16,  
  },  
  header: {  
    flexDirection: "row",  
    alignItems: "center",  
    marginBottom: 24,  
    justifyContent: "space-between", // Added to space out items  
  },  
  headerText: {  
    flex: 1, // Allow the text to take up remaining space  
    fontSize: 24, // Increased font size  
    fontWeight: "bold",  
    textAlign: "center", // Center the text  
    color: "#333333", // Changed text color  
  },  
  listContainer: {  
    paddingBottom: 16,  
  },  
  row: {  
    flexDirection: "row",  
    alignItems: "center",  
    justifyContent: "space-between",  
    padding: 16, // Increased padding  
    marginBottom: 12,  
    backgroundColor: "#FFFFFF", // Changed background color  
    borderRadius: 12, // Increased border radius  
    shadowColor: "#000",  
    shadowOpacity: 0.1,  
    shadowOffset: { width: 0, height: 2 },  
    shadowRadius: 4,  
    elevation: 3,  
  },  
  cell: {  
    fontSize: 18, // Increased font size  
    color: "#333333", // Changed text color  
  },  
  button: {  
    backgroundColor: "#add8e6", // Changed background color  
    paddingVertical: 10, // Adjusted padding  
    paddingHorizontal: 20, // Adjusted padding  
    borderRadius: 20, // Increased border radius  
  },  
  buttonText: {  
    color: "##FFFFFF", // Changed text color  
    fontSize: 15, // Increased font size  
  },  
  backIcon: {  
    width: 18, // Set width of the icon  
    height: 18, // Set height of the icon  
  },  
});  
  
export default KelasStudent;  
