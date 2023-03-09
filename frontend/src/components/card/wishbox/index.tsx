import { Slot, component$, $, useStore, QRL } from "@builder.io/qwik";
import { gsap } from "gsap";
import { Button } from "~/components/buttons/button";
import { Wishbox } from "~/service/wishbox";

interface WishcardProps {
  wishbox: Wishbox;
  createWish: QRL<() => void>;
}

interface WishboxCardState {
  hoveredCard: boolean;
  wishboxCopyAction: {
    id: number | null;
    value: boolean;
  };
}

export const WishboxCard = component$(
  ({ wishbox, createWish }: WishcardProps) => {
    const wishboxCardState = useStore<WishboxCardState>({
      hoveredCard: false,
      wishboxCopyAction: {
        id: null,
        value: false,
      },
    });

    const onHover = $(() => {
      if (wishbox.wishes?.length) {
        wishboxCardState.hoveredCard = true;
        gsap.fromTo(
          ".top-wishbox-box",
          { y: 0, scale: 1 },
          { y: -50, duration: 0.7, scale: 1.3 }
        );
        gsap.fromTo(
          ".bottom-wishbox-box",
          { y: 0, scale: 1 },
          { y: 50, duration: 0.7, scale: 1.3 }
        );
      }
    });

    const onLeaveHover = $(() => {
      if (wishbox.wishes?.length) {
        wishboxCardState.hoveredCard = false;
        gsap.fromTo(
          ".top-wishbox-box",
          { y: -50, scale: 1.3 },
          { y: 0, duration: 0.7, scale: 1 }
        );
        gsap.fromTo(
          ".bottom-wishbox-box",
          { y: 50, scale: 1.3 },
          { y: 0, duration: 0.7, scale: 1 }
        );
      }
    });

    const onCopyClipboard = $((wishbox: Wishbox) => {
      wishboxCardState.wishboxCopyAction = {
        id: wishbox.wishbox_id,
        value: true,
      };
      if (wishbox.link) {
        navigator.clipboard.writeText(wishbox.link);
      }
    });

    return (
      <div
        class={`w-[500px] bg-black flex flex-col rounded-md font-nuito ${
          wishboxCardState.hoveredCard ? "h-[300px]" : "h-[200px]"
        }`}
        onMouseEnter$={onHover}
        onMouseLeave$={onLeaveHover}
      >
        <div class="top-wishbox-box h-[100px] w-[500px] bg-green-200 rounded-t-md flex p-3">
          <div class={"flex w-[50%] items-start"}>
            <div>Wishbox name: {wishbox.wishbox_name}</div>
          </div>
          <div class={"flex w-[50%] items-start justify-end"}>
            <Button
              size="sm"
              text={"Copy private Wishbox link"}
              onClick={$(() => onCopyClipboard(wishbox))}
            />
          </div>
        </div>
        {wishboxCardState.hoveredCard && (
          <div
            class={
              "flex flex-col text-white overflow-scroll max-h-[100px] h-full"
            }
          >
            <Slot />
          </div>
        )}
        <div class="bottom-wishbox-box h-[100px] w-[500px] bg-purple-200 rounded-b-md flex p-3">
          <div class={"flex justify-center items-end"}>
            Expire date: {wishbox.wishbox_end_date}
          </div>
          <div class={"ml-auto flex justify-center items-end gap-2"}>
            <Button size="sm" text="Add Wish" onClick={createWish} />
            <Button size="sm" text="Delete" />
            <Button size="sm" text="Edit" />
          </div>
        </div>
      </div>
    );
  }
);
