import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import CustomSafeAreaView from "../Components/CustomSafeAreaView";
import { useRouter } from "expo-router";

import { useLocalSearchParams } from "expo-router";

const Principle = () => {
  const router = useRouter();

  const { lessonCode, lessonName } = useLocalSearchParams();

  return (
    <CustomSafeAreaView>
      <View style={styles.content} className="">
        <View className="flex items-center justify-center  bg-[#F56E00] py-5 mt-0">
          <Text className="text-2xl font-bold text-white">
            Guiding Principles
          </Text>
        </View>
        <View className="flex items-center  justify-center">
          <Text className="text-2xl font-bold text-center py-4">4 A's</Text>
          <View className="flex flex-wrap flex-row mt-20 items-center justify-center ">
            <View className="bg-[#ACACAC] w-36 h-36 flex items-center justify-center rounded-2xl  m-5">
              <Text className="text-white font-bold text-2xl">ACTIVATE</Text>
            </View>
            <View className="bg-[#ACACAC] w-36 h-36 flex items-center justify-center rounded-2xl  m-5">
              <Text className="text-white font-bold text-2xl">ACQUIRE</Text>
            </View>
            <View className="bg-[#ACACAC] w-36 h-36 flex items-center justify-center rounded-2xl  m-5">
              <Text className="text-white font-bold text-2xl">APPLY</Text>
            </View>
            <View className="bg-[#ACACAC] w-36 h-36 flex items-center justify-center rounded-2xl  m-5">
              <Text className="text-white font-bold text-2xl">ASSESS</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/activate",
              params: {
                lessonCode: lessonCode,
                lessonName: lessonName,
              },
            })
          }
          className="bg-[#ACACAC] py-4 mt-36 mx-10 flex border-gray-400 items-center justify-center border rounded-3xl"
        >
          <Text className="text-white font-bold text-xl">Next</Text>
        </TouchableOpacity>
      </View>
    </CustomSafeAreaView>
  );
};

export default Principle;

const styles = StyleSheet.create({});
