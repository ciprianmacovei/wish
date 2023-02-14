import {
  component$,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import { useLocation } from "@builder.io/qwik-city";
import { Navbar } from "~/components/navbar/navbar";
import {
  UserType,
  ModalType,
  userContext,
  modalsContext,
} from "~/context/context";

export default component$(() => {
  const location = useLocation();

  const userSatate = useStore<UserType>({
    email: null,
    token: null,
  });

  const modalsState = useStore<ModalType>({
    showCreateWishbox: false,
    showCreateWishes: false,
    loader: false,
  });

  const simplePages = (): boolean => {
    return (
      location.pathname === "/login/" || location.pathname.includes("/register/")
    );
  };

  useContextProvider(userContext, userSatate);
  useContextProvider(modalsContext, modalsState);

  return (
    <>
      <div class="bg-[#000000] border-red-500 bg-gray-400 w-[280px] underline hidden"></div>
      {simplePages() ? (
        <>
          <main>
            <section>
              <Slot />
            </section>
          </main>
          <footer></footer>
        </>
      ) : (
        <>
          <main>
            <Navbar />
            <section class="mt-[20vh] w-full max-sm:h-full max-sm:px-0 min-h-[100vh]">
              <Slot />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </>
  );
});
