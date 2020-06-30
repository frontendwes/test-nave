import { Close } from "@styled-icons/material-sharp";
import styled from "styled-components";

const CloseIconComponent = styled(Close)`
  color: #212121;
  cursor: pointer;
  top: 29px;
  right: 29px;
  :hover {
    color: #313030;
  }

  position: absolute;
`;

export default CloseIconComponent;
