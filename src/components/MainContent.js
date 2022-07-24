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
        <h1>Main Content</h1>
      </div>
    );
  }
}
