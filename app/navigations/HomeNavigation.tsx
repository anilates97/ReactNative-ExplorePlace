import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import Home from "../screens/Home";
import PlaceDetail from "../components/PlaceDetail/PlaceDetail";

export type RootStackParamsList = {
  "home-screen": undefined;
  "place-detail": undefined;
};

export default function HomeNavigation() {
  const isAndroid = Platform.OS === "android";
  const Stack = createStackNavigator<RootStackParamsList>();
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        ...(isAndroid && TransitionPresets.ModalPresentationIOS),
      }}
    >
      <Stack.Screen name="home-screen" component={Home} />
      <Stack.Screen
        name="place-detail"
        component={PlaceDetail}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
