"use client";
import React, { createContext, useContext } from "react";
import Body from "./components/Body";
import Subnav from "./components/Subnav";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Loading from "./components/Loading";

/**
 * Initializes a React Query client and wraps the application in a QueryClientProvider.
 * The QueryClientProvider makes the query client available throughout the component tree.
 *
 * @returns {JSX.Element} - The main App component wrapped with React Query client provider.
 */
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

/**
 * Home component that handles fetching data from an API and rendering the main layout.
 * It uses the `useQuery` hook from React Query to fetch data from the API and used as a prop to send data to child components.
 *
 * @returns {JSX.Element} - The main layout of the home page, including a subnavigation and body title section.
 */

export const Bodydata = createContext();
export function Home() {
  // Fetch data using React Query's useQuery hook
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"], // Key to uniquely identify the query
    queryFn: () => fetch("/api/fetch-form").then((res) => res.json()), // API call to fetch data
  });
  return (
    <div className="flex flex-col gap-4">
      <Subnav />
      <section className={`xl:p-2 xl:px-28 `}>
        {isPending ? (
          <Loading />
        ) : (
          data && (
            <Bodydata.Provider value={data}>
              <Body />
            </Bodydata.Provider>
          )
        )}
      </section>
    </div>
  );
}
