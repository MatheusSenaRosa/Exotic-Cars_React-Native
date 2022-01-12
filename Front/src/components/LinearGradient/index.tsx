import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const LinearGradientComponent: React.FC = ({ children }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#FFFFFF", "#D8D7D7"]}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

export default LinearGradientComponent;
