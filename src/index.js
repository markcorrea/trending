import React from "react";
import { render } from "react-dom";
import './media/styles/main.scss';

import Trending from "./components/Trending/Trending";
render(
  <div>
    <Trending />
  </div>,
  document.getElementById("root")
);