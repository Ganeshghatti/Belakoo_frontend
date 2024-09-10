// CustomHeader.js
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Breadcrumbs from "./BreadCrumbs";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Define breadcrumb items based on the current route
  const getBreadcrumbItems = () => {
    switch (route.name) {
      case "Campus":
        return [{ key: "campus", label: "Campus", route: "Campus" }];
      case "Subjects":
        return [
          { key: "campus", label: "Campus", route: "Campus" },
          { key: "subjects", label: "Subjects", route: "Subjects" },
        ];
      case "Chapters":
        return [
          { key: "campus", label: "Campus", route: "Campus" },
          { key: "subjects", label: "Subjects", route: "Subjects" },
          { key: "chapters", label: "Chapters", route: "Chapters" },
        ];
      default:
        return [];
    }
  };

  const handleNavigate = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Breadcrumbs items={getBreadcrumbItems()} onNavigate={handleNavigate} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    display: "flex",
    backgroundColor: "transparent",
    paddingHorizontal:10,
    paddingVertical:6
  },
  logo: {

  },
});

export default CustomHeader;
