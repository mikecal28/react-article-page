import { Component } from "react";

import "../styles/article-container.css";
import MainContent from "./MainContent";
import ArticleButton from "./ArticleButton";
import SocialLinks from "./SocialLinks";
import Copyright from "./Copyright";

export default class ArticleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="article-container">
        <div className="hero-wrapper">
          <h1>Image</h1>
          <h2>Header</h2>
          <h3>Subheader</h3>
        </div>
        <div className="main-content-wrapper">
          <MainContent />
        </div>
        <div className="mixed-content">
          <MainContent />
          <h4>Image</h4>
          <h4>Image</h4>
          <MainContent />
        </div>
        <div className="main-content-wrapper">
          <MainContent />
        </div>
        <ArticleButton />
        <div className="socials-wrapper">
          <SocialLinks />
        </div>
        <Copyright />
      </div>
    );
  }
}
