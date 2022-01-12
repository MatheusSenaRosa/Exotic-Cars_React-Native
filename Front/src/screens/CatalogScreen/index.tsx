import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, TouchableOpacity } from "react-native";

import { BackToTopButton, Content, Screen } from "./styles";

import api from "@services/config";
import { CatalogListItem, Header } from "@components/index";

export type CarItem = {
  id: number;
  brand: string;
  icon: string;
  model: string;
  price: number;
  brandIcon: string;
  colors: {
    id: string;
    color: string;
    selectedImage: string;
    primaryImage: string;
    secondaryImage: string;
  }[];
};

const CatalogScreen = () => {
  let listView: FlatList<CarItem> | null;
  const [carsList, setCarsList] = useState<CarItem[]>([] as CarItem[]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get("");
      setCarsList([...data]);
    };
    getData();
  }, []);

  const topButtonHandler = () => {
    listView?.scrollToOffset({ offset: 0, animated: true });
  };

  return (
    <Screen>
      <Header />
      <Content>
        <BackToTopButton
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <TouchableOpacity onPress={topButtonHandler}>
            <MaterialIcons name="keyboard-arrow-up" size={50} color="white" />
          </TouchableOpacity>
        </BackToTopButton>
        <FlatList
          data={carsList}
          keyExtractor={(item) => item.id.toString()}
          style={{ marginVertical: 20 }}
          ref={(ref) => {
            listView = ref;
          }}
          renderItem={({ item }) => <CatalogListItem data={item} />}
        />
      </Content>
    </Screen>
  );
};

export default CatalogScreen;
