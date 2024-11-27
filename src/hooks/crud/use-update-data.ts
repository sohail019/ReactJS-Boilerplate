//@ts-nocheck
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

interface UpdateDataVariables {
  id: string;
  data: any;
}

const useUpdateData = (url: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: UpdateDataVariables) => {
      const response = await axios.put(`${url}/${id}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (error: any) => {
      console.error('Error creating data:', error.response?.data || error.message);
    },
  });
};

export default useUpdateData;
