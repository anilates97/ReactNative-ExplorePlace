import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../shared/Colors";

interface Props {
  place: any;
}

export default function PlaceItemBig({ place }: Props) {
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      {place?.photos ? (
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
              place?.photos[0]?.photo_reference +
              "&key=" +
              process.env.GOOGLE_MAPS_API_KEY,
          }}
          style={{ width: "100%", height: 130, borderRadius: 15 }}
        />
      ) : null}

      <Text
        numberOfLines={2}
        style={{ fontSize: 18, fontFamily: "raleway-bold", marginBottom: 2 }}
      >
        {place.name}
      </Text>
      <Text
        numberOfLines={2}
        style={{ fontSize: 16, marginBottom: 5, color: Colors.DARK_GRAY }}
      >
        {place.vicinity}
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <AntDesign name="star" size={20} color={Colors.YELLOW} />
        <Text>{place.rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
