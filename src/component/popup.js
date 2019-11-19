import React from "react";
import Popup from "reactjs-popup";
 
export default () => (
  <Popup trigger={onclick()} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);