import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../shared/Colors";

import { useNavigation } from "@react-navigation/native";
import BusinessItem from "./BusinessItem";
import { RouteParams } from "../../../types/navigation";

interface Props {
  placeList: any;
}

export default function BusinessList({ placeList }: Props) {
  const navigation = useNavigation<RouteParams>();
  return (
    <View>
      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", Colors.WHITE]}
        style={{ padding: 20, width: Dimensions.get("screen").width }}
      >
        <FlatList
          data={placeList}
          horizontal={true}
          renderItem={({ item, index }) => (
            //   index <= 6 &&
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("place-detail", {
                  place: item,
                })
              }
            >
              <BusinessItem place={item} />
            </TouchableOpacity>
          )}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({});
