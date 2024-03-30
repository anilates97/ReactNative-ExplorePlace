import { createContext, useContext } from "react";

interface ContextType {
  location: any;
  setLocation: React.Dispatch<React.SetStateAction<any>>;
}

const defaultLocation: any = null;

const UserLocationContext = createContext<ContextType | undefined>(undefined);

const useLocation = () => {
  const context = useContext(UserLocationContext);
  if (!context) {
    throw new Error("useLocation hook must be used within a Provider");
  }
  return context;
};

export { UserLocationContext, useLocation };
