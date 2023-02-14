import {
  component$,
  useContext,
  $,
  QwikChangeEvent,
  useStore,
  // useResource$,
} from "@builder.io/qwik";
import { DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { Button } from "~/components/buttons/button";

import { FormControl } from "~/components/form-control/form-control";
import { Modal } from "~/components/modal/modal";
import { modalsContext } from "~/context/context";
import WishboxService from "~/service/wishbox";

export default component$(() => {
  const navigation = useNavigate();
  const modalsState = useContext(modalsContext);
  const wishboxState = useStore({
    wishboxName: "",
    wishboxEndDate: "",
  });

  // const wishboxResources = useResource$<Promise<Wishbox[] | undefined>>(
  //   async ({ cleanup }) => {
  //     const abortController = new AbortController();
  //     cleanup(() => abortController.abort("cleanup"));
  //     try {
  //       const res = await WishboxService.setToken().getWishboxes(abortController);
  //       if (res) {
  //         console.log(res, "@@@@@@@@");
  //         return res;
  //       } else {
  //         WishboxService.noTokenRequest(navigation);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // );

  const openCreateWishboxModal = $(() => {
    modalsState.showCreateWishbox = true;
  });

  const getWishboxName = $((Event: QwikChangeEvent<HTMLInputElement>) => {
    wishboxState.wishboxName = Event.target.value;
  });

  const getWishboxEndDate = $((Event: QwikChangeEvent<HTMLInputElement>) => {
    wishboxState.wishboxEndDate = Event.target.value;
  });

  const onCreateWishbox = $(async () => {
    try {
      modalsState.loader = true;
      const response = await WishboxService.setToken().createWishbox(
        wishboxState.wishboxEndDate,
        wishboxState.wishboxName
      );
      modalsState.loader = false;
      modalsState.showCreateWishbox = false;
      if (response) {
        console.log(response);
      } else {
        WishboxService.noTokenRequest(navigation);
      }
    } catch (e) {
      console.log(e);
      modalsState.loader = false;
    }
  });

  return (
    <>
      <section class="flex w-full justify-center items-center">
        <section class="flex flex-col w-8/12 justify-center items-center gap-4">
          <article>
            <h1 class="text-[4rem]">Listele tale</h1>
          </article>
          <article class="w-2/5">
            <img
              src="/images/rightpicturelanding.png"
              alt="wishbox love and carring"
            />
          </article>
          <article>
            <p class="text-[2rem]">Nu ai creata nicio lista</p>
          </article>
          <Button
            text="Creaza lista ta de dorinte"
            onClick={openCreateWishboxModal}
          />
        </section>
      </section>
      {modalsState.showCreateWishbox && (
        <Modal>
          <section class="flex flex-col gap-10">
            <article>
              <p>Alege un nume pentru lista ta de dorinte!</p>
            </article>
            <article>
              <FormControl
                type="text"
                id="wishbox_name"
                label="Denumire"
                name="wishbox_name"
                onEvent={getWishboxName}
              />
            </article>
            <article>
              <FormControl
                type="date"
                id="wishbox_date"
                label="Data la care ia sfarsit lista ta de dorinte"
                name="wishbox_end_date"
                onEvent={getWishboxEndDate}
              />
            </article>
            <article class="w-full flex items-center justify-center">
              <Button
                onClick={onCreateWishbox}
                text="Creaza o noua lista de dorinte"
              />
            </article>
          </section>
        </Modal>
      )}
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Wisher the wish creating section",
  meta: [
    {
      name: "description",
      content:
        "This is the main page where u can create your wishes and share with others.",
    },
  ],
};
