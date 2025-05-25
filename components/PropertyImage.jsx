'use client'
import { useState } from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';

const PropertyImage = ({ src }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <img
        src={src}
        alt="Property"
        onClick={() => setOpen(true)}
        className="cursor-pointer max-w-full rounded-md"
      />

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backdropFilter: 'blur(4px)',
        }}
      >
        <ModalDialog
          layout="fullscreen"
          variant="plain"
          sx={{
            p: 0,
            bgcolor: 'black',
            boxShadow: 'none',
          }}
        >
          <ModalClose sx={{ color: 'white', zIndex: 10 }} variant="soft" />
          <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={src}
              alt="Property Zoom"
              style={{
                width: '95%',
                height: '95%',
                objectFit: 'contain',
              }}
            />
          </div>
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default PropertyImage;
