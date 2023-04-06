import React from "react";
import Routes from "./src/Routes";

import { Keyboard, KeyboardAvoidingView, LogBox, Platform, TouchableWithoutFeedback } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications


const App = () => {
  return (
    <>

      {/* <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}> */}
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
          <Routes />
        {/* </TouchableWithoutFeedback> */}
      {/* </KeyboardAvoidingView> */}


    </>
  )
}

export default App;