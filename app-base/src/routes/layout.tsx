import { component$, Slot } from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import { useLocation } from "@builder.io/qwik-city";
import { Navbar } from "~/components/navbar/navbar";

export default component$(() => {
  const location = useLocation();

  const simplePages = (): boolean => {
    return location.pathname === "/login/";
  };

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
            <section class="px-4 mt-[20vh] w-full h-full">
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
