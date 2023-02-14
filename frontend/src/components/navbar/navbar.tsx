import { component$, $, useContext } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { Button } from "../buttons/button";
import { userContext } from "~/context/context";

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
    navigation("/login/");
  });

  return (
    <>
      <section class="w-full flex flex-row items-center p-4 fixed top-0">
        <article class="max-w-[225.62px] max-h-[46.71px]">
          <img src="/images/logo.png" alt="logo" />
        </article>
        <article class="w-full flex flex-row items-center justify-center gap-2 max-md:hidden">
          {userState.email &&
            NavbarLinks.map((link: NavbarLinksProps) => (
              <div class="w-20 h-10 bg-slate-500 text-white flex justify-center items-center">
                <Link href={link.route} title={link.name}>
                  {link.name}
                </Link>
              </div>
            ))}
        </article>
        {userState.email ? (
          "userLogedIn"
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
