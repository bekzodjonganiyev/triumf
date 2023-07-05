import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { Home } from "./components/home/Home";
import { Layout, ProtectedRoute, Loader, ErrorPage } from "./components";
import { LoginForm, Lists, Statistics, Archive } from "./pages";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userLogin" element={<LoginForm />} />
          <Route
            path="/app"
            element={
              <Suspense fallback={<Loader />}>
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              </Suspense>
            }
          >
            <Route index path="lists" element={<Lists />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="archives" element={<Archive />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
