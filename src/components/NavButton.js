import { Component } from "react";

import "../styles/nav-button.css";

export default class NavButton extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="nav-button">
        <button>Button</button>
      </div>
    );
  }
}
