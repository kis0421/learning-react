import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Main from "./pages/Main";
import Footer from "./components/Footer";

interface Props {
  name: string;
}
const queryClient = new QueryClient();

export default (props: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main name={props.name} />
      <Footer />
    </QueryClientProvider>
  );
};
