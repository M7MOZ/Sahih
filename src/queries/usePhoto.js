import { useQuery } from "@tanstack/react-query";
import { getPhoto } from "../services/getPhoto";

export function usePhoto() {
  return useQuery({
    queryKey: ["photo"],
    queryFn: getPhoto,
  });
}
