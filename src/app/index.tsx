import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

export default function Index() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    let valid = true;
    setUsernameError("");
    setPasswordError("");

    if (!username.trim()) {
      setUsernameError("Username / Email tidak boleh kosong");
      valid = false;
    }
    if (password.length < 4) {
      setPasswordError("Password minimal 4 karakter");
      valid = false;
    }
    if (!valid) return;

    router.push({
      pathname: "./dashboard",
      params: { username: username.trim() },
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.inner}>
        {/* Header */}
        <View style={styles.headerSection}>
          <Text style={styles.title}>Selamat Datang</Text>
          <Text style={styles.subtitle}>Silakan masuk ke akun Anda</Text>
        </View>

        {/* Card Form */}
        <View style={styles.card}>
          {/* Username Field */}
          <Text style={styles.label}>Username / Email</Text>
          <TextInput
            style={[
              styles.textInput,
              usernameError ? styles.textInputError : null,
            ]}
            placeholder="Masukkan username atau email"
            placeholderTextColor="#aaa"
            value={username}
            onChangeText={(v) => { setUsername(v); setUsernameError(""); }}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          {usernameError ? (
            <Text style={styles.errorText}>{usernameError}</Text>
          ) : null}

          {/* Password Field */}
          <Text style={[styles.label, { marginTop: 16 }]}>Password</Text>
          <View style={styles.passwordRow}>
            <TextInput
              style={[
                styles.textInput,
                styles.passwordInput,
                passwordError ? styles.textInputError : null,
              ]}
              placeholder="Masukkan password"
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={(v) => { setPassword(v); setPasswordError(""); }}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowPassword((prev) => !prev)}
            >
              <Text style={styles.eyeIcon}>{showPassword ? "🙈" : "👁"}</Text>
            </TouchableOpacity>
          </View>
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginButton}
            activeOpacity={0.8}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  headerSection: {
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a3a8f",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1a6ef5",
    marginBottom: 6,
  },
  textInput: {
    borderBottomWidth: 1.5,
    borderBottomColor: "#1a6ef5",
    paddingVertical: 8,
    fontSize: 16,
    color: "#1a1a1a",
    backgroundColor: "transparent",
  },
  textInputError: {
    borderBottomColor: "#e53935",
  },
  errorText: {
    fontSize: 11,
    color: "#e53935",
    marginTop: 4,
  },
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
  },
  eyeButton: {
    paddingLeft: 10,
    paddingBottom: 4,
  },
  eyeIcon: {
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: "#1a6ef5",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 28,
    shadowColor: "#1a6ef5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 5,
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
