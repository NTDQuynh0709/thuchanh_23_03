import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
  Platform,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("imshuvo97@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("Login:", email, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require("../images/logo2.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.content}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Enter your emails and password</Text>

          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor="#B1B1B1"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <View style={styles.line} />

            <Text style={[styles.label, styles.passwordLabel]}>Password</Text>

            <View style={styles.passwordRow}>
              <TextInput
                style={styles.passwordInput}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                placeholderTextColor="#B1B1B1"
                secureTextEntry={!showPassword}
              />

              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                activeOpacity={0.8}
                style={styles.eyeButton}
              >
                <Text style={styles.eyeFallback}>
                  {showPassword ? "🙈" : "👁"}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.line} />

            <TouchableOpacity style={styles.forgotWrap} activeOpacity={0.8}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomArea}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            activeOpacity={0.85}
          >
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>

          <View style={styles.signupRow}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity
  activeOpacity={0.8}
  onPress={() => navigation.navigate("SignUp")}
>
  <Text style={styles.signupLink}>Signup</Text>
</TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },

  scrollContent: {
    minHeight: "100%",
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "android" ? 42 : 24,
    paddingBottom: 26,
  },

  logo: {
    width: 52,
    height: 52,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 72,
  },

  content: {
    marginBottom: 80, // giảm để nút login 올라 lên
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#7C7C7C",
    marginBottom: 34,
  },

  label: {
    fontSize: 16,
    color: "#7C7C7C",
    marginBottom: 10,
  },

  passwordLabel: {
    marginTop: 28,
  },

  input: {
    fontSize: 16,
    color: "#181725",
    paddingVertical: 8,
    marginBottom: 4,
  },

  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 4,
  },

  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: "#181725",
    paddingVertical: 8,
  },

  eyeButton: {
    width: 30,
    alignItems: "flex-end",
    justifyContent: "center",
    marginLeft: 8,
  },

  eyeFallback: {
    fontSize: 18,
    color: "#7C7C7C",
  },

  line: {
    height: 1,
    backgroundColor: "#E2E2E2",
  },

  forgotWrap: {
    alignSelf: "flex-end",
    marginTop: 14,
  },

  forgotText: {
    fontSize: 14,
    color: "#181725",
  },

  bottomArea: {
    marginTop: 0,
  },

  loginButton: {
    height: 58,
    borderRadius: 18,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },

  loginText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  signupText: {
    fontSize: 14,
    color: "#181725",
  },

  signupLink: {
    fontSize: 14,
    color: "#53B175",
    fontWeight: "600",
  },
});