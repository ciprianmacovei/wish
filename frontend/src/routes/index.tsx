import { component$, useClientEffect$, useContext, $ } from "@builder.io/qwik";
import { DocumentHead, useNavigate } from "@builder.io/qwik-city";

import { Button } from "~/components/buttons/button";
import { userContext } from "~/context/context";

export default component$(() => {
  const userState = useContext(userContext);
  const nagivation = useNavigate()

  useClientEffect$(
    () => {
      const sessionToken = sessionStorage.getItem("token");
      const localStorageToken = localStorage.getItem("token");
      const sessionEmail = sessionStorage.getItem("email");
      const localStorageEmail = localStorage.getItem("email");
      const token = sessionToken || localStorageToken || null;
      const email = sessionEmail || localStorageEmail || null;
      userState.email = email;
      userState.token = token;
    },
    { eagerness: "visible" }
  );

  const createWishbox = $(() => {
    if (userState.email && userState.token) { 
      nagivation('/wishbox/')
    } else {
      nagivation('/login/');
    }
  })

  return (
    <div class="flex flex-col max-sm:px-2 max-sm:gap-5">
      <section class="bg-[url('/images/landingpage.png')] bg-cover flex">
        <section class="w-1/2 max-sm:w-full flex justify-center items-center">
          <article class="flex flex-col w-8/12 gap-[30px]">
            <h1 class="text-[40px]">
              TRANSFORMĂ-ȚI DORINȚELE ÎN CADOURI PERFECTE CU
              <img src="/images/logo.png" class="w-[225px] h-[46px]" />
            </h1>
            <p class="text-[14px] lending-4 font-nuito">
              Creaza o lista cu dorintele tale si impartasasete-o cu prietenii
              si familia, astfel incat sa poata vedea ce produse v-ar fi de
              folos si sa va poata alege cadoul perfect.
            </p>
            <Button text="Crează lista ta de dorinte >>" onClick={createWishbox}/>
          </article>
        </section>
        <section class="w-1/2 max-sm:w-full justify-center flex">
          <article class="w-8/12">
            <img
              src="/images/rightpicturelanding.png"
              alt="wishbox love and carring"
            />
          </article>
        </section>
      </section>

      <section class="bg-[#FEDEEF] flex">
        <article class="flex flex-col justify-center p-20">
          <article class="flex">
            <article class="w-1/2 flex flex-col justify-center items-center">
              <article class="flex gap-1 items-center w-8/12">
                <img
                  class="w-[40px] h-[40px]"
                  src="/images/question.png"
                  alt="question"
                />
                <h1 class="text-[31px]">DE CE AM CREAT WISHBOX</h1>
              </article>
              <p class="font-nuito w-8/12">
                WishBox a luat nastere din nevoia de a avea un loc unde sa putem
                adauga produse de care chiar avem nevoie. Multi dintre noi am
                experimentat situatia in care am primit prea multe căni de
                Crăciun, prea multe jucării pentru cei mici sau prea multa
                veselă la nuntă. Așa am realizat ca ar fi mult mai eficient daca
                ar exista o modalitate de a spune oamenilor exact ce ne dorim,
                astfel incat sa primim cadouri care sa ne bucure cu adevarat.
              </p>
            </article>
            <article class="w-1/2 flex justify-center items-center">
              <p class="font-nuito w-8/12">
                Acesta este motivul pentru care am creat WishBox. Aici, puteti
                crea o lista cu dorintele dvs. si o puteti partaja cu prietenii
                si familia, astfel incat sa poata vedea ce produse v-ar fi de
                folos si sa poata alege un cadou care sa fie exact ce trebuie.
                Indiferent de ocazie, WishBox va poate ajuta sa primiti cadoul
                perfect.
              </p>
            </article>
          </article>
        </article>
      </section>

      <section class="flex flex-row justify-center items-center p-20">
        <article class="flex gap-1 items-center justify-center w-1/2">
          <img
            class="w-8/12"
            src="/images/leftpicturelanding.png"
            alt="wishbox love and carring"
          />
        </article>
        <article class="flex flex-col w-1/2">
          <article class="w-8/12 flex flex-col gap-2">
            <h1 class="text-[31px]">
              Crează prima ta lista de dorințe in doar cateva minute
            </h1>
            <p class="font-nuito">
              Vrei sa primesti cadouri care sa iti placa si sa fie de folos?
              Atunci, creaza-ti acum propria lista de dorinte cu ajutorul
              aplicatiei noastre! In doar cateva minute, iti poti crea un cont
              cu ajutorul adresei tale de email, denumi lista si adauga
              produsele de care ai nevoie. Procesul este foarte simplu, dupa ce
              ai creat lista, copiaza linkul cu ajutorul butonului dedicat si
              trimite-l mai departe catre prietenii si familia ta. Astfel, cand
              cineva va bifa un cadou de pe lista ta, vei primi o notificare pe
              email. Nu mai pierde timpul si energia cu cadouri inutile,
              creaza-ti acum lista ta de dorinte si incearca sa primesti cadoul
              perfect cu ajutorul aplicatiei noastre!
            </p>
            <Button text="Crează lista ta de dorinte >>" onClick={createWishbox}/>
          </article>
        </article>
      </section>

      <section class="bg-[#FEDEEF] flex w-full">
        <article class="flex flex-col justify-center p-20 w-full">
          <article class="flex justify-center items-center">
            <p class="text-[31px]">Testimoniale de la userii nostri</p>
          </article>
          <section class="flex justify-center items-center mt-4 gap-10">
            <article class="w-[300px] h-[260px]">
              <div class="flex flex-col gap-1 items-center">
                <p class="font-nuito text-center">
                  “A testimonial describing what the person thinks about this
                  service, product or startup in general.”
                </p>
                <div class="bg-black rounded-full w-[100px] h-[100px]"></div>
                <div class="font-nuito">Name</div>
                <div class="font-nuito">Description</div>
              </div>
            </article>
            <article class="w-[300px] h-[260px]">
              <div class="flex flex-col gap-s items-center">
                <p class="font-nuito text-center">
                  “A testimonial describing what the person thinks about this
                  service, product or startup in general.”
                </p>
                <div class="bg-black rounded-full w-[100px] h-[100px]"></div>
                <div class="font-nuito">Name</div>
                <div class="font-nuito">Description</div>
              </div>
            </article>
            <article class="w-[300px] h-[260px]">
              <div class="flex flex-col gap-s items-center">
                <p class="font-nuito text-center">
                  “A testimonial describing what the person thinks about this
                  service, product or startup in general.”
                </p>
                <div class="bg-black rounded-full w-[100px] h-[100px]"></div>
                <div class="font-nuito">Name</div>
                <div class="font-nuito">Description</div>
              </div>
            </article>
          </section>
        </article>
      </section>

      <section class="flex flex-row justify-center items-center p-20">
        <article class="flex flex-col items-center w-8/12">
          <article class="w-8/12 flex flex-col justify-center">
            <h1 class="text-[48px] text-center">
              Vine ziua ta? Pregateste-ti lista de dorinte cu Wishbox!
            </h1>
            <Button text="Crează lista ta de dorinte >>" onClick={createWishbox}/>
          </article>
        </article>
        <article class="flex gap-1 items-center justify-center w-4/12">
          <img
            class="w-8/12"
            src="/images/rightsidelastsection.png"
            alt="wishbox love and carring"
          />
        </article>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to WishBox",
  meta: [
    {
      name: "description",
      content: "Wishbox is a simple website that brings your wishes to life",
    },
  ],
};
