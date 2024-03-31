import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../shared/Colors";

interface CategoryItemProps {
  category: {
    id: number;
    name: string;
    value: string;
    icon: any;
  };
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <View
      style={{
        padding: 5,
        alignItems: "center",
        margin: 5,
        width: 100,
        height: 100,
        backgroundColor: Colors.WHITE,
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Image source={category.icon} style={{ width: 50, height: 50 }} />
      <Text style={{ fontSize: 12.5, fontFamily: "raleway" }}>
        {category.name}
      </Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
