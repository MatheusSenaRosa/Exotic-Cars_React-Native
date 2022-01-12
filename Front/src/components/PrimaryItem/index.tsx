import React from "react";

import { Container } from "./styles";

type Props = {
  src: string;
};

const PrimaryItem = ({ src }: Props) => {
  return <Container source={{ uri: src }} resizeMode="center" />;
};

export default PrimaryItem;
