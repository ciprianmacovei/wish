import {
  component$,
  Slot,
  useVisibleTask$,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Footer } from "~/components/footer/footer";
import { Loading } from "~/components/loading/loading";
import { Navbar } from "~/components/navbar/navbar";
import {
  UserType,
  ModalType,
  userContext,
  modalsContext,
  AppStateType,
  applicationContext,
} from "~/context/context";

export default component$(() => {
  const location = useLocation();
  const singlePages =
    location.url.pathname === "/login/" ||
    location.url.pathname.includes("/register/");
  const applicationState = useStore<AppStateType>({
    loading: false,
  });
  const userState = useStore<UserType>({
    email: null,
    token: null,
  });
  const modalsState = useStore<ModalType>({
    showCreateWishbox: false,
    showCreateWishes: false,
    showPrivateWishesChoice: false,
    loader: false,
  });

  useVisibleTask$(
    () => {
      const sessionToken = sessionStorage.getItem("token");
      const localStorageToken = localStorage.getItem("token");
      const sessionEmail = sessionStorage.getItem("email");
      const localStorageEmail = localStorage.getItem("email");
      const token = sessionToken ?? localStorageToken ?? null;
      const email = sessionEmail ?? localStorageEmail ?? null;
      userState.email = email;
      userState.token = token;
    },
    { strategy: "document-ready" }
  );

  useContextProvider(userContext, userState);
  useContextProvider(modalsContext, modalsState);
  useContextProvider(applicationContext, applicationState);

  return (
    <>
      <div class="bg-[#000000] border-red-500 bg-gray-400 w-[280px] underline hidden h-[30px] py-[0.8em] py-[0.4em] py-[0.2em] px-[2em] px-[1em] px-[0.5em]"></div>
      <main>
        {!singlePages && <Navbar />}
        <section class="w-full max-sm:h-full max-sm:px-0 min-h-[100vh]">
          <Slot />
        </section>
        <Loading />
      </main>
      {!singlePages && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
});
