import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { WebView } from "react-native-webview";
import CustomHeader from "../Components/CustomHeader";
import { useRoute } from "@react-navigation/native";

const Content = () => {
  const route = useRoute();
  const { chapterId, chapterTitle, level } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Content/bg.png")}
        style={styles.backgroundImage}
      />
      <CustomHeader />
      <View style={styles.contentContainer}>
        <WebView
          source={{ uri: level.pdflink }}
          style={styles.webview}
          scalesPageToFit={true} // Ensures the PDF scales to fit the WebView
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
