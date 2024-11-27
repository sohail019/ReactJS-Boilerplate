import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import useCreateData from '../../hooks/crud/use-create-data';
import useUpdateData from '../../hooks/crud/use-update-data';
import useDeleteData from '../../hooks/crud/use-delete-data';
import PostForm from '../../components/crud/post-form';
import PostItem from '../../components/crud/post-item';
import ModalComponent from '../../components/crud/modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CRUDPage = () => {
  const url = '/api/posts';

  const {
    mutate: createMutate,
    isLoading: isCreating,
  } = useCreateData(url);

  const {
    mutate: updateMutate,
    isLoading: isUpdating,
  } = useUpdateData(url);

  const {
    mutate: deleteMutate,
    isLoading: isDeleting,
  } = useDeleteData(url);

  const [formData, setFormData] = useState({ title: '', body: '' });
  const [posts, setPosts] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [currentPostId, setCurrentPostId] = useState<string>('');

  const handleSubmit = () => {
    if (currentPostId) {
      updateMutate(
        { id: currentPostId, data: formData },
        {
          onSuccess: data => {
            setPosts(posts.map(post => (post.id === currentPostId ? data.post : post)));
            setOpenModal(false);
            setFormData({ title: '', body: '' });
            toast.success('Post updated successfully!');
          },
          onError: (error: any) => {
            toast.error(error.message || 'Failed to update the post.');
          },
        },
      );
    } else {
      createMutate(formData, {
        onSuccess: data => {
          setPosts(prev => [...prev, data.post]);
          toast.success('Post created successfully!');
        },
        onError: (error: any) => {
          toast.error(error.message || 'Failed to create the post.');
        },
      });
    }
  };

  const handleUpdateClick = (postId: string) => {
    const postToUpdate = posts.find(post => post.id === postId);
    if (postToUpdate) {
      setFormData({ title: postToUpdate.title, body: postToUpdate.body });
      setCurrentPostId(postId);
      setOpenModal(true);
    }
  };

  const handleDeleteClick = (postId: string) => {
    setCurrentPostId(postId);
    setOpenDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    deleteMutate(currentPostId, {
      onSuccess: () => {
        setPosts(posts.filter(post => post.id !== currentPostId));
        setOpenDeleteModal(false);
        setCurrentPostId('');
        toast.success('Post deleted successfully!');
      },
      onError: (error: any) => {
        toast.error(error.message || 'Failed to delete the post.');
      },
    });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setFormData({ title: '', body: '' });
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    setCurrentPostId('');
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h5">CRUD Operations with custom hooks</Typography>
      <PostForm
        formData={formData}
        setFormData={setFormData}
        isCreating={isCreating}
        isUpdating={isUpdating}
        handleSubmit={handleSubmit}
      />
      {posts.map(post => (
        <PostItem
          key={post.id}
          post={post}
          handleUpdateClick={handleUpdateClick}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
      <ModalComponent
        open={openModal}
        onClose={handleCloseModal}
        handleSubmit={handleSubmit}
        isCreating={isCreating}
        isUpdating={isUpdating}
        formData={formData}
        setFormData={setFormData}
      />
      <ModalComponent
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        handleDeleteConfirm={handleDeleteConfirm}
        isDeleting={isDeleting}
        isDelete={true}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
      />
    </Box>
  );
};

export default CRUDPage;
