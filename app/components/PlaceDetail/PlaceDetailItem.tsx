import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../shared/Colors";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Share from "../../services/Share";

interface Props {
  place: any;
  onDirectionClick: () => void;
}

export default function PlaceDetailItem({ place, onDirectionClick }: Props) {
  return (
    <View>
      <Text style={{ fontSize: 26, fontFamily: "raleway-bold" }}>
        {place?.name}
      </Text>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginTop: 5,
          flexDirection: "row",
        }}
      >
        <AntDesign name="star" size={20} color={Colors.YELLOW} />
        <Text>{place?.rating}</Text>
      </View>

      {place?.photos ? (
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
              place?.photos[0]?.photo_reference +
              "&key=" +
              process.env.GOOGLE_MAPS_API_KEY,
          }}
          style={{
            width: "100%",
            height: 160,
            borderRadius: 15,
            marginTop: 10,
          }}
        />
      ) : null}

      <Text
        style={{ fontSize: 16, marginTop: 10, color: Colors.DARK_GRAY }}
        numberOfLines={2}
      >
        {place?.vicinity ? place.vicinity : place?.formatted_address}
      </Text>

      {place?.opening_hours ? (
        <Text style={{ fontFamily: "raleway" }} numberOfLines={2}>
          {place?.opening_hours?.open_now === true ? "(Açık)" : "(Kapalı)"}
        </Text>
      ) : null}

      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          display: "flex",
          gap: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => onDirectionClick()}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: Colors.GRAY,
            width: 110,
            padding: 10,
            borderRadius: 40,
            justifyContent: "center",
          }}
        >
          <Ionicons name="navigate-circle-outline" size={24} color="black" />
          <Text style={{ fontFamily: "raleway", fontSize: 16 }}>Yön</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Share.SharePlace(place)}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: Colors.GRAY,
            width: 90,
            padding: 10,
            borderRadius: 40,
            justifyContent: "center",
          }}
        >
          <Ionicons name="share-outline" size={24} color="black" />
          <Text style={{ fontFamily: "raleway", fontSize: 16 }}>Paylaş</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
