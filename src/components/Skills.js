import React, { Component } from "react";

class Skills extends Component {
  state = {};
  render() {
    return (
      <div className="skills-list">
        <ul className="custom-bullet">
          <li>JavaScript (React, Vue, Ember, Node)</li>
          <li>Apps (React Native, Cordova) </li>
          <li>GraphQL, MongoDB, MySQL</li>
        </ul>

        <ul className="custom-bullet">
          <li>HTML / CSS</li>
          <li>PHP (Laravel, Symfony, WordPress)</li>
          <li>Test-driven development (TDD)</li>
        </ul>
      </div>
    );
  }
}

export default Skills;
