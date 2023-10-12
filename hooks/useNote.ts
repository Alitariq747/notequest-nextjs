import useSWR from "swr";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export function useNote(id: string | string[]) {
  const { data, error } = useSWR(`/api/note/${id}`, fetcher);

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}
