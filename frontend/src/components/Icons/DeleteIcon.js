import React, { useState } from "react";
import { Delete } from "@styled-icons/material-sharp";
import styled from "styled-components";

import { Modal, Confirm } from "../../components";

const DeleteIconComponent = () => {
  const [isDeleteConfirm, setDeleteConfirm] = useState(false);
  return (
    <>
      <DeleteIcon size="24" onClick={() => setDeleteConfirm(true)} />
      {isDeleteConfirm ? (
        <Modal>
          <Confirm />
        </Modal>
      ) : null}
    </>
  );
};

const DeleteIcon = styled(Delete)`
  color: #212121;
  margin-right: 10px;
  cursor: pointer;
  :hover {
    color: #313030;
  }
`;

export default DeleteIconComponent;
