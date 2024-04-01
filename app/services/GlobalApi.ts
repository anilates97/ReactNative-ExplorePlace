import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const nearByPlace = (lat: string, lng: string, type: string) => {
  console.log("lat", lat, "long", lng);
  return axios.get(
    BASE_URL +
      "/nearbysearch/json?&location=" +
      lat +
      "," +
      lng +
      "&radius=1500&type=" +
      type +
      "&key=" +
      API_KEY
  );
};

const searchByText = (searchText: string) =>
  axios.get(
    BASE_URL + "/textsearch/json?query=" + searchText + "&key=" + API_KEY
  );

export default {
  nearByPlace,
  searchByText,
};
