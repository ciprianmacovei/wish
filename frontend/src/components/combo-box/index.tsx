import {
  component$,
  useStore,
  $,
  QwikKeyboardEvent,
  QwikMouseEvent,
} from "@builder.io/qwik";

export const ComboBox = component$(() => {
  const state = useStore({
    wishList: [] as string[],
  });

  const addWish = $((e: QwikKeyboardEvent | QwikMouseEvent) => {
    if (
      (e instanceof KeyboardEvent && e.key === "Enter") ||
      e instanceof PointerEvent
    ) {
      const comboboxElement: HTMLDivElement | null =
        document.querySelector(".combobox");
      if (comboboxElement) {
        const text: string | null = comboboxElement.textContent;
        if (text) {
          state.wishList = [...state.wishList, text];
        }
        comboboxElement.innerText = "";
      }
    }
  });

  return (
    <section>
      <article>
        <p class="text-gray-800 text-[10px] min-w-[200px] md:w-[300px] lg:w-[400px] text-center">
          Write the <span class="font-extrabold">object/s name</span> or add a{" "}
          <span class="font-extrabold">link</span> after each object click the
          start to add ur wish
        </p>
      </article>
      <div class="relative min-w-[200px] md:w-[300px] lg:w-[400px] h-10">
        <div></div>
        <div
          onKeyPress$={(e: QwikKeyboardEvent) => addWish(e)}
          class="combobox min-w-[200px] md:w-[300px] lg:w-[400px] h-10 px-4 py-[6px] border-2 border-solid border-secondary rounded-md focus:border-secondary focus:outline-none flex"
          contentEditable="true"
        ></div>
        <div
          class="absolute right-0 top-0 w-8 h-10 flex justify-center items-center hover:text-alternate hover:scale-150 duration-500 cursor-pointer"
          onClick$={(e: QwikMouseEvent) => addWish(e)}
        >
          <i class="fa fa-star fa-regular" aria-hidden="true"></i>
        </div>
      </div>
      <section>
        {state.wishList.map((wish, index) => (
          <div key={index + "wishItem"} class="bg-pink-200">
            <div class="wish-name">{wish}</div>
          </div>
        ))}
      </section>
    </section>
  );
});
