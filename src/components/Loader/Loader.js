import React from "react";

const Loader = () => {
  return window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
};
export default Loader;
