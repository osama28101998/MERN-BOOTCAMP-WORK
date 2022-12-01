import React, { Component } from "react";

export default class Classcall extends Component {
  render() {
    // console.log(this.props);
    const { name: coolness } = this.props;
    return <div>{coolness}</div>;
  }
}
