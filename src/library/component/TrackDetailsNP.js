import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions
} from "react-native";

import { trackdetailStyles as styles } from "../../assets/styles/trackdetailStyles";

const TrackDetails = ({
  title,
  artist,
  onAddPress,
  onMorePress,
  onTitlePress,
  onArtistPress
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onAddPress}>
      <Image
        style={styles.button}
        source={require("../../assets/icon/ic_add_circle_outline_white.png")}
      />
    </TouchableOpacity>
    <View style={styles.detailsWrapper}>
      <Text style={styles.title} onPress={onTitlePress}>
        {title}
      </Text>
      <Text style={styles.artist} onPress={onArtistPress}>
        {artist}
      </Text>
    </View>
    <TouchableOpacity onPress={onMorePress}>
      <View style={styles.moreButton}>
        <Image
          style={styles.moreButtonIcon}
          source={require("../../assets/icon/ic_more_horiz_white.png")}
        />
      </View>
    </TouchableOpacity>
  </View>
);

export default TrackDetails;
