import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';


const useCreateData = (url: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(url, data);
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

export default useCreateData;
