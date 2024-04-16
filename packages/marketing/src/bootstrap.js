import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

//mount function to start the app
const mount = (el) => {
  ReactDOM.render(<App/>, el);
};

//if we are in isolation and development we will call the mount immediately
if (process.env.NODE_ENV === "development") {
  const devRootMarketing = document.querySelector("#dev-marketing-root");
  if(devRootMarketing){
    mount(devRootMarketing)
  }
}

//this is for container
export {mount}