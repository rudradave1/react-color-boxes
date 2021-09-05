import React, { Component } from "react";
import { colors } from "./colors";
import Box from "./Box";
import "./BoxContainer.css";

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 100
  };

  render() {
    return (
      <div className="BoxContainer">
        {Array.from({ length: this.props.numBoxes }).map(() => (
          <Box colors={colors} />
        ))}
      </div>
    );
  }
}

export default BoxContainer;
