import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useMovieList = () => {
  const { data, isLoading, error } = useSWR("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    isLoading,
    error,
  };
};

export default useMovieList;
