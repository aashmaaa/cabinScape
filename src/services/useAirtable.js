import { useQuery } from "@tanstack/react-query";
import { airData } from "./apiAirtable";

export function useAirtable() {
  const {
    isLoading,
    data: airTable,
    error,
  } = useQuery({
    queryKey: ["airTable"],
    queryFn: airData,
  });

  return { isLoading, airTable, error };
}
