import React, { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber/native";
import { OrbitControls } from "@react-three/drei";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { TextureLoader } from "three";

const CubeComponent = () => {
  const navigation = useNavigation();
  const mesh = useRef(null);

  // Load textures for cube faces
  const texture_1 = useLoader(TextureLoader, require("./face1.png"));
  const texture_2 = useLoader(TextureLoader, require("./face2.png"));
  const texture_3 = useLoader(TextureLoader, require("./face3.png"));
  const texture_4 = useLoader(TextureLoader, require("./face4.png"));
  const texture_5 = useLoader(TextureLoader, require("./face5.png"));
  const texture_6 = useLoader(TextureLoader, require("./face6.png"));

  // Handle face click by detecting which face was clicked
  const handleFaceClick = (event) => {
    const intersection = event.intersections[0];
    const faceIndex = intersection.face.materialIndex; // Get material index (face clicked)

    switch (faceIndex) {
      case 0:
        navigation.navigate("Chapters", { chapterName: "Math" });
        break;
      case 1:
        navigation.navigate("Chapters", { chapterName: "Science" });
        break;
      case 2:
        navigation.navigate("Chapters", { chapterName: "English" });
        break;
      case 3:
        navigation.navigate("Chapters", { chapterName: "History" });
        break;
      case 4:
        navigation.navigate("Chapters", { chapterName: "Geography" });
        break;
      case 5:
        navigation.navigate("Chapters", { chapterName: "Art" });
        break;
      default:
        break;
    }
  };

  return (
    <mesh ref={mesh} onClick={handleFaceClick}>
      <boxGeometry args={[2.75, 2.75, 2.75]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </mesh>
  );
};

const Cube = () => {
  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        <ambientLight />
        <directionalLight position={[2, 1, 1]} />
        {/* Updated OrbitControls to disable movement */}
        <OrbitControls
          enableZoom={false} // Disable zoom
          enablePan={false} // Disable panning
          enableDamping={false} // Disable damping for smoother control
          rotateSpeed={1.0} // You can adjust the rotation speed if needed
        />
        <CubeComponent />
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  canvas: {
    flex: 1,
  },
});

export default Cube;
