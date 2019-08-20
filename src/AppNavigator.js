import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { Icon } from "native-base";
// import Icon from "react-native-vector-icons/Ionicons";
import SplashScreen from "./welcome/screens/SplashScreen";
import WelcomeScreen from "./welcome/screens/WelcomeScreen";
import LoginScreen from "./welcome/screens/LoginScreen";
import RegisterScreen from "./welcome/screens/RegisterScreen";
import HomeScreen from "./home/screens/HomeScreen";
import SearchScreen from "./search/screens/SearchScreen";
import LibraryScreen from "./library/screens/LibraryScreen";
import NowPlayingScreen from "./library/screens/NowPlayingScreen";
// import NowPlayingScreen from "./library/screens/NowPlayingScreen";
import { Color } from "./assets/styles/Color";

const bottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="md-home" size={35} style={{ color: tintColor }} />;
        }
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-search" size={35} style={{ color: tintColor }} />
        )
      }
    },
    Library: {
      screen: LibraryScreen,
      navigationOptions: {
        tabBarLabel: "Library",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-list" size={35} style={{ color: tintColor }} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Color.white,
      inactiveTintColor: Color.grey03,
      showLabel: true,
      style: {
        backgroundColor: Color.grey01,
        height: 57
      }
    }
  }
);

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: {
        header: null
      }
    },
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: "Login",
        headerStyle: {
          backgroundColor: Color.grey01,
          elevation: 0
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          width: "72%",
          textAlign: "center"
        }
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        title: "Register",
        headerStyle: {
          backgroundColor: Color.grey01,
          elevation: 0
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          width: "72%",
          textAlign: "center"
        }
      }
    },
    App: {
      screen: bottomNavigator,
      navigationOptions: {
        header: null
      }
    },
    NowPlaying: {
      screen: NowPlayingScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Splash"
  }
);

export default createAppContainer(AppNavigator);
