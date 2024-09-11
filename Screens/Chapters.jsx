import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomHeader from "../Components/CustomHeader";
import TitleContainer from "../Components/TitleContainer";
import DoneIcon from "../assets/icons/Done";
import NotDoneIcon from "../assets/icons/NotDone";

const Chapters = () => {
  const route = useRoute();
  const { chapterName } = route.params;
  const navigation = useNavigation();

  // Full fake data for 9 chapters with levels
  const [chapters, setChapters] = useState([
    {
      id: "1",
      title: "Ch 1",
      levels: [
        { id: 1, completed: false },
        { id: 2, completed: true },
        { id: 3, completed: false },
      ],
    },
    {
      id: "2",
      title: "Ch 2",
      levels: [
        { id: 1, completed: false },
        { id: 2, completed: false },
        { id: 3, completed: true },
      ],
    },
    {
      id: "3",
      title: "Ch 3",
      levels: [
        { id: 1, completed: true },
        { id: 2, completed: false },
        { id: 3, completed: false },
      ],
    },
    {
      id: "4",
      title: "Ch 4",
      levels: [
        { id: 1, completed: false },
        { id: 2, completed: false },
        { id: 3, completed: false },
      ],
    },
    {
      id: "5",
      title: "Ch 5",
      levels: [
        { id: 1, completed: true },
        { id: 2, completed: true },
        { id: 3, completed: false },
      ],
    },
    {
      id: "6",
      title: "Ch 6",
      levels: [
        { id: 1, completed: false },
        { id: 2, completed: true },
        { id: 3, completed: true },
      ],
    },
    {
      id: "7",
      title: "Ch 7",
      levels: [
        { id: 1, completed: false },
        { id: 2, completed: false },
        { id: 3, completed: false },
      ],
    },
    {
      id: "8",
      title: "Ch 8",
      levels: [
        { id: 1, completed: true },
        { id: 2, completed: false },
        { id: 3, completed: true },
      ],
    },
    {
      id: "9",
      title: "Ch 9",
      levels: [
        { id: 1, completed: true },
        { id: 2, completed: true },
        { id: 3, completed: true },
      ],
    },
  ]);

  const selectLevel = (chapter, level) => {
    navigation.navigate("Content", {
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      level,
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Chapters/bg.png")}
        style={styles.backgroundImage}
      />
      <CustomHeader />
      <TitleContainer
        title={chapterName}
        subtitle="Select chapters and levels"
      />

      <View style={styles.chapterContainer}>
        {chapters.map((chapter) => (
          <View key={chapter.id} style={styles.chapterCard}>
            <Text style={styles.chapterTitle}>{chapter.title}</Text>
            <View style={styles.levelContainer}>
              {chapter.levels.map((level) => (
                <TouchableOpacity
                  key={level.id}
                  style={styles.levelButton}
                  onPress={() => selectLevel(chapter, level.id)}
                >
                  <View style={styles.levelContent}>
                    {level.completed ? <DoneIcon /> : <NotDoneIcon />}
                    <Text style={styles.levelText}>Level {level.id}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </View>
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
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#740000",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "#740000",
  },
  levelText: {
    color: "#740000",
    fontWeight: "400",
    fontSize: 14,
    marginLeft:2
  },
});

export default Chapters;
