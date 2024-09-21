import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import Cube from "../assets/3D/cube";
import TitleContainer from "../Components/TitleContainer";
import CustomHeader from "../Components/CustomHeader";
import api from "../services/api";
import Toast from "react-native-toast-message";
import CustomSafeAreaView from "../Components/CustomSafeAreaView";

const Subjects = () => {
  const { campusId } = useLocalSearchParams();
  const [campusData, setCampusData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCampusDetails();
  }, []);

  const fetchCampusDetails = async () => {
    try {
      const response = await api.get(`/api/campuses/${campusId}/`);
      setCampusData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching campus details:", error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Failed to load campus details. Please try again.",
      });
      setIsLoading(false);
    }
  };

  return (
    <CustomSafeAreaView>
      <ImageBackground
        source={require("../assets/Landing/bg.png")}
        style={styles.background}
      >
        <View style={styles.content}>
          <CustomHeader />
          {isLoading ? (
            <ActivityIndicator
              size="large"
              color="#740000"
              style={styles.loader}
            />
          ) : (
            <>
              <TitleContainer
                title="Choose your Subject"
                subtitle="Choose your subject by turning the cube"
              />
              <View style={styles.canvasContainer}>
                {campusData && campusData.subjects && (
                  <Cube subjects={campusData.subjects} />
                )}
              </View>
            </>
          )}
        </View>
      </ImageBackground>
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
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    zIndex: 1,
  },
  canvasContainer: {
    flex: 1,
    position: "absolute",
    top: "25%",
    left: 0,
    width: "100%",
    height: "60%",
    zIndex: 100,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Subjects;
