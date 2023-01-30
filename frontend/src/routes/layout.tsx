import {
  component$,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import { useLocation } from "@builder.io/qwik-city";
import { Navbar } from "~/components/navbar/navbar";
import { UserType, userContext } from "~/context/context";

export default component$(() => {
  const location = useLocation();

  const userSatate = useStore<UserType>({
    email: null,
    token: null,
    username: null,
  });

  const simplePages = (): boolean => {
    return (
      location.pathname === "/login/" || location.pathname === "/register/"
    );
  };

  useContextProvider(userContext, userSatate);
  return (
    <>
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
