import Fonts from "@fonts/index";
import styled from "styled-components/native";

export const SelectedCarContainer = styled.View`
  margin-top: 20px;
  height: 300px;
`;

export const TopDetailsContainer = styled.View`
  flex-direction: row;
`;

export const BranchIcon = styled.Image`
  height: 70px;
  width: 90px;
`;

export const DescriptionContainer = styled.View``;

export const ModelText = styled.Text`
  font-family: ${Fonts.Bold};
  color: #313136;
  font-size: 25px;
`;

export const PriceText = styled.Text`
  font-family: ${Fonts.Light};
  font-size: 25px;
  color: #313136;
`;

export const BackgroundCar = styled.ImageBackground`
  width: 100%;
  height: 210px;
  align-items: flex-end;
`;

export const NumberAnColorContainer = styled.View`
  margin-right: 40px;
  align-items: center;
  margin-top: -10px;
`;

export const NumberText = styled.Text`
  font-family: ${Fonts.Black};
  font-size: 29px;
  color: #313136;
`;

export const ColorText = styled.Text`
  font-family: ${Fonts.Light};
  font-size: 20px;
  color: #313136;
`;

export const BackButton = styled.TouchableOpacity`
  align-self: center;
  background-color: white;
  width: 150px;
  height: 37px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-width: 1px;
  border-color: #313136;
`;

export const BookButton = styled.TouchableOpacity`
  align-self: center;
  background-color: #313136;
  width: 130px;
  height: 37px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TextBookButton = styled.Text`
  color: white;
  font-family: ${Fonts.Regular};
  opacity: 0.7;
`;

export const TextBackButton = styled.Text`
  color: #313136;
  font-family: ${Fonts.Regular};
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const CarouselContaienr = styled.View`
  flex-direction: row;
  height: 150px;
  align-items: flex-end;
  margin-top: 17px;
`;

export const ArrowContainer = styled.TouchableOpacity`
  background-color: #313136;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`;

export const ArrowButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;
