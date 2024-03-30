import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useLocation } from "../../context/UserLocationContext";

export default function GoogleMapView() {
  const [mapRegion, setMapRegion] = useState<any>([]);

  const { location, setLocation } = useLocation();

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longtude,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421,
      });
    }
  }, []);

  console.log("l:", location);
  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 10,
          fontWeight: "600",
          fontFamily: "raleway-bold",
        }}
      >
        Yakındaki yerlere göre en iyiler
      </Text>
      <View style={{ borderRadius: 30, overflow: "hidden" }}>
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
    </View>
  );
}

const styles = StyleSheet.create({});
