import { useState } from "react"
import { Navigate } from "react-router-dom"
import { LoginForm } from "../../pages/login/Login"

export const ProtectedRoute = ({children}) => {

  const [token, setToken] = useState(localStorage.getItem("token") || null)
  
  return token ? (children) : <Navigate to={"/triumf-enter"} replace={<LoginForm />} />
}

