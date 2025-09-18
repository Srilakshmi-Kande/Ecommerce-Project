import { createContext, useContext, useReducer } from "react";
import { LoginReducer } from "../reducers/LoginReducer";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    token: "",
  };

  const [{ name, email, password, token }, loginDispatch] = useReducer(
    LoginReducer,
    initialState
  );

  return (
    <LoginContext.Provider value={{ name, email, password, token, loginDispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => useContext(LoginContext);

export { LoginProvider, useLogin };
