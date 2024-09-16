import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Hadith from "../components/Hadith";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Disable refetching on window focus globally
    },
  },
});

export default function QueryProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <Hadith />
    </QueryClientProvider>
  );
}
