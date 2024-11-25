import axios from "axios"
import { useEffect, useState } from "react"

const useFetchList = <T>(url: string) => {
    const [data, setData] = useState<T[] | null>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async() => {
            try {
              const response = await axios.get(url);
              setData(response.data);
            } catch (err) {
              setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
              setLoading(false);
            }
        }

        fetchData()
    }, [url])

    return { data, loading, error };
}

export default useFetchList;
