import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import {
  Organizations,
  Couriers,
  Incomes,
  Archives,
  Admins,
  Statistics,
} from "./pages";
import { Layout } from "./components";

function App() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get("https://api.github.com/repos/tannerlinsley/react-query")
        .then((res) => res.data),
  });
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      {/* <h1>{data.name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{" "}
        <strong>✨ {data.stargazers_count}</strong>{" "}
        <strong onClick={() => setA(true)}>🍴 {data.forks_count}</strong>
        <div>{isFetching ? "Updating..." : ""}</div> */}

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading</h1>}>
              <Layout />
            </Suspense>
          }
        >
          <Route index path="/organizations" element={<Organizations />} />
          <Route path="/couriers" element={<Couriers />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/incomes" element={<Incomes />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/admins" element={<Admins />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
