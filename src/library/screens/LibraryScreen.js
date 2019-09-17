import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  FlatList,
  StatusBar
} from "react-native";
import TrackPlayer from "react-native-track-player";
import { connect } from "react-redux";
import { libraryStyles as style } from "../../assets/styles/libraryStyles";
import { getListAlbum } from "../actions/listAlbum";

class Library extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getListAlbum());
  }

  handlePlaySong = data => {
    TrackPlayer.setupPlayer().then(async () => {
      // Adds a track to the queue
      await TrackPlayer.add({
        id: data.id,
        url: data.audioUrl,
        title: data.title,
        artist: data.artist,
        artwork: data.audioUrl
      });

      // Starts playing it
      TrackPlayer.play();
    });
  };

  render() {
    console.log("props list album", this.props);
    return (
      <View style={style.libraryWrapper}>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        <View style={style.libraryContainer}>
          <Text style={style.title}>Playlists</Text>
        </View>
        <FlatList
          data={this.props.listAlbum.data}
          renderItem={({ item }) => (
            <View style={style.list}>
              <Image source={{ uri: item.albumArtUrl }} style={style.artwork} />
              <View style={style.info}>
                <Text
                  onPress={() => this.props.navigation.navigate("NowPlaying")}
                  // onPress={() => this.handlePlaySong(item)}
                  style={style.titleSong}
                >
                  {item.title}
                </Text>
                <Text
                  style={style.artist}
                  onPress={() => this.props.navigation.navigate("NowPlaying")}
                >
                  {item.artist}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    listAlbum: state.listAlbum
  };
}

export default connect(mapStateToProps)(Library);
