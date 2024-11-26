import axios from "axios";
import { useState } from "react";


interface UseCreateResourceState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useCreateResource = <T,>(url: string) =>  {
    const [state, setState] = useState<UseCreateResourceState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const createResource = async (payload: Record<string, any>) => {
    setState({ ...state, loading: true, error: null });

     try {
       const response = await axios.post<T>(url, payload);
       setState({ data: response.data, loading: false, error: null });
     } catch (err) {
       setState({
         data: null,
         loading: false,
         error: err instanceof Error ? err.message : 'Unknown error',
       });
     }
  }
 return { ...state, createResource };

}

export default useCreateResource;