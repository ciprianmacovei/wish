import { component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { userContext } from "~/context/context";

interface NavbarLinksProps {
  name: string;
  route: string;
}

export const Navbar = component$(() => {
  const userState = useContext(userContext);

  const NavbarLinks: NavbarLinksProps[] = [
    { name: "Home", route: "/" },
    { name: "Profile", route: "/profile/" },
    { name: "Wish", route: "/wish/" },
  ];

  return (
    <>
      <div class="w-full flex flex-row items-center top-6">
        <div class="w-1/6 flex flex-row justify-start items-center p-3 gap-3">
          <button
            id="login-button"
            class="w-auto h-auto rounded-md bg-orange-800 p-2 text-white cursor-pointer hover:scale-125 duration-100"
          >
            Login
          </button>
          <button
            id="register-button"
            class="w-auto h-auto rounded-md bg-orange-800 p-2 text-white cursor-pointer hover:scale-125 duration-100"
          >
            Register
          </button>
        </div>
        <div class="w-4/6 flex flex-row justify-around items-center">
          {NavbarLinks.map((link: NavbarLinksProps) => (
            <div class="w-20 h-10 bg-slate-500 text-white flex justify-center items-center">
              <Link href={link.route} title={link.name}>
                {link.name}
              </Link>
            </div>
          ))}
        </div>
        <div class="w-1/6 flex">
          <section>
            <article>
              {userState.email}
            </article>
          </section>
        </div>
      </div>
    </>
  );
});
