import { Navigation } from "react-native-navigation";

import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";

export default () => {
  Navigation.registerComponent("Screen1", () => Screen1);
  Navigation.registerComponent("Screen2", () => Screen2);

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: "One",
        screen: "Screen1",
        title: "Screen One",
        icon: require("./images/icon.png")
      },
      {
        label: "Two",
        screen: "Screen2",
        title: "Screen Two",
        icon: require("./images/icon.png")
      }
    ]
  });
};
