import React from "react";
import { LogBox, StatusBar } from 'react-native';
import Routes from "./src/routes";
import colors from "./src/utils/colors";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications


const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.yellow_dark} />
      <Provider store={store}>
        <Routes />
      </Provider>

    </>
  )
}

export default App;