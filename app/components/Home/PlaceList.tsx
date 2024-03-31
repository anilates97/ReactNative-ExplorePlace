import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import PlaceItemBig from "./PlaceItemBig";

interface Props {
  placeList: any;
}

export default function PlaceList({ placeList }: Props) {
  return (
    <View>
      <Text style={{ fontSize: 20, fontFamily: "raleway-bold", marginTop: 10 }}>
        {placeList.length} yer bulundu
      </Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={placeList}
        renderItem={({ item, index }) =>
          index % 4 === 0 ? (
            <PlaceItemBig place={item} />
          ) : (
            <PlaceItem place={item} />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({});
