import React, { Component } from "react";
import { connect } from "react-redux";
import Player from "../component/Player";

class NowPlayingScreen extends React.Component {
  render() {
    return <Player tracks={this.props.listAlbum.data} />;
  }
}

function mapStateToProps(state) {
  return {
    listAlbum: state.listAlbum
  };
}

export default connect(mapStateToProps)(NowPlayingScreen);
