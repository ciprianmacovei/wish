import { component$, $, useContext } from "@builder.io/qwik";
import { DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { Button } from "~/components/buttons/button";
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
      <section class="w-full h-full flex flex-col justify-center items-center bg-[url('/images/landingpage.png')] bg-cover">
        <section class="w-[623px] h-[684px] bg-[#FFF5FA] text-black flex flex-col items-center justify-center gap-[20px]">
          <article>
            <p class="font-bold text-center text-[32px] px-4">Intra in cont</p>
          </article>
          <section class="flex flex-col gap-4">
            <article>
              <p class="font-nuito text-left text-[13px]">Adresa de email</p>
              <input
                class="min-w-[200px] md:w-[200px] lg:w-[280px] h-10 px-4 py-[6px] border-2 border-solid border-primary rounded-md focus:border-alternate focus:outline-none flex text-black"
                type="text"
              />
            </article>
            <article>
              <p class="font-nuito text-left text-[13px]">Parola</p>
              <input
                class="min-w-[200px] md:w-[200px] lg:w-[280px] h-10 px-4 py-[6px] border-2 border-solid border-primary rounded-md focus:border-alternate focus:outline-none flex text-black"
                type="text"
              />
            </article>
            <article class="flex items-center">
              <input
                type="checkbox"
                class="checked:bg-[pink] w-[15px] h-[15px] bg-white border-solid border-1 border-[#ddd]"
              />
              <p class="font-nuito ml-[4px] text-[12px]">Tine-ma minte</p>
            </article>
          </section>
          <section class="flex flex-col justify-center gap-[40px]">
            <article class="flex flex-col justify-center">
              <Button text="Autentifica-te >>" onClick={login} />
              <article class="flex items-center justify-center gap-[4px] mt-[9px]">
                <img
                  class="w-[11px] h-[11px]"
                  src="/images/smile.png"
                  alt="forghot password smile face"
                />
                <p class="text-[13px] font-nuito">Ai uitat parola?</p>
                <p class="text-[13px] font-nuito font-bold">Apasa aici</p>
              </article>
            </article>
            <p>--------------- SAU ---------------</p>
            <Button text="Creaza un cont nou >>" onClick={login} />
          </section>
        </section>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Login",
};
