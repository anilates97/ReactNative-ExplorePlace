import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

interface Props {
  item: any;
}

export default function PlaceMarker({ item }: Props) {
  const coordinate = {
    latitude: item.geometry.location.lat,
    longitude: item.geometry.location.lng,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0421,
  };
  return <Marker title={item.name} coordinate={coordinate} />;
}

const styles = StyleSheet.create({});
