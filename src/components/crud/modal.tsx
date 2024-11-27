import React from 'react';
import { Box, Button, CircularProgress, Typography, Modal, TextField } from '@mui/material';

const ModalComponent = ({
  open,
  onClose,
  handleSubmit,
  handleDeleteConfirm,
  isCreating,
  isUpdating,
  isDeleting,
  isDelete,
  formData,
  setFormData,
}: any) => (
  <Modal open={open} onClose={onClose}>
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: '10%',
        padding: 3,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        {isDelete ? 'Are you sure you want to delete this post?' : 'Update Post'}
      </Typography>
      {!isDelete && (
        <>
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, title: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Body"
            name="body"
            value={formData.body}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, body: e.target.value })
            }
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
        </>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button variant="outlined" color="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color={isDelete ? 'error' : 'primary'}
          onClick={isDelete ? handleDeleteConfirm : handleSubmit}
          disabled={isCreating || isUpdating || isDeleting}
        >
          {isCreating || isUpdating || isDeleting ? (
            <CircularProgress size={24} />
          ) : isDelete ? (
            'Delete'
          ) : (
            'Update Post'
          )}
        </Button>
      </Box>
    </Box>
  </Modal>
);

export default ModalComponent;
