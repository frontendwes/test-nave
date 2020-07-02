import React, { useState } from "react";
import { Delete } from "@styled-icons/material-sharp";
import styled from "styled-components";

import { Modal, Confirm } from "../../components";

const DeleteIconComponent = ({ naverId }) => {
  const [isDeleteConfirm, setDeleteConfirm] = useState("");
  return (
    <>
      <DeleteIcon size="24" onClick={() => setDeleteConfirm(naverId)} />
      {isDeleteConfirm && (
        <Modal>
          <Confirm naverId={naverId} />
        </Modal>
      )}
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
