import { createContext } from "@builder.io/qwik";

export interface UserType {
  email: string | null;
  token: string | null;
}

export interface ModalType {
  showCreateWishbox?: boolean;
  showCreateWishes?: boolean;
  loader: boolean;
}

export const userContext = createContext<UserType>('user-context');

export const modalsContext = createContext<ModalType>('modal-context');