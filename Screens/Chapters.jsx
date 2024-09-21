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
import { Link, useRouter, useLocalSearchParams } from 'expo-router';
import CustomHeader from "../Components/CustomHeader";
import TitleContainer from "../Components/TitleContainer";
import DoneIcon from "../assets/icons/Done";
import NotDoneIcon from "../assets/icons/NotDone";
import api from "../services/api";
import Toast from "react-native-toast-message";
import CustomSafeAreaView from '../Components/CustomSafeAreaView';

const Chapters = () => {
  const { subjectId, subjectName } = useLocalSearchParams();
  const router = useRouter();
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

  const navigateToContent = (chapterId, chapterTitle, level) => {
    router.push({
      pathname: "/content",
      params: { chapterId, chapterTitle, level: JSON.stringify(level) }
    });
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
          title={subjectName || "Select Chapters"}
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
                    <Link
                      key={level.id}
                      href={{
                        pathname: "/content",
                        params: {
                          chapterId: chapter.id,
                          chapterTitle: chapter.title,
                          level: JSON.stringify(level)
                        }
                      }}
                      asChild
                    >
                      <TouchableOpacity style={styles.levelButton}>
                        <View style={styles.levelContent}>
                          {level.is_done ? <DoneIcon /> : <NotDoneIcon />}
                          <Text style={styles.levelText}>{level.name}</Text>
                        </View>
                      </TouchableOpacity>
                    </Link>
                  ))}
                </View>
              </View>
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
