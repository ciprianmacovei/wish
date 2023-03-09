import { component$, $, useStore, QRL } from "@builder.io/qwik";
import { Button } from "~/components/buttons/button";
import { Wishes } from "~/service/wishbox";

interface WishCardProps {
  wishes: Wishes[];
  onDeleteWish: (wish: Wishes) => void;
}

interface WishesCardState {
  wishCopyAction: {
    id: number | null;
    value: boolean;
  };
}

export const WishesCard = component$(
  ({ wishes, onDeleteWish }: WishCardProps) => {
    const wishState = useStore<WishesCardState>({
      wishCopyAction: {
        value: false,
        id: null,
      },
    });

    const onCopyWishClipboard = $((wish: Wishes) => {
      wishState.wishCopyAction = {
        id: wish.id,
        value: true,
      };
      if (wish.wish_link) {
        navigator.clipboard.writeText(wish.wish_link);
      }
    });

    return (
      <section class="w-full flex flex-col h-[90px] text-[10px] font-nuito">
        <ul class="w-full flex flex-col gap-2 p-2">
          {wishes?.length &&
            wishes.map((wish: Wishes) => (
              <li class="border-lime-100 border-solid border-[3px] hover:bg-[#ff90e8] rounded-[4px] duration-200 hover:text-black hover:translate-x-[-0.25rem] hover:shadow-[0.25rem_0.25rem_white] active:translate-0 active:shadow-none">
                <section class="p-2">
                  <article class="w-full flex">
                    <div class="flex flex-col">
                      <p>
                        Wish name:
                        {wish.wish_name}
                      </p>
                      <div class="max-w-[40px] max-h-[40px] w-auto h-auto rounded-lg">
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
                      <div class="flex gap-2 max-w-xs">
                        <p>Saved Wish link:</p>
                        <Button
                          size="sm"
                          text={
                            wishState.wishCopyAction.value &&
                            wish.id === wishState.wishCopyAction.id
                              ? "Copied"
                              : "Copy"
                          }
                          onClick={$(() => onCopyWishClipboard(wish))}
                        />
                      </div>
                      <p class="font-bold text-center">
                        Price: {wish.price}
                      </p>
                    </div>
                  </article>
                  <article class="w-full flex justify-between items-center">
                    <div class="flex items-center gap-1">
                      <p>Taken: </p>
                      <div>
                        {wish.wish_taken === 1 ? (
                          <p>IsTaken</p>
                        ) : (
                          <p>NotTaken</p>
                        )}
                      </div>
                    </div>
                    <div class="flex items-center gap-1">
                      <Button text="Edit" size="sm" />
                      <Button
                        text="Delete"
                        size="sm"
                        onClick={$(() => onDeleteWish(wish))}
                      />
                    </div>
                  </article>
                </section>
              </li>
            ))}
        </ul>
      </section>
    );
  }
);
