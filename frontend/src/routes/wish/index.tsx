/* eslint-disable indent */
import {
  component$,
  useContext,
  $,
  QwikChangeEvent,
  useStore,
  useResource$,
  Resource,
  useVisibleTask$,
  useSignal,
} from "@builder.io/qwik";
import { DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { Button } from "~/components/buttons/button";

import { FormControl } from "~/components/form-control/form-control";
import { Modal } from "~/components/modal/modal";
import { Navbar } from "~/components/navbar/navbar";
import { applicationContext, modalsContext } from "~/context/context";
import WishboxService, { Wishbox, Wishes } from "~/service/wishbox";
import {
  WISHBOX_DATE,
  WISHBOX_NAME_REQUIRED,
  WISHES_LINK_FORMAT_ERROR,
  WISHES_LINK_REQUIRED,
  WISHES_PRICE_NAN,
  WISHES_PRICE_REQUIRED,
  WISH_NAME_REQUIRED,
} from "~/validators/validators";
import { GuardLayout } from "../guard/guard-layout";
import { WishboxCard } from "~/components/card/wishbox";
import { WishesCard } from "~/components/card/wishes";

interface WishboxState {
  wishboxName: string;
  wishboxNameValidation: boolean;
  wishboxNameValidationMessage: string;
  wishboxEndDate: string;
  wishboxEndDataValidation: boolean;
  wishboxEndDataValidationMessage: string;
  wishboxArray: Array<Wishbox>;
  wishboxCopyButtonText: string;
  expandWishbox: {
    id: number | null;
    value: boolean;
  };
  wishboxId: null | number;
  refreshResource: { value: boolean };
  wishboxCopyAction: {
    id: number | null;
    value: boolean;
  };
}

interface WishesState {
  wishName: string;
  wishNameValidation: boolean;
  wishNameValidationMessage: string;
  wishLink: string;
  wishLinkValidation: boolean;
  wishLinkValidationMessage: string;
  wishPrice: string;
  wishPriceValidation: boolean;
  wishPriceValidationMessage: string;
  id: number | null;
  wishboxId: number | null;
  wishCopyAction: {
    id: number | null;
    value: boolean;
  };
}

export default component$(() => {
  const onMount = useSignal(false);
  const navigation = useNavigate();
  const modalsState = useContext(modalsContext);
  const appState = useContext(applicationContext);
  const wishboxState = useStore<WishboxState>({
    wishboxName: "",
    wishboxNameValidation: false,
    wishboxNameValidationMessage: "",
    wishboxEndDate: "",
    wishboxEndDataValidation: false,
    wishboxEndDataValidationMessage: "",
    wishboxArray: [],
    wishboxCopyButtonText: "Copy",
    expandWishbox: {
      id: null,
      value: false,
    },
    wishboxCopyAction: {
      value: false,
      id: null,
    },
    wishboxId: null,
    refreshResource: { value: false },
  });

  const wishState = useStore<WishesState>({
    wishName: "",
    wishNameValidation: false,
    wishNameValidationMessage: "",
    wishLink: "",
    wishLinkValidation: false,
    wishLinkValidationMessage: "",
    wishPrice: "",
    wishPriceValidation: false,
    wishPriceValidationMessage: "",
    id: null,
    wishboxId: null,
    wishCopyAction: {
      value: false,
      id: null,
    },
  });

  const wishboxResources = useResource$(async ({ cleanup, track }) => {
    const abortController = new AbortController();
    cleanup(() => abortController.abort("cleanup"));
    try {
      track(() => wishboxState.refreshResource);
      const res = await WishboxService.setToken().getWishboxes(abortController);
      if (res) {
        return res?.data.data;
      } else {
        WishboxService.noTokenRequest(navigation);
        return undefined;
      }
    } catch (error) {
      return undefined;
    }
  });

  useVisibleTask$(() => {
    if (!onMount.value) {
      wishboxState.refreshResource = { value: true };
      onMount.value = true;
    }
  });

  const openCreateWishboxModal = $(() => {
    modalsState.showCreateWishbox = true;
  });

  const openCreateWishesModal = $((wishbox: Wishbox) => {
    wishboxState.wishboxId = wishbox.wishbox_id;
    modalsState.showCreateWishes = true;
  });

  const getWishboxName = $((Event: QwikChangeEvent<HTMLInputElement>) => {
    if (Event.target.value) {
      wishboxState.wishboxName = Event.target.value;
      wishboxState.wishboxNameValidation = false;
      wishboxState.wishboxNameValidationMessage = "";
    } else {
      wishboxState.wishboxNameValidation = true;
      wishboxState.wishboxNameValidationMessage = WISHBOX_NAME_REQUIRED;
    }
  });

  const getWishboxEndDate = $((Event: QwikChangeEvent<HTMLInputElement>) => {
    const dateNow = new Date().getTime();
    const selectedDate = new Date(Event.target.value).getTime();
    if (selectedDate - dateNow > 0) {
      wishboxState.wishboxEndDate = Event.target.value;
      wishboxState.wishboxEndDataValidation = false;
      wishboxState.wishboxEndDataValidationMessage = "";
    } else {
      wishboxState.wishboxEndDataValidation = true;
      wishboxState.wishboxEndDataValidationMessage = WISHBOX_DATE;
    }
  });

  const getWishName = $((Event: QwikChangeEvent<HTMLInputElement>) => {
    if (Event.target.value) {
      wishState.wishName = Event.target.value;
      wishState.wishNameValidation = false;
      wishState.wishNameValidationMessage = "";
    } else {
      wishState.wishNameValidation = true;
      wishState.wishNameValidationMessage = WISH_NAME_REQUIRED;
    }
  });

  const getWishLink = $((Event: QwikChangeEvent<HTMLInputElement>) => {
    if (Event.target.value) {
      if (Event.target.value.indexOf("https://") === 0) {
        wishState.wishLink = Event.target.value;
        wishState.wishLinkValidation = false;
        wishState.wishLinkValidationMessage = "";
      } else {
        wishState.wishLinkValidation = true;
        wishState.wishLinkValidationMessage = WISHES_LINK_FORMAT_ERROR;
      }
    } else {
      wishState.wishLinkValidation = true;
      wishState.wishLinkValidationMessage = WISHES_LINK_REQUIRED;
    }
  });

  const getWishPrice = $((Event: QwikChangeEvent<HTMLInputElement>) => {
    if (Event.target.value) {
      if (Number.isNaN(parseInt(Event.target.value))) {
        wishState.wishPriceValidation = true;
        wishState.wishPriceValidationMessage = WISHES_PRICE_NAN;
      } else {
        wishState.wishPrice = Event.target.value;
        wishState.wishPriceValidation = false;
        wishState.wishPriceValidationMessage = "";
      }
    } else {
      wishState.wishPriceValidation = true;
      wishState.wishPriceValidationMessage = WISHES_PRICE_REQUIRED;
    }
  });

  const onCopyClipboard = $((wishbox: Wishbox) => {
    wishboxState.wishboxCopyAction = {
      id: wishbox.wishbox_id,
      value: true,
    };
    wishState.wishCopyAction = {
      id: null,
      value: false,
    };
    if (wishbox.link) {
      navigator.clipboard.writeText(wishbox.link);
    }
  });

  const onCopyWishClipboard = $((wish: Wishes) => {
    wishState.wishCopyAction = {
      id: wish.id,
      value: true,
    };
    wishboxState.wishboxCopyAction = {
      id: null,
      value: false,
    };
    if (wish.wish_link) {
      navigator.clipboard.writeText(wish.wish_link);
    }
  });

  const onExpandWishbox = $((wishbox: Wishbox) => {
    wishboxState.expandWishbox = {
      id: wishbox?.wishbox_id,
      value:
        wishboxState.expandWishbox.id === wishbox.wishbox_id
          ? !wishboxState.expandWishbox.value
          : true,
    };
  });

  const onCreateWishbox = $(async () => {
    if (wishboxState.wishboxName) {
      try {
        modalsState.loader = false;
        modalsState.showCreateWishbox = false;
        appState.loading = true;
        const response = await WishboxService.setToken().createWishbox(
          wishboxState.wishboxEndDate,
          wishboxState.wishboxName
        );
        if (response) {
          wishboxState.refreshResource = { value: true };
        } else {
          WishboxService.noTokenRequest(navigation);
        }
        appState.loading = false;
      } catch (e) {
        modalsState.loader = false;
        modalsState.showCreateWishbox = false;
        appState.loading = false;
      }
    } else {
      wishboxState.wishboxNameValidation = true;
      wishboxState.wishboxNameValidationMessage = WISHBOX_NAME_REQUIRED;
    }
  });

  const onDeleteWishbox = $(async (wishbox: Wishbox) => {
    try {
      appState.loading = true;
      const response = await WishboxService.setToken().deleteWishbox(
        wishbox.wishbox_id
      );
      if (response) {
        wishboxState.refreshResource = { value: true };
      }
      appState.loading = false;
    } catch (err) {
      appState.loading = false;
      console.error(err);
    }
  });

  const onCreateWish = $(async () => {
    try {
      appState.loading = true;
      const response = await WishboxService.setToken().createWishes(
        wishState.wishName,
        wishboxState.wishboxId as number,
        wishState.wishLink,
        wishState.wishPrice
      );
      modalsState.loader = false;
      modalsState.showCreateWishes = false;
      if (response) {
        wishboxState.refreshResource = { value: true };
      }
      appState.loading = false;
    } catch (err) {
      modalsState.loader = false;
      appState.loading = false;
    }
  });

  const onDeleteWish = $(async (wish: Wishes) => {
    try {
      appState.loading = true;
      const response = await WishboxService.setToken().deleteWishes(wish.id);
      modalsState.loader = false;
      modalsState.showCreateWishes = false;
      if (response) {
        wishboxState.refreshResource = { value: true };
      }
      appState.loading = false;
    } catch (err) {
      modalsState.loader = false;
      appState.loading = false;
    }
  });

  return (
    <GuardLayout>
      <>
        <section class="flex w-full justify-center items-center">
          <section class="flex flex-col w-8/12 justify-center items-center gap-4">
            <article>
              <h1 class="text-[4rem]">Listele tale</h1>
            </article>
            <acticle>
              <Button
                text="Creaza o lista de dorinte"
                onClick={openCreateWishboxModal}
              />
            </acticle>
            <Resource
              value={wishboxResources}
              onPending={() => <div>Loading...</div>}
              onRejected={() => <div>Failed to load weather</div>}
              onResolved={(wishboxArray: any) => {
                return (
                  <div class="w-full my-4">
                    {Object.keys(wishboxArray ?? []).length === 0 ? (
                      <section class="w-full flex flex-col justify-center items-center">
                        <article class="w-2/5">
                          <img
                            src="/images/rightpicturelanding.png"
                            alt="wishbox love and carring"
                          />
                        </article>
                        <article>
                          <p class="text-[2rem]">Nu ai creata nicio lista</p>
                        </article>
                      </section>
                    ) : (
                      <section class="w-full">
                        {wishboxArray.map((wishbox: Wishbox) => (
                          <WishboxCard wishbox={wishbox} createWish={$(() => openCreateWishesModal(wishbox))}>
                            <WishesCard wishes={wishbox.wishes} onDeleteWish={onDeleteWish}/>
                          </WishboxCard>
                        ))}
                      </section>
                    )}
                  </div>
                );
              }}
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
                  validationError={wishboxState.wishboxNameValidation}
                  validationMessage={wishboxState.wishboxNameValidationMessage}
                />
              </article>
              <article>
                <FormControl
                  type="date"
                  id="wishbox_date"
                  label="Data la care ia sfarsit lista ta de dorinte"
                  name="wishbox_end_date"
                  onEvent={getWishboxEndDate}
                  validationError={wishboxState.wishboxEndDataValidation}
                  validationMessage={
                    wishboxState.wishboxEndDataValidationMessage
                  }
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

        {modalsState.showCreateWishes && (
          <Modal>
            <section class="flex flex-col gap-10">
              <article>
                <p>Adauga o dorinta</p>
              </article>
              <article>
                <FormControl
                  type="text"
                  id="wish_name"
                  label="Denumire"
                  name="wish_name"
                  onEvent={getWishName}
                  validationError={wishState.wishNameValidation}
                  validationMessage={wishState.wishNameValidationMessage}
                />
              </article>
              <article>
                <FormControl
                  type="text"
                  id="wish_link"
                  label="Link produs"
                  name="wish_link"
                  onEvent={getWishLink}
                  validationError={wishState.wishLinkValidation}
                  validationMessage={wishState.wishLinkValidationMessage}
                />
              </article>
              <article>
                <FormControl
                  type="text"
                  id="wish_price"
                  label="Pret produs"
                  name="wish_price"
                  onEvent={getWishPrice}
                  validationError={wishState.wishPriceValidation}
                  validationMessage={wishState.wishPriceValidationMessage}
                />
              </article>
              <article class="w-full flex items-center justify-center">
                <Button
                  onClick={onCreateWish}
                  text="Creaza o noua lista de dorinte"
                />
              </article>
            </section>
          </Modal>
        )}
      </>
    </GuardLayout>
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
