import { Share } from "react-native";

const SharePlace = (place: any) => {
  Share.share({
    title: "Paylaş",
    message:
      "Mekan adı: " + place?.name + "\n" + "Adres: " + place?.vicinity
        ? place.vicinity
        : place?.formatted_address,
  });
};

export default {
  SharePlace,
};
