import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { RiFileEditFill } from "react-icons/ri";
import Button from '@mui/material/Button';

function Edit() {
  return (
    <div>
      <Button onClick={handleOpen} className='btn text-warning fs-2 me-2'><RiFileEditFill /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}

export default Edit