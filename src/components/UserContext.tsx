import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { User, initialUserState } from "./User"; // import the User type

type Action =
  | { type: "SET_USER"; payload: User }
  | { type: "UPDATE_USER"; payload: Partial<User> }
  | { type: "RESET_USER" };

const userReducer = (state: User, action: Action): User => {
  switch (action.type) {
    case "SET_USER":
      return { ...action.payload };
    case "UPDATE_USER":
      return { ...state, ...action.payload };
    case "RESET_USER":
      return initialUserState;
    default:
      return state;
  }
};

interface UserContextType {
  state: User;
  dispatch: React.Dispatch<Action>;
}

const UserContext = createContext<UserContextType>({
  state: initialUserState,
  dispatch: () => null,
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
