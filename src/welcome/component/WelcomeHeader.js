import React from "react";
import { Image, Text, View } from "react-native";

export const WelcomeHeader = props => {
  return (
    <View style={welHeadStyle.welHeadWrapper}>
      <Image
        source={require("../../assets/logo/ic_spotify_logo.png")}
        style={welHeadStyle.logoHeader}
      />
      <Text style={welHeadStyle.textHeader}>Spotify</Text>
    </View>
  );
};

const welHeadStyle = {
  welHeadWrapper: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "center"
  },

  logoHeader: {
    alignSelf: "center",
    width: 80,
    height: 80,
    marginRight: 20
  },

  textHeader: {
    alignSelf: "center",
    color: "white",
    fontSize: 45,
    fontWeight: "bold"
  }
};
