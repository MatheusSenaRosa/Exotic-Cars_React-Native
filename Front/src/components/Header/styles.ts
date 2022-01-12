import styled from "styled-components/native";
import Fonts from "@fonts/index";

export const Container = styled.View`
  background-color: white;
  padding-top: 35px;
  width: 100%;
  height: 118px;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #0000001a;
`;

export const TopArea = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
`;

export const LogoArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AccountArea = styled.View`
  flex-direction: row;
`;

export const SignButton = styled.Text<{ border: boolean }>`
  ${({ border }) => border && "border-width: 1.5px;"}
  border-color: #7b89f4;
  border-radius: 10px;
  font-size: 15px;
  font-family: ${Fonts.Medium};
  color: #7b89f4;
  padding: 3px 9px;
  margin: 0 3px;
`;

export const ExoticText = styled.Text`
  font-size: 23px;
  font-family: ${Fonts.Medium};
`;

export const CarsText = styled.Text`
  font-family: ${Fonts.Regular};
  font-size: 14px;
  margin-left: 3px;
  margin-top: 7px;
`;

export const BottomArea = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const InputArea = styled.View`
  flex-direction: row;
  background-color: #f3f1fc;
  height: 35px;
  border-radius: 18px;
  align-items: center;
  flex: 1;
`;

export const InputLocal = styled.TextInput`
  margin-left: 4px;
  border-radius: 10px;
  height: 100%;
  width: 126px;
  color: #656469;
  font-family: ${Fonts.Medium};
  padding-right: 10px;
`;

export const TextDate = styled.Text`
  color: #656469;
  font-family: ${Fonts.Medium};
  margin-left: 4px;
`;

export const IconSearch = styled.View`
  background-color: white;
  height: 32px;
  justify-content: center;
  margin-left: auto;
  width: 32px;
  align-items: center;
  border-radius: 16px;
  margin-right: 2px;
`;
