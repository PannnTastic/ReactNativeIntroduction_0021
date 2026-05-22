import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const abra = () => {
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if(!nama || !username || !password){
        Alert.alert("Error", "Tolong isi semua form")
        return;
    }
    Alert.alert("sukses", `Data terkirim\n\nNama: ${nama}\nusername: ${username}\npassword: ${password}`)
    setUsername("")
    setPassword("")
    setNama("")
  };
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Ini Halaman Form</Text>
        <View style={styles.inputGroup}>
            <Text style={styles.label}>Nama</Text>
            <TextInput 
            style={styles.textInput} 
            placeholder='masukkan nama'
            value={nama}
            onChangeText={(text)=>setNama(text)}
            secureTextEntry={true}
            autoCapitalize='none'
            />
        </View>
        <View style={styles.inputGroup}>
            <Text style={styles.label}>Username</Text>
            <TextInput 
            style={styles.textInput} 
            placeholder='masukkan username'
            value={username}
            onChangeText={(text)=>setUsername(text)}
            secureTextEntry={true}
            autoCapitalize='none'
            />
        </View>
        <View style={styles.inputGroup}>
            <Text style={styles.label}>Masukkan Password</Text>
            <TextInput 
            style={styles.textInput} 
            placeholder='Masukkan Password'
            value={password}
            onChangeText={(text)=>setPassword(text)}
            secureTextEntry={true}
            autoCapitalize='none'
            />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Kirim</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f7fa",
        gap: 16,
        padding: 24,
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        color: "#1a1a1a",
        marginBottom: 8,
    },
    inputGroup:{
      alignItems: "center",  
      width: '100%',
    },
    label:{
        fontSize: 16,
        color: "#666",
        alignSelf: "flex-start",
        marginLeft: 24,
        marginBottom: 4,
    },
    textInput:{
        borderWidth: 1,
        borderColor: "#d1d5db",
        backgroundColor: "#ffffff",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        width: 280,
        fontSize: 16,
        color: "#1f2937",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,

    },
    button:{
        backgroundColor: "#007aff",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 12,
        width: 280,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#007aff",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 4,
        marginTop: 8,
    },
    buttonText:{
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    }
})

export default abra