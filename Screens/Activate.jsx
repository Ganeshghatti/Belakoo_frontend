import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import CustomSafeAreaView from "../Components/CustomSafeAreaView";
import { ImageBackground } from "react-native";

const Activate = () => {
  const router = useRouter();

  const handleRedirect = async () => {
    router.replace("/aquire");
  };

  return (
    <CustomSafeAreaView>
      <View style={styles.content} className="">
        <ImageBackground
          source={require("../assets/Content/bg2.png")}
          style={styles.background}
        >
          <View className="flex items-center justify-center  bg-[#F56E00] py-5 mt-0">
            <Text className="text-2xl font-bold text-white">Activate</Text>
          </View>

          <ScrollView className="space-y-3 ">
            <View className="space-y-4 mx-4 mt-4">
              <Text className="text-[#F56E00] font-bold text-xl">1. Hook</Text>
              <Text className="text-black font-medium text-lg">
                Begin the lesson by asking students to share examples of when
                they put things together in their daily lives, such as putting
                two puzzle pieces together or combining ingredients to make a
                recipe. Emphasize the idea that addition is like putting things
                together.
              </Text>
            </View>
            <View className="space-y-4 mx-4">
              <Text className="text-[#F56E00] font-bold text-xl">
                2. Assess
              </Text>
              <Text className="text-black font-medium text-lg">
                Ask a few students to explain how they put things together in
                their examples. This will help assess their understanding of the
                concept of addition as putting together
              </Text>
            </View>
            <View className="space-y-4 mx-4">
              <Text className="text-[#F56E00] font-bold text-xl">
                3. Inform
              </Text>
              <Text className="text-black font-medium text-lg">
                Tell students that they will be able to understand the concept
                of putting together numbers
              </Text>
            </View>
          </ScrollView>
          <View>
            <TouchableOpacity
              onPress={handleRedirect}
              className="bg-[#F56E00] py-4 mt-20 mx-3  flex border-[#F56E00] items-center justify-center border rounded-3xl"
            >
              <Text className="text-white font-bold text-xl">Mark as Done</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </CustomSafeAreaView>
  );
};

export default Activate;

const styles = StyleSheet.create({});
