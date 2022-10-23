import React from "react";
import ReactDOM from "react-dom/client";
import BaiTapHomeLayout from "./components/BaiTapHomeLayout/BaiTapHomeLayout";
import Header from "./components/Header.jsx";
import Product from "./components/Productlist";
import DataBinding from "./DataBinding/DataBinding.jsx";
import HandleEvent from "./components/HandleEvent/HandleEvent.jsx";
import DemoState from "./components/DemoState/DemoState.jsx";
import "./assets/css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //   <div>
  //     <BaiTapHomeLayout />
  //   </div>
  //   <DataBinding />
  //   <HandleEvent />
  <DemoState />
);
