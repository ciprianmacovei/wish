import {
  component$,
  useContext,
  $,
  Slot,
  useBrowserVisibleTask$,
} from "@builder.io/qwik";
import { modalsContext } from "~/context/context";

export const Modal = component$(() => {
  const modalsState = useContext(modalsContext);

  const closeModal = $(() => {
    modalsState.showCreateWishbox = false;
    modalsState.showCreateWishes = false;
  });

  const closeOutsideModal = $((event: MouseEvent) => {
    if ((event?.target as HTMLElement)?.id === "myModalOverlay") {
      modalsState.showCreateWishbox = false;
      modalsState.showCreateWishes = false;
    }
  });

  useBrowserVisibleTask$(
    () => {
      // Only runs in the client
      window.addEventListener("click", closeOutsideModal);

      return () => {
        window.removeEventListener("click", closeOutsideModal);
      };
    },
    { strategy: "document-ready" }
  );

  return (
    <div>
      <>
        <section
          id="myModalOverlay"
          class="flex justify-center items-center w-[100vw] h-[100vh] bg-[#FE98CF]/60 fixed top-0 font-nuito"
        >
          <section
            id="myModal"
            class="bg-white rounded-[53px] p-8 flex flex-col items-center gap-10 relative"
          >
            {modalsState.loader && (
              <article class="absolute">
                <div class="flex items-center justify-center">
                  <div
                    class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </article>
            )}
            <article class="flex w-full">
              <img
                class="w-[24px] h-[20px] cursor-pointer hover:scale-125 duration-100"
                src="/images/backmodal.png"
                alt="back"
              />
              <img
                onClick$={closeModal}
                class="w-[26px] h-[26px] ml-auto cursor-pointer hover:scale-125 duration-100"
                src="/images/closemodal.png"
                alt="close"
              />
            </article>
            <Slot />
          </section>
        </section>
      </>
    </div>
  );
});
