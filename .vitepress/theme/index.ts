import DefaultTheme from "vitepress/theme";
import EasingPlayground from "./components/EasingPlayground.vue";
import KeyframeIcon from "./components/KeyframeIcon.vue";
import TimelineDemo from "./components/TimelineDemo.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("EasingPlayground", EasingPlayground);
    app.component("KeyframeIcon", KeyframeIcon);
    app.component("TimelineDemo", TimelineDemo);
  }
};
