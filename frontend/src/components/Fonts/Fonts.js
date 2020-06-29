import React from "react";
import styled from "styled-components";

const LARGE = "large";
const MEDIUM = "medium";
const SMALL = "small";

const FontComponent = ({ ...props }) => {
  return <Font {...props}></Font>;
};

const Font = styled.p`
  display: flex;
  align-items: center;
  color: black;

  font-size: ${({ fontSize }) => {
    switch (fontSize) {
      case LARGE:
        return "24px";
      case MEDIUM:
        return "16px";
      case SMALL:
        return "14px";
      default:
    }
  }};

  font-weight: ${({ fontWeight }) => {
    switch (fontWeight) {
      case LARGE:
        return "600";
      case MEDIUM:
        return "400";
      case SMALL:
        return "300";
      default:
    }
  }};

  line-height: ${({ lineHeight }) => {
    switch (lineHeight) {
      case LARGE:
        return "36px";
      case MEDIUM:
        return "24px";
      case SMALL:
        return "18px";
      default:
    }
  }};
`;

export default FontComponent;
