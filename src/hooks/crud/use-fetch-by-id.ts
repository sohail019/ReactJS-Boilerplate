import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchById = <T>(url: string, id: number | string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/${id}`); 
        setData(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, id]);

  return { data, loading, error };
};

export default useFetchById;
