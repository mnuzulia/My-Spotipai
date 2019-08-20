import React from "react";
import { Image, View, StatusBar } from "react-native";

// const SplashScreen = () => {
//   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//     <Text>Ini Logo Spotipai</Text>
//   </View>;
// };

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);

    // console.log(this.props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Welcome");
    }, 1000);
  }

  render() {
    return (
      <View style={styles.viewLogo}>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        <Image
          source={require("../../assets/logo/sp_logo.png")}
          style={styles.logoStyle}
        />
      </View>
    );
  }
}

const styles = {
  viewLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000"
  },
  logoStyle: {
    width: 150,
    height: 150
  }
};
export default SplashScreen;
