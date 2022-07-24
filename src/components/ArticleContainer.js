import { Component } from "react";

import "../styles/article-container.css";
import MainContent from "./MainContent";
import ArticleButton from "./ArticleButton";

export default class ArticleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="article-container">
        <h1>Image</h1>
        <h2>Header</h2>
        <h3>Subheader</h3>
        <MainContent />
        <div className="mixed-content">
          <MainContent />
          <h4>Image</h4>
          <h4>Image</h4>
          <MainContent />
        </div>
        <MainContent />
        <ArticleButton />
      </div>
    );
  }
}
