import React from "react";
import { Text, View } from "react-native";

import { Button } from "native-base";
import { Color } from "../../assets/styles/Color";

export const WelcomeButton = props => {
  return (
    <View style={welcomeButtonStyle.welButtonWrapper}>
      <Button
        rounded
        style={welcomeButtonStyle.buttonRegist}
        onPress={() => props.navigation.navigate("Register")}
      >
        <Text style={welcomeButtonStyle.textRegist}>CREATE ACCOUNT</Text>
      </Button>
      <Text style={welcomeButtonStyle.textAlUser}>Already a user?</Text>
      <Button
        rounded
        style={welcomeButtonStyle.buttonLogin}
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text style={welcomeButtonStyle.textLogin}>LOG IN</Text>
      </Button>
    </View>
  );
};

const welcomeButtonStyle = {
  welButtonWrapper: {
    flex: 1,
    top: "15%"
  },
  buttonRegist: {
    backgroundColor: Color.green,
    width: 280,
    height: 45,
    alignSelf: "center",
    justifyContent: "center"
  },
  buttonLogin: {
    backgroundColor: "white",
    width: 280,
    height: 45,
    alignSelf: "center",
    justifyContent: "center"
  },
  textRegist: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white"
  },
  textLogin: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
    width: 280,
    textAlign: "center"
  },
  textAlUser: {
    fontSize: 14,
    color: "white",
    marginVertical: 10,
    alignSelf: "center"
  }
};
