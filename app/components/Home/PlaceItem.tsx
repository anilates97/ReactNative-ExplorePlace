import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../shared/Colors";

interface Props {
  place: any;
}

export default function PlaceItem({ place }: Props) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        width: "100%",
        alignItems: "center",
        gap: 15,
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
          style={{ width: 110, height: 110, borderRadius: 15 }}
        />
      ) : null}
      <View style={{ flex: 1 }}>
        <Text
          numberOfLines={2}
          style={{ fontSize: 18, fontFamily: "raleway-bold", marginBottom: 5 }}
        >
          {place.name}
        </Text>
        <Text
          numberOfLines={2}
          style={{ fontSize: 18, marginBottom: 10, color: Colors.DARK_GRAY }}
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
    </View>
  );
}

const styles = StyleSheet.create({});
