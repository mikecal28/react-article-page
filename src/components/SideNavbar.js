import { Component } from "react";

import NavButton from "./NavButton";
import "../styles/side-navbar.css";

export default class SideNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="side-navbar">
        <h1>Logo</h1>
        <NavButton />
        <NavButton />
        <NavButton />
        <NavButton />
        <NavButton />
        <h1>Logo</h1>
      </div>
    );
  }
}
