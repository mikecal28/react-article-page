import { Component } from "react";
import "../styles/app.css";

import ArticleContainer from "./ArticleContainer";
import SideNavbar from "./SideNavbar";

export default class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <ArticleContainer />
        <SideNavbar />
      </div>
    );
  }
}
