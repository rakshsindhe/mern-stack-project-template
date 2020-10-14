import React, { Component } from "react";
import "./AppHeader.styles.less";
import { Button } from "antd";

export class AppHeader extends Component {
  render() {
    return (
      <div>
        <div className="bold h1">MERN STACK PROJECT TEMPLATE</div>
        <Button>With Ant Design</Button>
      </div>
    );
  }
}

export default AppHeader;
