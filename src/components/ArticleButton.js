import { Component } from "react";

import "../styles/article-button.css";

export default class ArticleButton extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="article-button">
        <button>Button</button>
      </div>
    );
  }
}
