import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function GoogleMapView() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 40.8045114,
    longitude: 29.4224365,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={{ marginTop: 20 }}>
      <MapView
        style={{
          width: Dimensions.get("screen").width * 0.89,
          height: Dimensions.get("screen").height * 0.23,
          borderRadius: 20,
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
