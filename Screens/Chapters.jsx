import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import CustomHeader from "../Components/CustomHeader";
import TitleContainer from "../Components/TitleContainer";
import DoneIcon from "../assets/icons/Done";
import NotDoneIcon from "../assets/icons/NotDone";
import api from "../services/api";
import Toast from "react-native-toast-message";
import { SafeAreaView } from "react-native-safe-area-context";

const Chapters = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { subjectId, subjectName } = route.params;
  const [chapters, setChapters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSubjectDetails();
  }, []);

  const fetchSubjectDetails = async () => {
    try {
      const response = await api.get(`/api/subjects/${subjectId}/`);
      setChapters(response.data.chapters);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching subject details:", error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Failed to load chapters. Please try again.",
      });
      setIsLoading(false);
    }
  };

  const selectLevel = (chapter, level) => {
    navigation.navigate("Content", {
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      level: level,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../assets/Chapters/bg.png")}
        style={styles.background}
      />
      <View style={styles.content}>
        <CustomHeader />
        <TitleContainer
          title={subjectName}
          subtitle="Select chapters and levels"
        />
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#740000"
            style={styles.loader}
          />
        ) : (
          <View style={styles.chapterContainer}>
            {chapters.map((chapter) => (
              <View key={chapter.id} style={styles.chapterCard}>
                <Text style={styles.chapterTitle}>{chapter.name}</Text>
                <View style={styles.levelContainer}>
                  {chapter.levels.map((level) => (
                    <TouchableOpacity
                      key={level.id}
                      style={styles.levelButton}
                      onPress={() => selectLevel(chapter, level)}
                    >
                      <View style={styles.levelContent}>
                        {level.completed ? <DoneIcon /> : <NotDoneIcon />}
                        <Text style={styles.levelText}>{level.name}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}
          </View>
        )}
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
    borderRadius: 5,
  },
  chapterCard: {
    display: "flex",
    width: "30%",
    alignItems: "center",
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
    color: "#740000",
  },
  levelContainer: {
    display: "flex",
  },
  levelButton: {
    display: "flex",
  },
  levelContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 1,
  },
  levelText: {
    color: "#740000",
    fontWeight: "400",
    fontSize: 14,
    marginLeft: 2,
  },
});

export default Chapters;
