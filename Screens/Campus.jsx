import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CampusIconSvg from "../assets/icons/CampusIconSvg";
import TitleComponent from "../Components/TextComponents/TitleComponent";
import DescriptionComponent from "../Components/TextComponents/DescriptionComponent";
import HeadingComponent from "../Components/TextComponents/HeadingComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../Components/CustomHeader";

const Campus = () => {
  const navigation = useNavigation();

  const handleNavigate = (campusName) => {
    navigation.navigate("Subjects", { campusName });
  };

  return (
    <ImageBackground
      source={require("../assets/Campus/bg.png")}
      style={styles.background}
    >
      <CustomHeader />
      <View style={styles.wrapper}>
        <View style={styles.campusContainer}>
          <HeadingComponent headingText="Choose your campus" />
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.campusCard}
              onPress={() => handleNavigate("Campus1")}
            >
              <TitleComponent titleText="Campus 1" />
              <CampusIconSvg />
              <DescriptionComponent
                descriptionText="Lorem ipsum dolor sit amet. Et inventore illum quo veniam illum quo fugiat nostrum eos nemo veritatis pariatur"
                style={{ textAlign: "center" }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.campusCard}
              onPress={() => handleNavigate("Campus2")}
            >
              <TitleComponent titleText="Campus 2" />
              <CampusIconSvg />
              <DescriptionComponent
                descriptionText="Lorem ipsum dolor sit amet. Et inventore illum quo veniam illum quo fugiat nostrum eos nemo veritatis pariatur"
                style={{ textAlign: "center" }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
  },
  campusContainer: {
    width: "100%",
    backgroundColor: "white",
    paddingVertical: 44,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 9, height: 9 },
    shadowOpacity: 0.15,
    shadowRadius: 9.6,
    elevation: 5,
  },
  cardContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-around",
    width: "100%",
  },
  campusCard: {
    width: "45%",
    paddingVertical: 16,
    paddingHorizontal: 12,
    gap: 8,
    alignItems: "center",
    borderRadius: 29,
    backgroundColor: "#FFF4E6",
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10.7,
    elevation: 5,
  },
});

export default Campus;
