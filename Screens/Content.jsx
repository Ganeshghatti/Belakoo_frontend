import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import { WebView } from "react-native-webview";
import CustomHeader from "../Components/CustomHeader";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';

const Content = () => {
  const route = useRoute();
  const { chapterId, chapterTitle, level } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../assets/Content/bg.png")}
        style={styles.background}
      />
      <View style={styles.content}>
        <CustomHeader />
        <View style={styles.contentContainer}>
          <WebView
            source={{ uri: level.pdflink }}
            style={styles.webview}
            scalesPageToFit={true}
          />
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
  contentContainer: {
    flex: 1,
    width: "100%",
    padding: 10,
  },
  webview: {
    flex: 1,
    width: "100%",
  },
});

export default Content;
