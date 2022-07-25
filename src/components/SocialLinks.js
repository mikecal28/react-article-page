import { Component } from "react";

import "../styles/social-links.css";

export default class SocialLinks extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="social-links">
        <div>Icon</div>
        <div>Icon</div>
        <div>Icon</div>
      </div>
    );
  }
}
