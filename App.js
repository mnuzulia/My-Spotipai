/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Provider } from "react-redux";
import AppNavigator from "./src/AppNavigator";
import { createAppContainer } from "react-navigation";
import { StatusBar } from "react-native";
import configureStore from "./src/store/configureStore";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillUpdate is deprecated",
  "Warning: componentWillReceiveProps is deprecated",
  "Remote debugger",
  "ViewPagerAndroid"
]);

const AppContainer = createAppContainer(AppNavigator);
const store = configureStore();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar
          translucent
          backgroundColor="#000000"
          barStyle="light-content"
        />
        <AppContainer />
      </Provider>
    );
  }
}
export default App;
