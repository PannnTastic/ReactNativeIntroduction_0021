import { Link } from 'expo-router'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const form = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ini halaman form loh yaaaa</Text>
      <TextInput
      placeholder='masukkan nama anda' 
      placeholderTextColor="#999"
      style={styles.textinput}
      ></TextInput>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>kirim</Text>
      </TouchableOpacity>
      <Link href="../" style={styles.link}>kembali ke halaman index</Link>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f7fa",
    gap: 16,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  link: {
    color: "#007aff",
    fontSize: 16,
    textDecorationLine: "underline",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: "#666",
    alignSelf: "center",
  },
  textinput: {
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
  button: {
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
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default form