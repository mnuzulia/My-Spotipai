import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { headerStyles as styles } from "../../assets/styles/headerStyles";

const Header = ({ message, onDownPress, onQueuePress, onMessagePress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onDownPress}>
      <Image
        style={styles.button}
        source={require("../../assets/icon/ic_keyboard_arrow_down_white.png")}
      />
    </TouchableOpacity>
    <Text onPress={onMessagePress} style={styles.message}>
      {message.toUpperCase()}
    </Text>
    <TouchableOpacity onPress={onQueuePress}>
      <Image
        style={styles.button}
        source={require("../../assets/icon/ic_queue_music_white.png")}
      />
    </TouchableOpacity>
  </View>
);

export default Header;
