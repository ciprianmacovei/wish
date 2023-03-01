import { createContextId } from "@builder.io/qwik";

export interface UserType {
  email: string | null;
  token: string | null;
}

export interface ModalType {
  showCreateWishbox?: boolean;
  showCreateWishes?: boolean;
  loader: boolean;
}

export interface AppStateType {
  loading: boolean;
}

export const userContext = createContextId<UserType>('user-context');

export const modalsContext = createContextId<ModalType>('modal-context');

export const applicationContext = createContextId<AppStateType>('application-context');