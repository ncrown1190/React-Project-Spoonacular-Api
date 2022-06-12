import React from "react";
import "./Subscribe.css";

export default function Subscribe() {
  return (
    <div className="subscribeContainer">
      <h3 className="subscribeText">Email us to get the latest recipes</h3>

      <form className="subscribeForm">
        <input type="text" id="emailInput" placeholder="  Email" />
        <button className="subscribeBtn">Submit</button>
      </form>
    </div>
  );
}
