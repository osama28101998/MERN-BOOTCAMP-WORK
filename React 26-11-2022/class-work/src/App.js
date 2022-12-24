import React from "react";
import Approute from "./11-12-2022/routes";
import Post from "./17-12-22/post";
import { QueryClient, QueryClientProvider } from "react-query";

const queryclient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <Approute />
    </QueryClientProvider>
  );
}

export default App;
