import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import { CatalogScreen, DetailsScreen } from "@screens/index";

const PageRoutes = () => (
  <Navigator headerMode="none">
    <Screen name="Catalog" component={CatalogScreen} />
    <Screen name="Details" component={DetailsScreen} />
  </Navigator>
);

export default PageRoutes;
