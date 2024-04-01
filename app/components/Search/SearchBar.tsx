import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../shared/Colors";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  setSearchText: any;
}

export default function SearchBar({ setSearchText }: Props) {
  const [searchInput, setSearchInput] = useState<string>();
  return (
    <View>
      <LinearGradient
        colors={[Colors.WHITE, "transparent"]}
        style={{ padding: 20, width: Dimensions.get("screen").width }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontFamily: "raleway-bold", fontSize: 35 }}>
            Keşfet
          </Text>
          <Image
            source={require("./../../../assets/user.png")}
            style={{ width: 50, height: 50, borderRadius: 100 }}
          />
        </View>

        <View
          style={{
            display: "flex",
            marginTop: 5,
            flexDirection: "row",
            padding: 10,
            gap: 5,
            elevation: 0.7,
            alignItems: "center",
            backgroundColor: Colors.WHITE,
            borderRadius: 5,
          }}
        >
          <Ionicons name="search" size={24} color={Colors.DARK_GRAY} />
          <TextInput
            placeholder="Search"
            style={{ backgroundColor: Colors.WHITE, width: "80%" }}
            onChangeText={(value) => setSearchInput(value)}
            onSubmitEditing={() => setSearchText(searchInput)}
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({});
