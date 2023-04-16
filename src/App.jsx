import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import {
  Organizations,
  Couriers,
  Incomes,
  Archives,
  Admins,
  Statistics,
  LoginForm
} from "./pages";
import { Layout, ProtectedRoute } from "./components";


function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading</h1>}>
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            </Suspense>
          }
        >
          <Route index element={<Organizations />} />
          <Route path="/couriers" element={<Couriers />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/incomes" element={<Incomes />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/admins" element={<Admins />} />
        </Route>
        <Route path="/triumf-enter" element={<LoginForm />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
