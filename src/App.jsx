import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { Home } from "./components/home/Home";
import { Layout, ProtectedRoute, Loader } from "./components";
import { LoginForm } from "./pages/login/LoginOrg"

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
            <Route index path="lists" element={<>Hello lists</>} />
            <Route path="statistics" element={<>Hello statistics</>} />
            <Route path="archives" element={<>Hello archives</>} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
