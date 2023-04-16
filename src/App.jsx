import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import {
  Organizations,
  OrganizationsList,
  OrganizationsProfile,
  Couriers,
  CouriersProfile,
  Incomes,
  Archives,
  Admins,
  Statistics,
  LoginForm,
} from "./pages";
import { Layout, ProtectedRoute, Loader } from "./components";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            </Suspense>
          }
        >
          <Route index element={<Organizations />} />
          <Route path="organizations" element={<Organizations />} />
          <Route path="organizations/list/:id" element={<OrganizationsList />} />
          <Route path="organizations/profile/:id" element={<OrganizationsProfile />}>
            <Route path="statistika" element={<h1 className="text-red-400">Statistika malumotlari bor</h1>} />
            <Route path="xisob" element={<h1 className="text-red-400">Xisob-kitob malumotlari bor</h1>} />
            <Route path="arxiv" element={<h1 className="text-red-400">Arxiv malumotlari bor</h1>} />
          </Route>

          <Route path="couriers" element={<Couriers />} />
          <Route path="couriers/profile/:id" element={<CouriersProfile />}>
            <Route path="statistika" element={<h1 className="text-red-400">Statistika malumotlari bor</h1>} />
            <Route path="xisob" element={<h1 className="text-red-400">Xisob-kitob malumotlari bor</h1>} />
            <Route path="arxiv" element={<h1 className="text-red-400">Arxiv malumotlari bor</h1>} />
          </Route>
          <Route path="statistics" element={<Statistics />} />
          <Route path="incomes" element={<Incomes />} />
          <Route path="archive" element={<Archives />} />
          <Route path="admins" element={<Admins />} />
        </Route>
        <Route path="/triumf-enter" element={<LoginForm />} />

      </Routes>
    </QueryClientProvider>
  );
}

export default App;
