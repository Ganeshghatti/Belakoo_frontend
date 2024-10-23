import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import CustomSafeAreaView from "../Components/CustomSafeAreaView";
import { useRouter } from "expo-router";

import { useState } from "react";

import { AntDesign } from "@expo/vector-icons";

import { useLocalSearchParams } from "expo-router";
import axios from "axios";

const Principle = () => {
  const router = useRouter();

  const { lessonCode, lessonName, activate, apply, assess, acquire } =
    useLocalSearchParams();

  const [isActivate] = useState(activate);
  const [isAcquire] = useState(acquire);
  const [isAssess] = useState(assess);
  const [isApply] = useState(apply);

  const handleMarkAsDone = async () => {
    const response = axios.post(
      `https://belakoo-backend.onrender.com/api/lessons/${lessonCode}/mark-done/`
    );
    console.log(response);
    router.push({
      pathname: `/lesson`,
      params: {
        lessonCode: lessonCode,
        lessonName: lessonName,
        activate: true,
      },
    });
  };

  const handleActivate = () => {
    if (isActivate) {
      router.push({
        pathname: `/activate`,
        params: {
          lessonCode: lessonCode,
          lessonName: lessonName,
          activate: true,
        },
      });
    }
  };

  const handleApply = () => {
    if (isApply) {
      router.push({
        pathname: `/apply`,
        params: {
          lessonCode: lessonCode,
          lessonName: lessonName,
          activate: true,
        },
      });
    }
  };

  const handleAcquire = () => {
    if (isAcquire) {
      router.push({
        pathname: `/acquire`,
        params: {
          lessonCode: lessonCode,
          lessonName: lessonName,
          activate: true,
        },
      });
    }
  };

  const handleAssess = () => {
    if (isAssess) {
      router.push({
        pathname: `/assess`,
        params: {
          lessonCode: lessonCode,
          lessonName: lessonName,
          activate: true,
        },
      });
    }
  };

  return (
    <CustomSafeAreaView>
      <View style={styles.content} className="">
        <View className="flex relative items-center justify-center flex-row bg-[#F56E00] py-5 mt-0">
          <TouchableOpacity className="absolute left-0 ml-5">
            <AntDesign
              name="back"
              size={26}
              color="white"
              onPress={() => router.back()}
            />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-white">
            Guiding Principles
          </Text>
        </View>
        <View className="flex items-center  justify-center">
          <Text className="text-2xl font-bold text-center py-4">4 A's</Text>
          <View className="flex flex-wrap flex-row mt-20 items-center justify-center">
            <TouchableOpacity
              className={` w-36 h-36 flex items-center justify-center rounded-2xl  m-5 ${
                activate ? "bg-green-500" : "bg-[#ACACAC]"
              }`}
              onPress={handleActivate}
            >
              <Text className="text-white font-bold text-2xl">ACTIVATE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={` w-36 h-36 flex items-center justify-center rounded-2xl  m-5 ${
                activate ? "bg-green-500" : "bg-[#ACACAC]"
              }`}
              onPress={handleAcquire}
            >
              <Text className="text-white font-bold text-2xl">ACQUIRE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={` w-36 h-36 flex items-center justify-center rounded-2xl  m-5 ${
                apply ? "bg-green-500" : "bg-[#ACACAC]"
              }`}
              onPress={handleApply}
            >
              <Text className="text-white font-bold text-2xl">APPLY</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={` w-36 h-36 flex items-center justify-center rounded-2xl  m-5 ${
                activate ? "bg-green-500" : "bg-[#ACACAC]"
              }`}
              onPress={handleAssess}
            >
              <Text className="text-white font-bold text-2xl">ASSESS</Text>
            </TouchableOpacity>
          </View>
        </View>
        {isAssess ? (
          <TouchableOpacity
            className="bg-[#ACACAC] py-4 mt-36 mx-10 flex border-gray-400 items-center justify-center border rounded-3xl"
            onPress={handleMarkAsDone}
          >
            <Text className="text-white font-bold text-xl">Mark as Done</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/activate",
                params: {
                  lessonCode: lessonCode,
                  lessonName: lessonName,
                  activate: true,
                },
              })
            }
            className="bg-[#ACACAC] py-4 mt-36 mx-10 flex border-gray-400 items-center justify-center border rounded-3xl"
          >
            <Text className="text-white font-bold text-xl">Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </CustomSafeAreaView>
  );
};

export default Principle;

const styles = StyleSheet.create({});
