import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { CarItem } from "@screens/CatalogScreen";

import {
  BackgroundCar,
  BranchIcon,
  DescriptionContainer,
  ModelText,
  PriceText,
  SelectedCarContainer,
  TopDetailsContainer,
  NumberAnColorContainer,
  NumberText,
  ColorText,
  BookButton,
  TextBookButton,
  BackButton,
  TextBackButton,
  ButtonsContainer,
  CarouselContaienr,
  ArrowContainer,
  ArrowButtonsContainer,
} from "./styles";

import {
  LinearGradientComponent,
  Header,
  SecondaryItem,
  PrimaryItem,
} from "@components/index";

type Props = {
  route: {
    params: {
      data: CarItem;
    };
  };
};

const DetailsScreen = ({ route }: Props) => {
  let { brand, model, price, colors, brandIcon } = route.params.data;
  const [selectedCar, setSelectedCar] = useState({ ...colors[0] });
  const navigation = useNavigation();

  const getPreviousImage = () => {
    let id = parseInt(selectedCar.id);

    if (colors[id - 2]) {
      return colors[id - 2].secondaryImage;
    }
    return colors[colors.length - 1].secondaryImage;
  };

  const getNextImage = () => {
    let id = parseInt(selectedCar.id);

    if (colors[id]) {
      return colors[id].secondaryImage;
    }
    return colors[0].secondaryImage;
  };

  const previousHandler = () => {
    let id = parseInt(selectedCar.id);
    if (colors[id - 2]) return setSelectedCar({ ...colors[id - 2] });

    return setSelectedCar({ ...colors[colors.length - 1] });
  };

  const nextHandler = () => {
    let id = parseInt(selectedCar.id);
    if (colors[id]) return setSelectedCar({ ...colors[id] });

    return setSelectedCar({ ...colors[0] });
  };

  return (
    <LinearGradientComponent>
      <Header />
      <SelectedCarContainer>
        <TopDetailsContainer>
          <BranchIcon source={{ uri: brandIcon }} resizeMode="contain" />
          <DescriptionContainer>
            <ModelText>
              {brand} {model}
            </ModelText>
            <PriceText>{"$" + price}/day</PriceText>
          </DescriptionContainer>
        </TopDetailsContainer>
        <BackgroundCar
          source={{ uri: selectedCar.selectedImage }}
          resizeMode="contain"
        >
          <NumberAnColorContainer>
            <NumberText>{selectedCar.id}</NumberText>
            <ColorText>{selectedCar.color}</ColorText>
          </NumberAnColorContainer>
        </BackgroundCar>
        <ButtonsContainer>
          <BackButton activeOpacity={0.7} onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left"
              size={20}
              color="#313136"
              style={{ marginRight: 8, marginTop: 2 }}
            />
            <TextBackButton>Back to catalog</TextBackButton>
          </BackButton>
          <BookButton activeOpacity={0.7}>
            <TextBookButton>Book now</TextBookButton>
            <Feather
              name="arrow-right"
              size={20}
              color="white"
              style={{ marginLeft: 8, marginTop: 2, opacity: 0.7 }}
            />
          </BookButton>
        </ButtonsContainer>
      </SelectedCarContainer>
      <CarouselContaienr>
        <SecondaryItem src={getPreviousImage()} changeCar={previousHandler} />
        <PrimaryItem src={selectedCar.primaryImage} />
        <SecondaryItem src={getNextImage()} changeCar={nextHandler} />
      </CarouselContaienr>
      <ArrowButtonsContainer>
        <ArrowContainer activeOpacity={0.7} onPress={previousHandler}>
          <Feather name="arrow-left" size={20} color={"white"} />
        </ArrowContainer>
        <ArrowContainer activeOpacity={0.7} onPress={nextHandler}>
          <Feather name="arrow-right" size={20} color={"white"} />
        </ArrowContainer>
      </ArrowButtonsContainer>
    </LinearGradientComponent>
  );
};

export default DetailsScreen;
