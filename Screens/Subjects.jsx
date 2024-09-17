import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import Cube from "../assets/3D/cube";
import TitleContainer from "../Components/TitleContainer";
import CustomHeader from "../Components/CustomHeader";
import api from '../services/api';
import Toast from 'react-native-toast-message';

const Subjects = () => {
  const route = useRoute();
  const { campusId } = route.params;
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
      console.error('Error fetching campus details:', error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to load campus details. Please try again.',
      });
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Landing/bg.png")}
        style={styles.backgroundImage}
      />
      <CustomHeader />
      {isLoading ? (
        <ActivityIndicator size="large" color="#740000" style={styles.loader} />
      ) : (
        <>
          <TitleContainer
            title={campusData ? campusData.name : "Choose your Subject"}
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
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    width: "100%",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    margin: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Subjects;
