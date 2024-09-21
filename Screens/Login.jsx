import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Link, useRouter } from "expo-router";
import CustomSafeAreaView from "../Components/CustomSafeAreaView";
import Toast from "react-native-toast-message";
import authService from "../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
      router.replace("/campus");
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
    <CustomSafeAreaView>
      <ImageBackground
        source={require("../assets/Login/bg.png")}
        style={styles.background}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.content}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.logo}
              />
              <View style={styles.loginContainer}>
                <Text style={styles.welcomeText}>Welcome to Belakoo</Text>
                <Text style={styles.instructionsText}>
                  Please login with your registered Email-ID & Password to
                  continue
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your Email ID"
                  placeholderTextColor="#CCCCCC"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  placeholderTextColor="#CCCCCC"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry
                />
                <TouchableOpacity>
                  <Text style={styles.forgotPasswordText}>
                    Forgot your password?
                  </Text>
                </TouchableOpacity>
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
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  safeArea: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 225,
    height: 120,
    resizeMode: "contain",
    position: "absolute",
    top: 25,
    margin: "auto",
  },
  loginContainer: {
    width: "100%",
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
    fontWeight: "700",
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
    textDecorationLine: "underline"
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
