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
import { Link, useRouter, useLocalSearchParams } from 'expo-router';
import CustomHeader from "../Components/CustomHeader";
import TitleContainer from "../Components/TitleContainer";
import DoneIcon from "../assets/icons/Done";
import NotDoneIcon from "../assets/icons/NotDone";
import api from "../services/api";
import Toast from "react-native-toast-message";
import CustomSafeAreaView from '../Components/CustomSafeAreaView';

const Chapters = () => {
  const { gradeId, gradeName } = useLocalSearchParams();
  const router = useRouter();
  const [chapters, setChapters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGradeDetails();
  }, []);

  const fetchGradeDetails = async () => {
    try {
      const response = await api.get(`/api/grades/${gradeId}/`);
      console.log("chapters",response.data.chapters,response.data.chapters[0].lessons)
      setChapters(response.data.chapters);
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
        source={require("../assets/Chapters/bg.png")}
        style={styles.background}
      />
      <View style={styles.content}>
        <CustomHeader />
        <TitleContainer
          title="Select Chapters"
          subtitle="Select chapters and lessons"
        />
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#740000"
            style={styles.loader}
          />
        ) : (
          <ScrollView contentContainerStyle={styles.chapterContainer}>
            {chapters.map((chapter) => (
              <View key={chapter.id} style={styles.chapterCard}>
                <Text style={styles.chapterTitle}>{chapter.name}</Text>
                <View style={styles.lessonContainer}>
                  {chapter.lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      href={{
                        pathname: "/content",
                        params: {
                          lessonId: lesson.id,
                          lessonCode: lesson.lesson_code
                        }
                      }}
                      asChild
                    >
                      <TouchableOpacity style={styles.lessonButton}>
                        <View style={styles.lessonContent}>
                          {lesson.is_done ? <DoneIcon /> : <NotDoneIcon />}
                          <Text style={styles.lessonText}>{lesson.name}</Text>
                        </View>
                      </TouchableOpacity>
                    </Link>
                  ))}
                </View>
              </View>
            ))}
          </ScrollView>
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
