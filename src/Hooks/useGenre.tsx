import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
  background_image: string;
}
interface FetchGenreResponse {
  count: number;
  results: Genre[];
}
const useGame = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return null;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGame;
