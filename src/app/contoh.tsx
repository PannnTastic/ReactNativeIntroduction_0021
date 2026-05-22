import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const contoh = () => {
  return (
    <View style={styles.container}>
        <Text>contoh loh yaaa bla bla bla</Text>
        <Link href="../">kembali ke halaman index</Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        gap:12,
        backgroundColor:'#f5f7fa',
    }
})

export default contoh