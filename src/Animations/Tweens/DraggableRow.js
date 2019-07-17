import React, { Component } from "react";
import { Draggable } from "gsap/Draggable";
import { TweenMax } from "gsap/TweenMax";
import styled from "styled-components";

import "../../greensock/ThrowPropsPlugin";

class DraggableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: 0,
    };

    this.draggableElement = null;

    this.setDraggableElement = element => {
      this.draggableElement = element;
    };
  }

  componentDidMount() {
    const { numberOfCards } = this.props;
    const width = window.innerWidth;
    const setDraggable = Math.round((numberOfCards / 2) * width);

    this.setState({
      screenWidth: width,
    });

    console.log(`setDraggable: ${this.draggableElement.clientWidth}`);

    TweenMax.set(this.draggableElement, {
      x: -960,
    });

    Draggable.create(this.draggableElement, {
      type: "x",
      throwProps: true,
      bounds: window,
      cursor: "grab",
      activeCursor: "grabbing",
      dragResistance: 0.5,
      edgeResistance: 0.6,
      snap: this.snapX,
    });
  }

  snapX = endValue => {
    const snapValue = Math.round(endValue / 338) * 338;
    console.log(`endValue: ${endValue}`);
    //const activeCard = snapValue / this.state.screenWidth;
    return snapValue;
  };

  render() {
    return (
      <DraggableContainer ref={this.setDraggableElement}>
        {this.props.children}
      </DraggableContainer>
    );
  }
}

export default DraggableRow;

const DraggableContainer = styled.div`
  margin: 60px 0 0 0;
  display: flex;
`;
