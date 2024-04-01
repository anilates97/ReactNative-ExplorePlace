import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocation } from "../../context/UserLocationContext";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import PlaceMarker from "../Home/PlaceMarker";

export default function GoogleMapViewFull() {
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
  }, [location]);
  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ borderRadius: 30, overflow: "hidden" }}>
        <MapView
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height * 0.89,
            borderRadius: 20,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        >
          <Marker title="Sen" coordinate={mapRegion} />
          {/* {placeList?.map(
          (item: any, index: number) =>
            index <= 4 && <PlaceMarker item={item} key={index} />
        )} */}
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
