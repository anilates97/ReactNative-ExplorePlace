import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Home/Header";
import GoogleMapView from "../components/Home/GoogleMapView";
import CategoryList from "../components/Home/CategoryList";
import GlobalApi from "../services/GlobalApi";
import PlaceList from "../components/Home/PlaceList";
import { useLocation } from "../context/UserLocationContext";

export default function Home() {
  const [placeList, setPlaceList] = useState<any>();
  const { location, setLocation } = useLocation();
  const GetNearBySearchPlace = (value: any) => {
    GlobalApi.nearByPlace(
      location?.coords?.latitude,
      location?.coords?.longitude,
      value
    ).then((resp) => {
      setPlaceList(resp.data.results);
    });
  };

  useEffect(() => {
    GetNearBySearchPlace("resturant");
  }, []);

  return (
    <ScrollView style={{ padding: 20, marginTop: 30 }}>
      <Header />
      <GoogleMapView />
      <CategoryList
        setSelectedCategory={(value: any) => GetNearBySearchPlace(value)}
      />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
