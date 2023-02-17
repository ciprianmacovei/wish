import { component$, useClientEffect$, useStore, $ } from "@builder.io/qwik";
import { DocumentHead, useLocation, useNavigate } from "@builder.io/qwik-city";
import { Button } from "~/components/buttons/button";
import AuthService from "~/service/auth";

export default component$(() => {
  const registrationConfirmState = useStore({
    status: 200,
  });
  const location = useLocation();
  const nagivation = useNavigate();

  const moveToLogin = $(() => {
    nagivation("/login/");
  });

  useClientEffect$(
    async () => {
      try {
        await AuthService.registerConfirmed(location.params.token);
        registrationConfirmState.status = 200;
      } catch (err) {
        registrationConfirmState.status = 400;
      }
    },
    { eagerness: "visible" }
  );

  return (
    <>
      {registrationConfirmState.status === 200 && (
        <section class="bg-[url('/images/landingpage.png')] bg-cover w-[100vw] h-[100vh] flex flex-col justify-center items-center">
          <article class="flex flex-col justify-center items-center h-1/3 w-1/3">
            <p class="text-[31px]">Inregistrare cu success</p>
            <img
              src="/images/rightsidelastsection.png"
              alt="Registration success"
            />
            <Button text="Intra in cont" onClick={moveToLogin} />
          </article>
        </section>
      )}
      {registrationConfirmState.status === 400 && (
        <section class="bg-[url('/images/landingpage.png')] bg-cover w-[100vw] h-[100vh] flex flex-col justify-center items-center">
          <article class="flex flex-col justify-center items-center h-1/3 w-1/3">
            <p class="text-[31px]">Erroare</p>
            <img
              src="/images/rightsidelastsection.png"
              alt="Registration error"
            />
            <p class="text-[20px]">
              Va rugam sa reincarcati pagina, daca acest lucru nu ajuta, va rugam
              sa ne contactati
            </p>
            <a class="text-blue-400 underline" href="mailto:macoveiciprian91@gmail.com" target="_blank">Trimite un email</a>
          </article>
        </section>
      )}
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Wisher Confirm Registration",
  meta: [
    {
      name: "description",
      content: "This page is used for users to confirm their registration",
    },
  ],
};
