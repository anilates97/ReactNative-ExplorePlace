import {
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { RouteParams } from "../../../types/navigation";
import PlaceDetailItem from "./PlaceDetailItem";
import Colors from "../../shared/Colors";
import GoogleMapView from "../Home/GoogleMapView";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

export default function PlaceDetail() {
  const param = useRoute<RouteParams>().params;
  const [place, setPlace] = useState<any>();

  const onDirectionClick = () => {
    const url = Platform.select({
      ios:
        "maps:" +
        place?.geometry.location.lat +
        "," +
        place?.geometry.location.lng +
        "?q=" +
        place?.vicinity,
      android:
        "geo:" +
        place?.geometry.location.lat +
        "," +
        place?.geometry.location.lng +
        "?q=" +
        place?.vicinity,
    });

    Linking.openURL(url || "");
  };

  useEffect(() => {
    console.log(param!.place);
    setPlace(param.place);
  }, []);
  return (
    <ScrollView style={{ padding: 20, backgroundColor: Colors.WHITE, flex: 1 }}>
      <PlaceDetailItem place={place} onDirectionClick={onDirectionClick} />
      <GoogleMapView placeList={[place]} />
      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 15,
          alignContent: "center",

          margin: 8,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          paddingBottom: 15,
        }}
        onPress={() => onDirectionClick()}
      >
        <Ionicons name="navigate-circle-outline" size={30} color="white" />

        <Text
          style={{
            fontFamily: "raleway",
            textAlign: "center",
            color: Colors.WHITE,
          }}
        >
          Google Map'e git
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
