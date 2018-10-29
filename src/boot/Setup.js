import * as Expo from "expo";
import * as React from "react";
import { Provider } from "mobx-react/native";

import App from "../App";

export default function (stores) {
  return class Setup extends React.Component<Props, State> {
    constructor() {
      super();
      this.state = {
        isReady: false,
      };
    }
    componentWillMount() {
      this.loadFonts();
    }
    loadFonts() {
      // await Expo.Font.loadAsync({
      //     write the font you need load here | 在这里引入你需要的字体
      //     check | 详见  https://docs.expo.io/versions/v30.0.0/sdk/font
      // });
      this.setState({ isReady: true });
    }

    render() {
      if (!this.state.isReady) {
          return <Expo.AppLoading />;
      }
      return (
          <Provider {...stores}>
              <App />
          </Provider>
      );
    }
  };
}
