import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useLocation } from "../../context/UserLocationContext";

export default function GoogleMapView() {
  const [mapRegion, setMapRegion] = useState<any>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 2,
    longitudeDelta: 2,
  });

  const { location, setLocation } = useLocation();

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
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
        >
          {<Marker title="Sen" coordinate={mapRegion} />}
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
