import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import {
  CarImage,
  Container,
  DayText,
  DollarSign,
  PriceArea,
  PriceText,
  Model,
  Brand,
  TopData,
} from "./styles";
import { CarItem } from "@screens/CatalogScreen";

type Props = {
  data: CarItem;
};

const CatalogListItem = ({ data }: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{ marginBottom: 20 }}
      onPress={() =>
        navigation.navigate("Details", {
          data: data,
        })
      }
    >
      <Container>
        <TopData>
          <View>
            <Brand>{data?.brand}</Brand>
            <Model>{data.model.toUpperCase()}</Model>
          </View>
          <SimpleLineIcons name="options" size={24} color="#C8C8CA" />
        </TopData>
        <CarImage
          source={{
            uri: data.icon,
          }}
        />
        <PriceArea>
          <DollarSign>$</DollarSign>
          <PriceText>{data.price}</PriceText>
          <DayText>/day</DayText>
        </PriceArea>
      </Container>
    </TouchableOpacity>
  );
};

export default CatalogListItem;
