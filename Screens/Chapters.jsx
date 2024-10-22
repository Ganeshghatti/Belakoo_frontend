import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Link, useRouter, useLocalSearchParams } from "expo-router";
import CustomHeader from "../Components/CustomHeader";
import TitleContainer from "../Components/TitleContainer";
import DoneIcon from "../assets/icons/Done";
import NotDoneIcon from "../assets/icons/NotDone";
import api from "../services/api";
import Toast from "react-native-toast-message";
import CustomSafeAreaView from "../Components/CustomSafeAreaView";

const Chapters = () => {
  const { proficiencyId, proficiencyName } = useLocalSearchParams();
  const router = useRouter();
  const [chapters, setChapters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGradeDetails();
  }, []);

  const fetchGradeDetails = async () => {
    try {
      const response = await api.get(
        `https://belakoo-backend.onrender.com/api/proficiencies/${proficiencyId}/lessons/`
      );
      console.log(response.data);
      setChapters(response.data.lessons);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching grade details:", error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Failed to load chapters. Please try again.",
      });
      setIsLoading(false);
    }
  };

  return (
    <CustomSafeAreaView>
      <ImageBackground
        source={require("../assets/Content/bg2.png")}
        style={styles.background}
      />
      <View style={styles.content}>
        <View className="flex items-center justify-center bg-[#F56E00] py-5 mt-0">
          <Text className="text-2xl font-bold text-white">Select Chapters</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#740000"
            style={styles.loader}
          />
        ) : (
          <View className="flex items-center justify-center m-5">
            {chapters.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  router.push({
                    pathname: "/lesson",
                    params: {
                      lessonCode: item.lesson_code,
                      lessonName: item.name,
                    },
                  })
                }
              >
                <View className="bg-white p-10 m-5 inline" key={index}>
                  <Text>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
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
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chapterContainer: {
    marginTop: 25,
    width: "90%",
    height: "auto",
    margin: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 25,
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  chapterCard: {
    display: "flex",
    width: "30%",
    alignItems: "center",
  },
  chapterTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
    color: "#740000",
  },
  lessonContainer: {
    display: "flex",
  },
  lessonButton: {
    display: "flex",
  },
  lessonContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 1,
  },
  lessonText: {
    color: "#740000",
    fontWeight: "400",
    fontSize: 12,
    marginLeft: 2,
  },
});

export default Chapters;
