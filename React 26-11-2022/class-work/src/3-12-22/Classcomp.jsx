import React, { Component } from "react";

class Classcomp extends Component {
  state = {
    count: 0,
  };
  handleclick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  getCount() {
    const { count } = this.state;

    return count == 0 ? "Zero" : count;
  }

  getclass() {
    const { count } = this.state;

    return this.state.count == 0
      ? "badge m-2 bg-warning"
      : "badge m-2 bg-success";
  }
  render() {
    return (
      <div>
        <span className={this.getclass()}>{this.getCount()}</span>

        <button className="btn btn-primary" onClick={this.handleclick}>
          Increment
        </button>
      </div>
    );
  }
}

export default Classcomp;
