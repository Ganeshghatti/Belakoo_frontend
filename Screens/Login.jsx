import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import Toast from 'react-native-toast-message';
import authService from '../services/authService';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation(); // Initialize useNavigation

  const validateInputs = () => {
    if (!email.trim()) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please enter your email",
      });
      return false;
    }
    if (!password.trim()) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please enter your password",
      });
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please enter a valid email address",
      });
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateInputs()) return;

    setIsLoading(true);
    try {
      await authService.login(email, password);
      navigation.navigate("Campus");
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        Toast.show({
          type: "error",
          text1: "Login Error",
          text2: error.response.data.msg || "An error occurred during login.",
        });
      } else if (error.request) {
        // The request was made but no response was received
        Toast.show({
          type: "error",
          text1: "Network Error",
          text2: "Unable to connect to the server. Please try again.",
        });
      } else {
        // Something happened in setting up the request that triggered an Error
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "An unexpected error occurred.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../assets/Login/bg.png")}
        style={styles.background}
      />
      <View style={styles.content}>
        {/* Logo */}
        <Image source={require("../assets/logo.png")} style={styles.logo} />

        {/* Main Login Form Container */}
        <View style={styles.loginContainer}>
          <Text style={styles.welcomeText}>Welcome to Belakoo</Text>
          <Text style={styles.instructionsText}>
            Please login with your registered Email-ID & Password to continue
          </Text>

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your Email ID"
            placeholderTextColor="#CCCCCC"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#CCCCCC"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />

          {/* Forgot Password Link */}
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.loginButtonText}>Log in</Text>
            )}
          </TouchableOpacity>
        </View>
        <Toast />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FDDEBC",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    zIndex: 1,
    alignItems: "center",
  },
  logo: {
    width: 225,
    height: 120,
    resizeMode: "contain",
    marginBottom: 80,
    marginTop: 50,
  },
  loginContainer: {
    width: "90%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10,
    color: "#4E4949",
  },
  instructionsText: {
    marginBottom: 20,
    fontSize: 16,
    color: "#4E4949",
    fontWeight: "400",
    alignSelf: "stretch",
    fontStyle: "normal",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  forgotPasswordText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#4E4949",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#F56E00",
    paddingVertical: 15,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
});

export default Login;
