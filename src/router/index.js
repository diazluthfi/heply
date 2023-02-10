import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Home,
  Splash,
  Map,
  Profile,
  RumahSakitDetail,
  Login,
  Register1,
  ChangePassword,
  EditProfile,
  BuatJanji,
} from "../pages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigator } from "../components";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{ title: "Maps", headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export class Router extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ title: "Edit Profile" }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ title: "ChangePassword" }}
        />
        <Stack.Screen
          name="Register1"
          component={Register1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BuatJanji"
          component={BuatJanji}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}

export default Router;
