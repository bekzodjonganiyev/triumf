import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { LoginForm } from "./components/login_form/LoginForm";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
