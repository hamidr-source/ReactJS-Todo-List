import React, { useState } from "react";
import "./style.css";

const ThemeChanger = () => {
  const [toggle, setToggle] = useState(false);

  if (toggle) {
    document.body.style.color = "#fff";
    document.body.style.backgroundColor = "#1e1e1f";
  } else {
    document.body.style.color = "#1e1e1f";
    document.body.style.backgroundColor = "#fff";
  }

  console.log(toggle)

  return (
    <div>
      <button
        className={toggle ? "theme dark" : "theme"}
        onClick={() => setToggle(!toggle)}
      >
        <i className={toggle ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
      </button>
    </div>
  );
};

export default ThemeChanger;
