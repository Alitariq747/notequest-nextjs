import useSWR from "swr";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export function useNotes() {
  const { data, error } = useSWR("/api/notes", fetcher);

  return {
    notes: data,
    isLoading: !data && !error,
    isError: error,
  };
}
