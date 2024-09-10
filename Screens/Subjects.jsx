import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Cube from "../assets/3D/cube";
import TitleContainer from "../Components/TitleContainer";
import CustomHeader from "../Components/CustomHeader";

const Subjects = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Landing/bg.png")}
        style={styles.backgroundImage}
      />
      <CustomHeader />
      <TitleContainer
        title="Choose your Subject"
        subtitle="Choose your subject by turning the cube"
      />
      <View style={styles.canvasContainer}>
        <Cube />
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
  canvasContainer: {
    flex: 1,
    position: "absolute",
    top: "25%",
    left: 0,
    width: "100%",
    height: "60%",
    zIndex: 100,
  },
});

export default Subjects;
