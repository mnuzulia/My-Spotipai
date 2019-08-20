import React from "react";
import { Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Search from "../component/Search";
import Genre from "../component/Genre";
import { SearchStyles as styles } from "../../assets/styles/SearchStyles";

class SearchScreen extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={["#3F3F3F", "#121212", "#000000", "#000000", "#000000"]}
        style={styles.searchWrapper}
      >
        <View style={styles.searchContainer}>
          <Text style={styles.title}>Search</Text>
        </View>
        <View style={styles.searchBar}>
          <Search />
        </View>
        <View style={styles.searchContent}>
          <Genre />
        </View>
      </LinearGradient>
    );
  }
}

export default SearchScreen;
