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
import configureStore from "./src/store/configureStore";
const AppContainer = createAppContainer(AppNavigator);

const store = configureStore();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
export default App;
