import { createContext } from "@builder.io/qwik";

export interface UserType {
  username: string | null;
  email: string | null;
  token: string | null;
}

export const userContext = createContext<UserType>('user-context');