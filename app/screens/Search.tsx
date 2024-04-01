import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import GoogleMapViewFull from "../components/Search/GoogleMapViewFull";
import SearchBar from "../components/Search/SearchBar";
import { useLocation } from "../context/UserLocationContext";
import GlobalApi from "../services/GlobalApi";
import BusinessList from "../components/Search/BusinessList";

export default function Search() {
  const [placeList, setPlaceList] = useState();
  const { location, setLocation } = useLocation();

  useEffect(() => {
    GetNearBySearchPlace("restaurant");
  }, []);

  const GetNearBySearchPlace = (value: string) => {
    GlobalApi.searchByText(value).then((resp) => {
      setPlaceList(resp.data.results);
    });
  };
  return (
    <View>
      <View style={{ position: "absolute", zIndex: 20 }}>
        <SearchBar
          setSearchText={(value: string) => GetNearBySearchPlace(value)}
        />
      </View>

      <GoogleMapViewFull />
      <View style={{ position: "absolute", zIndex: 20, bottom: 0 }}>
        <BusinessList placeList={placeList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
