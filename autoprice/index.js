import "./css";
import { makeWidget } from "./widget";

if (document.readyState !== "loading") {
  myInitCode();
} else {
  document.addEventListener("DOMContentLoaded", myInitCode);
}

function myInitCode() {
  const widgets = document.getElementsByClassName("auto-price");
  for (let element of widgets) {
    makeWidget(element);
  }
}
