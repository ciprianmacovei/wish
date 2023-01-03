import { component$, useStore, $ } from "@builder.io/qwik";

export const ComboBox = component$(() => {
  const state = useStore({
    wishList: [] as string[],
  });

  const addWish = $(() => {
    const comboboxElement: HTMLDivElement | null =
      document.querySelector(".combobox");
    if (comboboxElement) {
      const text: string | null = comboboxElement.textContent;
      if (text) {
        state.wishList.push(text);
      }
      comboboxElement.innerText = "";
    }
  });

  return (
    <div class="relative min-w-[200px] md:w-[300px] lg:w-[400px] h-10">
      <div
        class="combobox min-w-[200px] md:w-[300px] lg:w-[400px] h-10 px-4 py-[6px] border-2 border-solid border-secondary rounded-md focus:border-secondary focus:outline-none flex"
        contentEditable="true"
      >
        asdasds
      </div>
      <div
        class="absolute right-0 top-0 w-8 h-10 flex justify-center items-center hover:text-alternate hover:scale-150 duration-500 cursor-pointer"
        onClick$={addWish}
      >
        <i class="fa fa-star fa-regular" aria-hidden="true"></i>
      </div>
    </div>
  );
});
