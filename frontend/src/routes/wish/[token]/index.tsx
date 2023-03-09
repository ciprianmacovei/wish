import {
  component$,
  useVisibleTask$,
  useContext,
  useStore,
  $,
} from "@builder.io/qwik";
import { DocumentHead, useLocation } from "@builder.io/qwik-city";
import { Button } from "~/components/buttons/button";
import { FormControl } from "~/components/form-control/form-control";
import { Modal } from "~/components/modal/modal";
import { applicationContext, modalsContext } from "~/context/context";
import WishboxService, { Wishbox, Wishes } from "~/service/wishbox";
import { PRIVATE_LINK_NAVIGATION_KEY } from "~/storage/storage";

interface PrivateWishboxState {
  data: Array<any>;
  expandWishbox: {
    id: number | null;
    value: boolean;
  };
  wishCopyAction: {
    id: number | null;
    value: boolean;
  };
}

export default component$(() => {
  const location = useLocation();
  const applicationState = useContext(applicationContext);
  const modalsState = useContext(modalsContext);
  const privateWishboxState = useStore<PrivateWishboxState>({
    data: [],
    expandWishbox: {
      id: null,
      value: false,
    },
    wishCopyAction: {
      value: false,
      id: null,
    },
  });

  useVisibleTask$(async () => {
    try {
      sessionStorage.setItem(
        PRIVATE_LINK_NAVIGATION_KEY,
        "/wish/" + location.params.token
      );
      applicationState.loading = true;
      const response = await WishboxService.setToken().getPrivateWishbox(
        location.params.token
      );
      privateWishboxState.data = response?.data.data;
      applicationState.loading = false;
      console.log(response);
    } catch (e) {
      applicationState.loading = false;
      console.log(e, "private wishbox");
    }
  });

  const onExpandWishbox = $((wishbox: Wishbox) => {
    privateWishboxState.expandWishbox = {
      id: wishbox.wishbox_id,
      value:
        privateWishboxState.expandWishbox.id === wishbox.wishbox_id
          ? !privateWishboxState.expandWishbox.value
          : true,
    };
  });

  const onCopyWishClipboard = $((wish: Wishes) => {
    privateWishboxState.wishCopyAction = {
      id: wish.id,
      value: true,
    };
    if (wish.wish_link) {
      navigator.clipboard.writeText(wish.wish_link);
    }
  });

  return (
    <div>
      {privateWishboxState.data?.length > 0 && (
        <div>
          {privateWishboxState.data.map((wishbox: Wishbox) => (
            <section class="w-full flex flex-col min-h-[100px] border-solid border-[1px] border-black rounded-[4px] py-[0.8em] px-[2em] duration-200 hover:text-black hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[0.25rem_0.25rem_black] active:translate-0 active:shadow-none hover:bg-teal-400">
              <article class="flex w-full">
                <div class="flex w-1/3 flex-col gap-s justify-center">
                  <h1 class="font-nuito text-[30px]">{wishbox.wishbox_name}</h1>
                  <p class="font-nuito text-[11px]">
                    Expires on: {wishbox.wishbox_end_date}
                  </p>
                </div>
                <div class="flex flex-col justify-end items-start w-2/3 gap-5">
                  <article class="flex self-end gap-2">
                    <Button size="md" text="Edit"></Button>
                  </article>
                </div>
              </article>
              {wishbox?.wishes?.length && wishbox?.wishes?.length !== 0 && (
                <section class="w-full flex flex-col my-5">
                  <p
                    class="text-center my-5"
                    onClick$={$(() => onExpandWishbox(wishbox))}
                  >
                    Expand to see wishes
                  </p>
                  {privateWishboxState.expandWishbox.value &&
                    privateWishboxState.expandWishbox.id ===
                      wishbox?.wishbox_id && (
                    <ul class="w-full flex flex-col gap-2">
                      {wishbox.wishes.map((wish: Wishes) => (
                        <li class="border-lime-100 border-solid border-[3px] hover:bg-[#ff90e8] rounded-[4px] py-[0.8em] px-[2em] duration-200 hover:text-black hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[0.25rem_0.25rem_black] active:translate-0 active:shadow-none">
                          <section class="p-2">
                            <article class="w-full flex">
                              <div class="flex flex-col">
                                <p class="font-nuito">
                                    Wish name:
                                  {wish.wish_name}
                                </p>
                                <div class="max-w-[200px] max-h-[200px] w-auto h-auto">
                                  {wish.wishbox_img_url ? (
                                    <img
                                      src={wish.wishbox_img_url}
                                      alt="wish link image"
                                    />
                                  ) : (
                                    <img
                                      src="/images/question.png"
                                      alt="wish link image"
                                    />
                                  )}
                                </div>
                              </div>
                              <div class="ml-auto flex flex-col gap-2">
                                <div class="flex gap-2 font-nuito max-w-xs">
                                  <p>Saved Wish link:</p>
                                  <Button
                                    text={
                                      privateWishboxState.wishCopyAction
                                        .value &&
                                        wish.id ===
                                          privateWishboxState.wishCopyAction.id
                                        ? "Copied"
                                        : "Copy"
                                    }
                                    onClick={$(() =>
                                      onCopyWishClipboard(wish)
                                    )}
                                  />
                                </div>
                                <p class="font-nuito font-bold text-center">
                                    Price: {wish.price}
                                </p>
                              </div>
                            </article>
                            <article class="w-full flex justify-between items-center">
                              <div class="flex items-center gap-1">
                                <p>Taken: </p>
                                <div>
                                  {wish.wish_taken === 1 ? (
                                    <div class="font-nuito">IsTaken</div>
                                  ) : (
                                    <div class="font-nuito">NotTaken</div>
                                  )}
                                </div>
                              </div>
                              <div class="flex items-center gap-1">
                                <Button text="Edit" size="md" />
                              </div>
                            </article>
                          </section>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              )}
            </section>
          ))}
        </div>
      )}
      {modalsState.showPrivateWishesChoice && (
        <Modal>
          <section class="flex flex-col gap-10">
            <article>
              <p>What do u prefer?</p>
            </article>
            <article class="flex flex-col justify-center items-center gap-4">
              <Button size="lg" text="Anonymouse" />
              <Button size="lg" text="User" />
            </article>
          </section>
        </Modal>
      )}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Private Wishbox",
  meta: [
    {
      name: "description",
      content:
        "This is the main page where u can create your wishes and share with others.",
    },
  ],
};
