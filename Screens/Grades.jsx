import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import CustomSafeAreaView from "../Components/CustomSafeAreaView";
import CustomHeader from "../Components/CustomHeader";
import TitleContainer from "../Components/TitleContainer";
import api from "../services/api";
import Toast from "react-native-toast-message";

const Grades = () => {
  const { subjectId, subjectName } = useLocalSearchParams();

  const router = useRouter();
  const [grades, setGrades] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGrades();
  }, []);

  const fetchGrades = async () => {
    try {
      const response = await api.get(`/api/subjects/${subjectId}/`);
      setGrades(response.data.grades);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching grades:", error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Failed to load grades. Please try again.",
      });
      setIsLoading(false);
    }
  };

  return (
    <CustomSafeAreaView>
      <ImageBackground
        source={require("../assets/Grades/bg.png")}
        style={styles.background}
      >
        <View style={styles.content}>
          <View className="flex items-center justify-center bg-[#F56E00] py-5 mt-0">
            <Text className="text-2xl font-bold text-white">
              {subjectName.toUpperCase()}
            </Text>
          </View>
          {isLoading ? (
            <ActivityIndicator
              size="large"
              color="#740000"
              style={styles.loader}
            />
          ) : (
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              {grades.map((grade) => (
                <TouchableOpacity
                  key={grade.id}
                  style={styles.gradeCard}
                  onPress={() =>
                    router.push({
                      pathname: "/chapters",
                      params: { gradeId: grade.id, gradeName: grade.name },
                    })
                  }
                >
                  <Text style={styles.gradeName}>{grade.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>
      </ImageBackground>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  content: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContent: {
    alignItems: "center",
    paddingVertical: 20,
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  gradeCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    width: "35%",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#979292",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  gradeName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Grades;
