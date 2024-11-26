import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useFetchData = (url: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [url], 
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data;
    },
    staleTime: 5 * 60 * 1000, //? Cache for 5 minutes
    retry: 3, 
  });

  return { data, isLoading, isError, error };
};

export default useFetchData;
