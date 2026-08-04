"use client";

import store from "@/lib/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Toaster richColors position="top-right" />
        {children}
      </Provider>
    </QueryClientProvider>
  );
};

export default ReduxProvider;
