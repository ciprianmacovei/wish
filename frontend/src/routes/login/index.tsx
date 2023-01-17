import { component$, $, useContext } from "@builder.io/qwik";
import { DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { userContext } from "~/context/context";

import AuthService from "~/service/auth";

export default component$(() => {
  const userState = useContext(userContext);
  const navigation = useNavigate();

  const login = $(() => {
    AuthService.login("", "", "").then(() => {
      console.log("Login successful!", userState.email);
      userState.email = "XXXX";
      navigation.path = "/";
    });
  });

  return (
    <div class="h-[100vh] w-[100vw]">
      <section class="w-full h-full flex flex-col justify-center items-center">
        <section class="w-[450px] bg-pink-500 rounded-2xl p-4 text-white flex flex-col items-center gap-4">
          <article>
            <p class="font-bold text-center text-[20px] px-4">
              Login to your account
            </p>
          </article>
          <section class="flex flex-col gap-4">
            <article>
              <p class="font-bold text-left text-[12px]">Account Name</p>
              <input
                class="min-w-[200px] md:w-[200px] lg:w-[300px] h-10 px-4 py-[6px] border-2 border-solid border-primary rounded-md focus:border-alternate focus:outline-none flex text-black"
                type="text"
              />
            </article>
            <article>
              <p class="font-bold text-left text-[12px]">Password</p>
              <input
                class="min-w-[200px] md:w-[200px] lg:w-[300px] h-10 px-4 py-[6px] border-2 border-solid border-primary rounded-md focus:border-alternate focus:outline-none flex text-black"
                type="text"
              />
            </article>
            <article>
              <p class="font-bold text-left text-[12px]">Email</p>
              <input
                class="min-w-[200px] md:w-[200px] lg:w-[300px] h-10 px-4 py-[6px] border-2 border-solid border-primary rounded-md focus:border-alternate focus:outline-none flex text-black"
                type="text"
              />
            </article>
          </section>
          <button
            onClick$={login}
            class="rounded-[50px] w-[150px] h-[40px] bg-alternate hover:scale-110 hover:border-solid hover:border-2 hover:border-grey-500 hover:font-bold duration-100"
          >
            Login
          </button>
        </section>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Login",
};
