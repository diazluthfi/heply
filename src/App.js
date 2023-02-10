import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Router } from "./router";
import { Provider } from "react-redux";
import store from './reducers/store';

import {
  useFonts,
  PublicSans_300Light,
  PublicSans_400Regular,
  PublicSans_600SemiBold,
  PublicSans_700Bold,
} from '@expo-google-fonts/public-sans';

function App() {
  let [fontsLoaded, error] = useFonts({
    light:PublicSans_300Light,
    regular:PublicSans_400Regular,
    semibold: PublicSans_600SemiBold,
    bold : PublicSans_700Bold,
  });

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    </Provider>
  );
}

export default App;
