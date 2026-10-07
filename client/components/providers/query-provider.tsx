"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Children, useState } from "react";

const QueryProvider = ({children}:{children: React.ReactNode}) => {
  const [query, setQuery] = React.useState(() => new QueryClient());
  return <QueryClientProvider client={query}>{children}</QueryClientProvider>;
};

export default QueryProvider;
