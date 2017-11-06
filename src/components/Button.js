import React, { Component } from "react";

class StyledButton extends Component {
  state = {};
  render() {
    return (
      <div>
        <a
          style={{
            backgroundColor: "#5fceb1",
            textDecoration: "none",
            color: "#fff",
            borderRadius: "2px",
            padding: "12px 20px",
            marginLeft: "50px",
            lineHeight: "12px",
            display: "inline-block",
            verticalAlign: "text-top",
            fontFamily: "'Roboto', sans-serif",
            fontSize: "0.8em"
          }}
          {...this.props}
        >
          {this.props.children}
        </a>
      </div>
    );
  }
}

export default StyledButton;
