import styled from "styled-components/native";

export const Screen = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
`;

export const BackToTopButton = styled.View`
  position: absolute;
  background-color: red;
  z-index: 999;
  right: 20px;
  bottom: 70px;
  background-color: #e6d3f1;
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;
