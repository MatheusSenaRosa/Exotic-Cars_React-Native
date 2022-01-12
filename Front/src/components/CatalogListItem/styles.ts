import styled from "styled-components/native";
import Fonts from "@fonts/index";

export const Container = styled.View`
  width: 354px;
  height: 240px;
  background-color: #f8f8fa;
  border-radius: 20px;
`;

export const TopData = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const Brand = styled.Text`
  font-family: ${Fonts.Bold};
  font-size: 20px;
`;

export const Model = styled.Text`
  font-family: ${Fonts.Thin};
  font-size: 20px;
`;

export const CarImage = styled.Image`
  width: 295px;
  height: 93px;
  align-self: center;
  margin-top: 20px;
`;

export const PriceArea = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const DollarSign = styled.Text`
  font-family: ${Fonts.Medium};
  font-size: 15px;
`;

export const PriceText = styled.Text`
  margin-left: 2px;
  font-family: ${Fonts.Black};
  font-size: 28px;
`;

export const DayText = styled.Text`
  margin-right: 25px;
  font-family: ${Fonts.Light};
  font-size: 16px;
  margin-top: 12px;
`;
