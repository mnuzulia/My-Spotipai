import React from "react";
import { Linking } from "react-native";

import { Text, View, Button, Input, Icon, Item } from "native-base";
import { Color } from "../../assets/styles/Color";
import { logRegStyles } from "../../assets/styles/logRegStyles";

const RegisterScreen = props => {
  return (
    <View style={{ height: "100%", backgroundColor: Color.black, flex: 1 }}>
      <View style={{ alignSelf: "center" }}>
        <Button
          rounded
          style={{ width: 320, top: 20, justifyContent: "center" }}
          onPress={() =>
            Linking.openURL(
              "https://www.facebook.com/login.php?skip_api_login=1&api_key=174829003346&kid_directed_site=0&app_id=174829003346&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.2%2Fdialog%2Foauth%3Fapp_id%3D174829003346%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter.php%253Fversion%253D44%2523cb%253Df3ea495de1c01%2526domain%253Dwww.spotify.com%2526origin%253Dhttps%25253A%25252F%25252Fwww.spotify.com%25252Ff11c196e0d7f91c%2526relation%253Dopener%26client_id%3D174829003346%26display%3Dpopup%26domain%3Dwww.spotify.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.spotify.com%252Fus%252Fsignup%252F%26locale%3Den_US%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter.php%253Fversion%253D44%2523cb%253Df333049b3b163f4%2526domain%253Dwww.spotify.com%2526origin%253Dhttps%25253A%25252F%25252Fwww.spotify.com%25252Ff11c196e0d7f91c%2526relation%253Dopener%2526frame%253Df1e2af667c53b7c%26response_type%3Dtoken%252Csigned_request%26scope%3Demail%252Cpublish_actions%252Cuser_birthday%252Cpublic_profile%252Cuser_friends%26sdk%3Djoey%26version%3Dv2.2%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Db7c437a7-bd98-4a96-9806-64c777108e9c&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D44%23cb%3Df333049b3b163f4%26domain%3Dwww.spotify.com%26origin%3Dhttps%253A%252F%252Fwww.spotify.com%252Ff11c196e0d7f91c%26relation%3Dopener%26frame%3Df1e2af667c53b7c%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB"
            )
          }
        >
          <Text>SIGN UP WITH FACEBOOK</Text>
        </Button>
      </View>
      <Text
        style={{
          color: "white",
          alignSelf: "center",
          fontWeight: "100",
          fontSize: 12,
          top: 15,
          marginVertical: 20
        }}
      >
        or with e-mail
      </Text>
      <View
        style={{
          alignSelf: "center",
          width: "80%",
          backgroundColor: "transparent",
          top: 10
        }}
      >
        <Item style={logRegStyles.item}>
          <Icon style={logRegStyles.icon} name="ios-mail" />
          <Input
            style={{ color: "white" }}
            placeholderTextColor="rgba(255,255,255,0.8)"
            placeholder="Email"
          />
        </Item>
        <Item style={logRegStyles.item}>
          <Icon style={logRegStyles.icon} name="ios-lock" />
          <Input
            style={{ color: "white" }}
            placeholderTextColor="rgba(255,255,255,0.8)"
            placeholder="Choose Password"
          />
        </Item>
        <Item style={logRegStyles.item}>
          <Icon style={logRegStyles.icon} name="ios-person" />
          <Input
            style={{ color: "white" }}
            placeholderTextColor="rgba(255,255,255,0.8)"
            placeholder="Choose Username"
          />
        </Item>
        <Item style={logRegStyles.item}>
          <Icon style={logRegStyles.icon} name="ios-calendar" />
          <Input
            style={{ color: "white" }}
            placeholderTextColor="rgba(255,255,255,0.8)"
            placeholder="Date of Birth"
          />
        </Item>
        <Item style={logRegStyles.item}>
          <Icon style={logRegStyles.icon} name="ios-people" />
          <Input
            style={{ color: "white" }}
            placeholderTextColor="rgba(255,255,255,0.8)"
            placeholder="Gender"
          />
        </Item>
      </View>
      <View style={{ alignSelf: "center", marginTop: 20 }}>
        <Button
          rounded
          style={{
            backgroundColor: Color.green,
            width: 250,
            justifyContent: "center"
          }}
        >
          <Text style={{ color: "white" }}>SIGN UP</Text>
        </Button>
      </View>
      <View style={{ width: 320, alignSelf: "center", marginTop: 15 }}>
        <Text
          style={{
            textAlign: "center",
            color: Color.grey03,
            fontWeight: "100",
            fontSize: 12
          }}
        >
          By signing up, you agree to Spotify <Text />
          <Text
            style={{ fontSize: 12, fontWeight: "bold", color: "white" }}
            onPress={() =>
              Linking.openURL(
                "https://www.spotify.com/legal/end-user-agreement/"
              )
            }
          >
            Terms and condition of Use <Text />
          </Text>
          and <Text />
          <Text
            style={{ fontSize: 12, fontWeight: "bold", color: "white" }}
            onPress={() =>
              Linking.openURL(
                "https://www.spotify.com/legal/privacy-policy-update/"
              )
            }
          >
            Privacy Policy
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;
