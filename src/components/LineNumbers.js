import React, { Component } from "react";

class LineNumbers extends Component {
  state = {};
  render() {
    const nums = Array.from(new Array(38), (x, i) => i + 1).splice(24);
    return (
      <ul
        className="lines"
        style={{
          listStyleType: "none",
          width: "30px",
          maxWidth: "30px",
          fontFamily: "'Roboto', sans-serif",
          textAlign: "right",
          backgroundColor: "rgb(245, 245, 245)",
          paddingRight: "7px",
          fontSize: "0.7em",
          color: "rgba(71, 71, 71,.2)",
          position: "absolute",
          left: -70,
          top: -10,
          margin: 0,
          paddingLeft: 0
        }}
      >
        {nums.map(i => {
          return (
            <li key={i} style={{ marginBottom: 0 }}>
              {i}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default LineNumbers;
