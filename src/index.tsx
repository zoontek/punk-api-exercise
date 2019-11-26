import React from "react";
import { render } from "react-dom";
import AppJs from "./JavaScript/App";
import AppTs from "./TypeScript/App";

if (typeof window.ResizeObserver === "undefined") {
  // polyfill for ResizeObserver API (https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)
  // you will probably don't use this directly
  window.ResizeObserver = require("resize-observer-polyfill").default;
}

const USE_TYPESCRIPT = false;
render(USE_TYPESCRIPT ? <AppTs /> : <AppJs />, document.getElementById("root"));
