// CustomHeader.js
import React from "react";
import { useRouter, usePathname } from 'expo-router';
import Breadcrumbs from "./BreadCrumbs";
import { View, Text, StyleSheet, Image } from "react-native";

const CustomHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Define breadcrumb items based on the current route
  const getBreadcrumbItems = () => {
    switch (pathname) {
      case "/campus":
        return [{ key: "campus", label: "Campus", route: "/campus" }];
      case "/subjects":
        return [
          { key: "campus", label: "Campus", route: "/campus" },
          { key: "subjects", label: "Subjects", route: "/subjects" },
        ];
      case "/chapters":
        return [
          { key: "campus", label: "Campus", route: "/campus" },
          { key: "subjects", label: "Subjects", route: "/subjects" },
          { key: "chapters", label: "Chapters", route: "/chapters" },
        ];
      default:
        return [];
    }
  };

  return (
    <View style={styles.header}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Breadcrumbs items={getBreadcrumbItems()} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    display: "flex",
    backgroundColor: "transparent",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  logo: {},
});

export default CustomHeader;
