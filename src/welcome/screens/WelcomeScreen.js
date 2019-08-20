import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { WelcomeHeader } from "../component/WelcomeHeader";
import Video from "react-native-video";
import SwiperComponent from "../component/SwiperComponent";
import { WelcomeButton } from "../component/WelcomeButton";

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={welcomeScrStyle.welScrWrapper}>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        <Video
          repeat
          source={require("../../assets/raw/roomies.mp4")}
          resizeMode="cover"
          style={StyleSheet.absoluteFill}
        />
        <View style={welcomeScrStyle.componentWrapper}>
          <WelcomeHeader />
          <SwiperComponent />
          <WelcomeButton {...this.props} />
        </View>
      </View>
    );
  }
}

const welcomeScrStyle = {
  welScrWrapper: {
    flex: 1
  },

  componentWrapper: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)"
  }
};
export default WelcomeScreen;
