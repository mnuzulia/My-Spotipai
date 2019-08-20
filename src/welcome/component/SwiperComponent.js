import React from "react";
import { Text, View } from "react-native";
import Swiper from "react-native-swiper";

const mock = {
  content: [
    {
      title: "Welcome",
      desc: "Sign up for free music on your phone, tablet, and computer"
    },
    {
      title: "Browse",
      desc:
        "Explore top tracks, new releases, and right playlist for every moment"
    },
    {
      title: "Search",
      desc: "Looking for that special album or artist? Just search and hit play"
    },
    {
      title: "Your Library",
      desc: "Save any song, album, or playlist to your own music collection"
    }
  ]
};

const SwiperComponent = props => {
  return (
    <View style={{ flex: 0.5 }}>
      <Swiper
        autoplay
        dotColor={"rgba(255,255,255, 0.4)"}
        activeDotStyle={{ width: 10, height: 10 }}
        activeDotColor={"white"}
        dotStyle={{ width: 10, height: 10 }}
        paginationStyle={{ bottom: "1%", marginHorizontal: 10 }}
        style={SwiperStyles.wrapper}
      >
        {mock.content.map((element, index) => (
          <View key={index} style={SwiperStyles.wrapper}>
            <Text style={SwiperStyles.title}> {element.title} </Text>
            <Text style={SwiperStyles.desc}> {element.desc} </Text>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const SwiperStyles = {
  wrapper: {
    position: "relative",
    width: "100%",
    alignSelf: "center",
    top: "8%"
  },
  title: {
    marginHorizontal: 15,
    fontSize: 23,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    alignSelf: "center"
  },
  desc: {
    marginHorizontal: 15,
    fontSize: 16,
    textAlign: "center",
    color: "white",
    width: "80%",
    alignSelf: "center"
  }
};

export default SwiperComponent;
