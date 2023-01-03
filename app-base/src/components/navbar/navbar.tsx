import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface NavbarLinksProps {
  name: string;
  route: string;
}

export const Navbar = component$(() => {
  const NavbarLinks: NavbarLinksProps[] = [
    { name: "Home", route: "/" },
    { name: "Profile", route: "/profile/" },
    { name: "Wish", route: "/wish/" },
  ];
  return (
    <>
      <div class="flex flex-row justify-end items-center absolute z-40 top-0 right-0 w-40">
        <div class="bg-orange-400 w-40 flex flex-row justify-start items-center p-3 gap-3">
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
      </div>
      <div class="my-nav-bar w-full flex flex-row justify-center z-10 items-center fixed top-6">
        <div class="w-4/12 flex flex-row justify-between">
          {NavbarLinks.map((link: NavbarLinksProps) => (
            <div class="w-20 h-10 bg-slate-500 text-white flex justify-center items-center">
              <Link href={link.route} title={link.name}>
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});
