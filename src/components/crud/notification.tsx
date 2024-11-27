import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = ({
  isCreateSuccess,
  isUpdateSuccess,
  isDeleteSuccess,
  isError,
  createMessage,
  updateMessage,
  deleteMessage,
  errorMessage,
}: any) => {
  useEffect(() => {
    if (isCreateSuccess && createMessage) {
      toast.success(createMessage);
    }
    if (isUpdateSuccess && updateMessage) {
      toast.info(updateMessage);
    }
    if (isDeleteSuccess && deleteMessage) {
      toast.error(deleteMessage);
    }
    if (isError && errorMessage) {
      toast.error(errorMessage);
    }
  }, [
    isCreateSuccess,
    isUpdateSuccess,
    isDeleteSuccess,
    isError,
    createMessage,
    updateMessage,
    deleteMessage,
    errorMessage,
  ]);

  return null;
};

export default Notification;
