import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "././Pages/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
