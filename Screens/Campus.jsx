import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CampusIconSvg from "../assets/icons/CampusIconSvg";
import TitleComponent from "../Components/TextComponents/TitleComponent";
import DescriptionComponent from "../Components/TextComponents/DescriptionComponent";
import HeadingComponent from "../Components/TextComponents/HeadingComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../Components/CustomHeader";
import api from '../services/api';
import Toast from 'react-native-toast-message';

const Campus = () => {
  const navigation = useNavigation();
  const [campuses, setCampuses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCampuses();
  }, []);

  const fetchCampuses = async () => {
    try {
      const response = await api.get('/api/campuses/');
      setCampuses(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching campuses:', error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to load campuses. Please try again.',
      });
      setIsLoading(false);
    }
  };

  const handleNavigate = (campusId) => {
    navigation.navigate("Subjects", { campusId });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../assets/Campus/bg.png")}
        style={styles.background}
      />
      <View style={styles.content}>
        <CustomHeader />
        <View style={styles.wrapper}>
          <View style={styles.campusContainer}>
            <HeadingComponent headingText="Choose your campus" />
            {isLoading ? (
              <ActivityIndicator size="large" color="#740000" />
            ) : (
              <View style={styles.cardContainer}>
                {campuses.map((campus) => (
                  <TouchableOpacity
                    key={campus.id}
                    style={styles.campusCard}
                    onPress={() => handleNavigate(campus.id)}
                  >
                    <TitleComponent titleText={campus.name} />
                    <CampusIconSvg />
                    <DescriptionComponent
                      descriptionText={campus.description}
                      style={{ textAlign: "center" }}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
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
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 60, // Adjust this value to account for the status bar and header
  },
  campusContainer: {
    width: "90%",
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
