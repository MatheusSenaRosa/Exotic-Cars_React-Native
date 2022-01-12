import React from "react";
import { TouchableOpacity } from "react-native";

import { Container } from "./styles";

type Props = {
  src: string;
  changeCar: () => void;
};

const SecondaryItem = ({ src, changeCar }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={changeCar}>
      <Container source={{ uri: src }} resizeMode="center" />
    </TouchableOpacity>
  );
};

export default SecondaryItem;
