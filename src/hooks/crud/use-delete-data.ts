import { useMutation, useQueryClient } from '@tanstack/react-query';

const useDeleteData = (url: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Failed to delete resource: ${response.statusText}`);
      }

      if (response.status === 204) {
        return null;
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};

export default useDeleteData;
