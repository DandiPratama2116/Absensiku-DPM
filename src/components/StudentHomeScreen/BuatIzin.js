import React, { useState } from 'react';    
import { StyleSheet, Text, View, TextInput, ScrollView, Button, Picker, TouchableOpacity, Alert, Image } from 'react-native';    
import * as DocumentPicker from 'expo-document-picker';    
    
const BuatIzin = ({ navigation }) => {    
  const [nama, setNama] = useState('');    
  const [nisn, setNisn] = useState('');    
  const [kelas, setKelas] = useState('');    
  const [keterangan, setKeterangan] = useState('');    
  const [deskripsi, setDeskripsi] = useState('');    
  const [file, setFile] = useState(null);    
    
  const handleFileUpload = async () => {    
    let result = await DocumentPicker.getDocumentAsync({});    
    if (result.type === 'success') {    
      setFile(result);    
    }    
  };    
    
  const handleSubmit = () => {    
    Alert.alert(    
      'Form Submitted',    
      `Nama: ${nama}\nNISN: ${nisn}\nKelas: ${kelas}\nKeterangan: ${keterangan}\nDeskripsi: ${deskripsi}\nFile: ${file ? file.name : 'No file uploaded'}`    
    );    
  };    
    
  return (    
    <ScrollView contentContainerStyle={styles.container}>    
      <View style={styles.header}>    
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>    
          <Image source={require('../../../assets/back.png')} style={styles.backIcon} />    
        </TouchableOpacity>    
        <Text style={styles.headerText}>Buat Izin</Text>    
      </View>    
      <View style={styles.formContainer}>    
        <View style={styles.formGroup}>    
          <Text style={styles.label}>Nama</Text>    
          <TextInput    
            style={styles.input}    
            value={nama}    
            onChangeText={setNama}    
            placeholder="Masukkan nama"    
          />    
        </View>    
        <View style={styles.formGroup}>    
          <Text style={styles.label}>NISN</Text>    
          <TextInput    
            style={styles.input}    
            value={nisn}    
            onChangeText={setNisn}    
            placeholder="Masukkan NISN"    
            keyboardType="numeric"    
          />    
        </View>    
        <View style={styles.formGroup}>    
          <Text style={styles.label}>Kelas</Text>    
          <TextInput    
            style={styles.input}    
            value={kelas}    
            onChangeText={setKelas}    
            placeholder="Masukkan kelas"    
          />    
        </View>    
        <View style={styles.formGroup}>    
          <Text style={styles.label}>Keterangan</Text>    
          <Picker    
            style={styles.picker}    
            selectedValue={keterangan}    
            onValueChange={(itemValue) => setKeterangan(itemValue)}    
          >    
            <Picker.Item label="Pilih Keterangan" value="" />    
            <Picker.Item label="Sakit" value="sakit" />    
            <Picker.Item label="Izin" value="izin" />    
            <Picker.Item label="Alpa" value="alpa" />    
          </Picker>    
        </View>    
        <View style={styles.formGroup}>    
          <Text style={styles.label}>Deskripsi</Text>    
          <TextInput    
            style={styles.textarea}    
            value={deskripsi}    
            onChangeText={setDeskripsi}    
            placeholder="Masukkan deskripsi"    
            multiline    
            numberOfLines={4}    
          />    
        </View>    
        <View style={styles.formGroup}>    
          <Text style={styles.label}>Bukti Pendukung (Opsional)</Text>    
          <TouchableOpacity style={styles.fileUploadButton} onPress={handleFileUpload}>    
            <Text style={styles.fileUploadButtonText}>    
              {file ? file.name : 'Pilih File'}    
            </Text>    
          </TouchableOpacity>    
        </View>    
        <TouchableOpacity style={styles.uploadButton} onPress={handleSubmit}>    
          <Text style={styles.uploadButtonText}>Upload</Text>    
        </TouchableOpacity>   
      </View>    
    </ScrollView>    
  );    
};    
    
const styles = StyleSheet.create({    
  container: {    
    flexGrow: 1,    
    backgroundColor: '#f4f4f9',    
    padding: 20,    
  },    
  header: {    
    flexDirection: 'row',    
    alignItems: 'center',    
    justifyContent: 'space-between', // Space between back button and header text  
    marginBottom: 20,    
  },    
  backButton: {    
    marginRight: 10,    
  },    
  backIcon: {    
    width: 18,    
    height: 18,    
  },    
  headerText: {    
    flex: 1, // Allow the text to take up remaining space  
    fontSize: 20,    
    fontWeight: 'bold',    
    color: '#140604',    
    textAlign: 'center', // Center the text  
  },    
  formContainer: {    
    backgroundColor: '#fff',    
    padding: 20,    
    borderRadius: 8,    
    shadowColor: '#000',    
    shadowOffset: { width: 0, height: 2 },    
    shadowOpacity: 0.1,    
    shadowRadius: 4,    
    elevation: 3,    
  },    
  formGroup: {    
    marginBottom: 15,    
  },    
  label: {    
    marginBottom: 5,    
    fontSize: 16,    
    fontWeight: 'reguler',    
    color: '#08080d',    
  },    
  input: {    
    width: '100%',    
    padding: 10,    
    borderColor: '#ccc',    
    borderWidth: 1,    
    borderRadius: 8,    
    backgroundColor: '#fff',    
  },    
  picker: {    
    width: '100%',    
    height: 50,    
    borderColor: '#ccc',    
    borderWidth: 1,    
    borderRadius: 8,    
    backgroundColor: '#fff',    
  },    
  textarea: {    
    width: '100%',    
    padding: 10,    
    borderColor: '#ccc',    
    borderWidth: 1,    
    borderRadius: 8,    
    backgroundColor: '#fff',    
    textAlignVertical: 'top',    
  },    
  fileUploadButton: {    
    width: '100%',    
    padding: 10,    
    backgroundColor: '#e9edf0',    
    borderRadius: 8,    
    alignItems: 'center',    
  },    
  fileUploadButtonText: {    
    color: '#555',    
  },    
  uploadButton: {    
    backgroundColor: '#87CEFA', // Light blue color    
    padding: 15,    
    borderRadius: 8,    
    alignItems: 'center',    
    marginTop: 20,    
  },    
  uploadButtonText: {    
    color: '#fff',    
    fontSize: 16,    
    fontWeight: 'bold',    
  },    
});   
    
export default BuatIzin;    
