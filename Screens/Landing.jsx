import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import DescriptionComponent from "../Components/TextComponents/DescriptionComponent";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient from expo-linear-gradient
import TitleComponent from "../Components/TextComponents/TitleComponent";
import CustomSafeAreaView from '../Components/CustomSafeAreaView';
import { Link, useRouter } from 'expo-router';

const Landing = () => {
  const router = useRouter();

  return (
    <CustomSafeAreaView>
      <ImageBackground
        source={require("../assets/Landing/bg.png")}
        style={styles.background}
      />
      <View style={styles.content}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <View style={styles.mainContainer}>
          <Image
            source={require("../assets/Landing/illustration.png")}
            style={styles.illustration}
          />
          <View style={styles.subContainer}>
            <View style={styles.cardsContainer}>
              <View style={styles.card}>
                <TitleComponent titleText="What" />
                <DescriptionComponent descriptionText="Lorem ipsum dolor sit amet. Et inventore illum quo veniam illum quo fugiat nostrum eos nemo veritatis pariatur" />
                <TouchableOpacity>
                  <Text style={styles.cardLink}>Know More</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.card}>
                <TitleComponent titleText="What" />
                <DescriptionComponent descriptionText="Another description goes here for the second card." />
                <TouchableOpacity>
                  <Text style={styles.cardLink}>Know More</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.loginText}>
              Login to get the best of our services
            </Text>

            <Link href="/login" asChild>
              <TouchableOpacity>
                <Text>Go to Login</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </CustomSafeAreaView>
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
  },
  logo: {
    width: 165,
    height: 60,
    resizeMode: "contain",
    marginTop: 50,
    marginLeft: 10,
  },
  mainContainer: {
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
  illustration: {
    resizeMode: "contain",
    marginLeft: "10%",
    width: "90%",
    height: "45%",
    marginBottom: 0,
  },
  subContainer: {
    width: "100%",
    bottom: 0,
    zIndex: 1,
    backgroundColor: "white",
    paddingVertical: 28,
    paddingHorizontal: 14,
    flexDirection: "column",
    gap: 15,
    borderRadius: 15,
  },
  cardsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  card: {
    width: "45%",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  cardLink: {
    fontSize: 14,
    color: "#FF6600",
    fontWeight: "700",
  },
  loginButton: {
    backgroundColor: "#F56E00",
    padding: 15,
    borderRadius: 25,
    width: "60%",
    alignItems: "center",
    marginHorizontal: "auto",
  },
  loginText: {
    color: "#740000",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
  },
});

export default Landing;
