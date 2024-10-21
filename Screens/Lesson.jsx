import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { Text } from "react-native";

import CustomSafeAreaView from "../Components/CustomSafeAreaView";

import { useRouter } from "expo-router";

import { ScrollView } from "react-native";

const Lesson = () => {
  const router = useRouter();

  const handleRedirect = async () => {
    router.replace("/principle");
  };

  return (
    <CustomSafeAreaView>
      <View style={styles.content} className="">
        <View className="flex items-center justify-center  bg-[#F56E00] py-5 mt-0">
          <Text className="text-2xl font-bold text-white">
            Belakube Lesson Plan
          </Text>
        </View>

        <View className="h-screen pt-4 pb-20 px-4 ">
          <View className="gap-4">
            <Text className="text-xl font-bold">
              Lesson Code : <Text className="text-[#F56E00]">M.K1.C1.P1</Text>
            </Text>
            <Text className="text-xl font-bold pb-4">
              Subject : <Text className="text-[#F56E00]">Mathematics</Text>
            </Text>
          </View>
          <ScrollView
            className=" space-y-3 h-full "
            showsVerticalScrollIndicator={false}
          >
            <View className="bg-[#FFE4CF] p-5 border border-[#FFE4CF] rounded-3xl space-y-2">
              <Text className="text-xl font-bold text-[#F56E00]">
                Objective
              </Text>
              <Text className="text-lg font-medium">
                Students will understand addition as putting together.
              </Text>
            </View>
            <View className="bg-[#FFE4CF] p-5 border border-[#FFE4CF] rounded-3xl space-y-2">
              <Text className="text-xl font-bold text-[#F56E00]">Duration</Text>
              <Text className="text-lg font-medium">3 hours</Text>
            </View>
            <View className="bg-[#FFE4CF] p-5 border border-[#FFE4CF] rounded-3xl space-y-2">
              <Text className="text-xl font-bold text-[#F56E00]">
                Specific Learning Outcome
              </Text>
              <Text className="text-lg font-medium">
                Students will be able to add two numbers together using the
                concept of putting together.
              </Text>
            </View>
            <View className="bg-[#FFE4CF] p-5 border border-[#FFE4CF] rounded-3xl space-y-2">
              <Text className="text-xl font-bold text-[#F56E00]">
                Behavioural Outcome
              </Text>
              <Text className="text-lg font-medium">
                Students will actively participate in adding numbers together
                and demonstrate understanding  through verbal explanations and
                written work.
              </Text>
            </View>
            <View className="bg-[#FFE4CF] p-5 border border-[#FFE4CF] rounded-3xl space-y-2">
              <Text className="text-xl font-bold text-[#F56E00]">
                Materials Required
              </Text>
              <Text className="text-lg font-medium">
                Students will actively participate in adding numbers together
                and demonstrate understanding through verbal explanations and
                written work.
              </Text>
            </View>
            <TouchableOpacity
              onPress={handleRedirect}
              className="bg-[#F56E00] py-2 mx-10 flex border-[#F56E00] items-center justify-center border rounded-3xl"
            >
              <Text className="text-white font-bold text-xl">Next</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
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
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    zIndex: 1,
  },
});

export default Lesson;
