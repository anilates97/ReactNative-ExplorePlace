import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Home/Header";
import GoogleMapView from "../components/Home/GoogleMapView";
import CategoryList from "../components/Home/CategoryList";

export default function Home() {
  return (
    <View style={{ padding: 20, marginTop: 30 }}>
      <Header />
      <GoogleMapView />
      <CategoryList />
    </View>
  );
}

const styles = StyleSheet.create({});
