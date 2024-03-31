import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const categoryList = [
    {
      id: 1,
      name: "Gaz İstasyonu",
      value: "gas_station",
      icon: require("./../../../assets/gas.png"),
    },
    {
      id: 2,
      name: "Restaurantlar",
      value: "restaurant",
      icon: require("./../../../assets/food.png"),
    },
    {
      id: 3,
      name: "Kafe",
      value: "cafe",
      icon: require("./../../../assets/cafe.png"),
    },
  ];
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontFamily: "raleway" }}>Kategori seç</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={categoryList}
        style={{ marginTop: 5 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(item.name)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
