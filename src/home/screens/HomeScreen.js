import React from "react";
import { ScrollView, Image, FlatList, StatusBar } from "react-native";
import { Text, View } from "native-base";
import { homeStyles as style } from "../../assets/styles/homeStyles";
import { Color } from "../../assets/styles/Color";

const mockData = {
  genre: [
    {
      id: 1,
      title: "Made For You",
      source: require("../../assets/album/1.jpg"),
      desc: "Bravenworld Amandacoor, and more."
    },
    {
      id: 2,
      title: "Play On Demand",
      source: require("../../assets/album/2.jpg"),
      desc: ""
    },
    {
      id: 3,
      title: "New Releases",
      source: require("../../assets/album/3.jpg"),
      desc: "New Song for You"
    },
    {
      id: 4,
      title: "Get Better Recomendation",
      source: require("../../assets/album/4.jpg"),
      desc: ""
    },
    {
      id: 5,
      title: "",
      source: require("../../assets/album/5.jpg"),
      desc:
        "For your singing pleasure, the most memorable pop and rock anthems."
    },
    {
      id: 6,
      title: "",
      source: require("../../assets/album/6.jpg"),
      desc: "Diva out by belting out pop hits by bloom."
    },
    {
      id: 7,
      title: "",
      source: require("../../assets/album/7.jpg"),
      desc: "Easy listening pop from all your favorite artist!."
    },
    {
      id: 8,
      title: "",
      source: require("../../assets/album/8.jpg"),
      desc: "Weezer's, rock tracks,\n all in one playlist."
    },
    {
      id: 9,
      title: "",
      source: require("../../assets/album/9.jpg"),
      desc:
        "From harder to breather to their latest albums, Red Pill Blues, th pop"
    },
    {
      id: 10,
      title: "",
      source: require("../../assets/album/10.jpg"),
      desc: "Special Bohemian Rhapsody for you "
    },
    {
      id: 11,
      title: "",
      source: require("../../assets/album/script.png"),
      desc: "Check out this collection of hits by the Honolulu pop phenom."
    },
    {
      id: 12,
      title: "",
      source: require("../../assets/album/11.jpg"),
      desc: "Hear best symphony music, just here"
    },
    {
      id: 13,
      title: "",
      source: require("../../assets/album/14.jpeg"),
      desc: "Look closer for your mood."
    },
    {
      id: 14,
      title: "",
      source: require("../../assets/album/13.jpg"),
      desc: "Talk to moon, all in one playlist."
    },
    {
      id: 15,
      title: "",
      source: require("../../assets/album/12.jpg"),
      desc: "For your singing pleasure, the most memorable pop and rock anthems"
    }
  ]
};

class Home extends React.Component {
  render() {
    return (
      <View style={style.homeWrapper}>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        <View style={style.homeContainer}>
          <Text style={style.title}>Hey</Text>
          <Text style={style.h2}>
            We made you a personalized playlist with special song
          </Text>
        </View>
        <View style={style.content}>
          <ScrollView style={style.scrollStyle}>
            <View style={{ top: 0, zIndex: 5 }}>
              <Image
                style={style.wrapperImg}
                source={require("../../assets/background/blackHome.png")}
              />
            </View>
            <View style={{ height: "100%", marginTop: -550, zIndex: 10 }}>
              <View style={{ backgroundColor: Color.black }}>
                <FlatList
                  numColumns={1}
                  // horizontal={true}
                  data={mockData.genre}
                  renderItem={({ item }) => (
                    <View>
                      <Text style={style.contentTitle}>{item.title}</Text>
                      <Text style={style.contentDesc}>{item.desc}</Text>
                      <View>
                        <Image style={style.contentImg} source={item.source} />
                      </View>
                    </View>
                  )}
                  keyExtractor={item => item.id.toString()}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Home;
