import { component$, $, useContext, useStyles$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { Button } from "../buttons/button";
import { userContext } from "~/context/context";
import styles from "./navbar.css?inline";

interface NavbarLinksProps {
  name: string;
  route: string;
}

export const Navbar = component$(() => {
  useStyles$(styles);
  const userState = useContext(userContext);
  const navigation = useNavigate();

  const NavbarLinks: NavbarLinksProps[] = [
    { name: "Home", route: "/" },
    { name: "MyWishbox", route: "/wish/" },
  ];

  const goToRegisterOrLogin = $(() => {
    navigation("/login/");
  });

  const showUserPanel = $(() => {
    document.querySelector(".user-panel")?.classList.remove("invisible");
  });

  const hideUserPanel = $(() => {
    document.querySelector(".user-panel")?.classList.add("invisible");
  });

  const logOutUser = $(() => {
    userState.email = null;
    userState.token = null;
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("token");
    navigation("/");
  });

  return (
    <>
      <section class="h-[20vh] invisible"></section>
      <section class="w-full flex flex-row items-center p-4 fixed top-0 bg-white">
        <article class="max-w-[225.62px] max-h-[46.71px]">
          <img src="/images/logo.png" alt="logo" />
        </article>
        <article class="w-full flex flex-row items-center justify-center gap-10 max-md:hidden">
          {userState.email &&
            NavbarLinks.map((link: NavbarLinksProps) => (
              <div class="text-black h-[53px] w-[150px] px-4 py-2 flex justify-center items-center hover:bg-[#FE98CF]/40 hover:rounded-2xl hover:border-solid hover:border-[2px] hover:border-black duration-100">
                <Link href={link.route} title={link.name}>
                  <span class="text-[22px]">{link.name}</span>
                </Link>
              </div>
            ))}
        </article>
        {userState.email ? (
          <section class="min-w-[250px]">
            <article
              class="flex flex-col gap-2 w-full justify-center items-center cursor-pointer"
              onMouseEnter$={showUserPanel}
              onMouseLeave$={hideUserPanel}
            >
              <section class="flex gap-2 justify-center items-center">
                <article class="w-5 h-5 flex items-center justify-center mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                </article>
                <p class="text-[22px] overflow-ellipsis overflow-hidden">
                  {userState.email.split("@")[0]}
                </p>
              </section>
              <section class="user-panel invisible absolute top-[55px] min-w-[255px] duration-100">
                <article class="flex gap-2 hover:font-bold">
                  <article class="w-5 h-5 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                    </svg>
                  </article>
                  <p>Profile</p>
                </article>
                <article class="flex gap-2 hover:font-bold">
                  <article class="w-5 h-5 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </article>
                  <p>Completed Wishboxes</p>
                </article>
                <article
                  class="flex gap-2 hover:font-bold"
                  onClick$={logOutUser}
                >
                  <article class="w-5 h-5 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                    </svg>
                  </article>
                  <p>Log Out</p>
                </article>
              </section>
            </article>
          </section>
        ) : (
          <article class="ml-auto w-[320px]">
            <Button
              background="#FEDEEF"
              color="black"
              text="Autentifică-te sau înregistrează-te"
              w="320px"
              onClick={goToRegisterOrLogin}
            />
          </article>
        )}
      </section>
    </>
  );
});
