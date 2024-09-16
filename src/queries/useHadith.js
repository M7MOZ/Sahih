import { useQuery } from "@tanstack/react-query";
import { getHadith } from "../services/getHadith";

export function useHadith( book ) {
  return useQuery({
    queryKey: ["hadith"],
    queryFn: () => getHadith( book ),
  });
}
