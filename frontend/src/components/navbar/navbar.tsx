import { component$, useContext, $ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { userContext } from "~/context/context";
import { Button } from "../buttons/button";

interface NavbarLinksProps {
  name: string;
  route: string;
}

export const Navbar = component$(() => {
  const userState = useContext(userContext);
  const navigation = useNavigate();

  const NavbarLinks: NavbarLinksProps[] = [
    { name: "Home", route: "/" },
    { name: "Profile", route: "/profile/" },
    { name: "Wish", route: "/wish/" },
  ];

  const goToRegisterOrLogin = $(() => {
    navigation.path = "/login/"
  })

  return (
    <>
      <section class="w-full flex flex-row items-center p-4 fixed top-0">
        <article class="max-w-[225.62px] max-h-[46.71px]">
          <img src="/images/logo.png" alt="logo" />
        </article>
        <article class="w-full flex flex-row items-center justify-center gap-2 max-md:hidden">
          {NavbarLinks.map((link: NavbarLinksProps) => (
            <div class="w-20 h-10 bg-slate-500 text-white flex justify-center items-center">
              <Link href={link.route} title={link.name}>
                {link.name}
              </Link>
            </div>
          ))}
        </article>
        <article class="ml-auto w-[320px]">
          <Button background="#FEDEEF" color="black" text="Autentifică-te sau înregistrează-te" w="320px" onClick={goToRegisterOrLogin} />
          {/* <button
            onClick$={() => (navigation.path = "/login/")}
            class="leading-4 text-[12px] decoration-black bg-[#FEDEEF] rounded-[32px] px-[12px] py-[24px] w-[261px] h-[44px] flex flex-row items-center justify-center gap-1 hover:border-solid hover:border-black hover:border-[2px] hover:font-bold duration-100"
          >
            <img
              class="w-[16px] h-[16px]"
              src="/images/register.png"
              alt="register image"
            />
            Autentifică-te sau înregistrează-te
          </button> */}
        </article>
      </section>
    </>
  );
});
