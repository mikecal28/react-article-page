import { Component } from "react";

import "../styles/main-content.css";

export default class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="main-content">
        <h4>Main Content</h4>
      </div>
    );
  }
}
