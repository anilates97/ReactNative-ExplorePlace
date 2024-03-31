import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import PlaceItemBig from "./PlaceItemBig";
import { useNavigation } from "@react-navigation/native";

interface Props {
  placeList: any;
}

export default function PlaceList({ placeList }: Props) {
  const navigator = useNavigation<any>();

  const onPlaceClick = (item: any) => {
    navigator.navigate("place-detail");
  };

  return (
    <View>
      <Text style={{ fontSize: 20, fontFamily: "raleway-bold", marginTop: 10 }}>
        {placeList.length} yer bulundu
      </Text>

      <FlatList
        scrollEnabled={false}
        data={placeList}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => onPlaceClick(item)}>
            {index % 4 === 0 ? (
              <PlaceItemBig place={item} />
            ) : (
              <PlaceItem place={item} />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
