import { component$, useClientEffect$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import VanillaCalendar from "@uvarov.frontend/vanilla-calendar";
import "@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css";

import { ComboBox } from "~/components/combo-box";

export default component$(() => {
  useClientEffect$(
    () => {
      const calendar = new VanillaCalendar("#calendar");
      calendar.init();
    },
    {
      eagerness: "visible", // 'load' | 'visible' | 'idle'
    }
  );
  return (
    <>
      <section class="flex flex-col gap-4">
        <section class="flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
          <section class="flex flex-col w-2/3 items-center gap-4">
            <article class="w-[70%]">
              <p> Description: </p>
              <p>
                Here u can add your wishes set a date when the wish will end and
                share it with ur friend, they will be able to check ur bucket
                list or add other things in the basket that u could like, every
                time they make a change you will recive a message via email
              </p>
            </article>
            <article>
              <p class="text-center">Wish name</p>
              <input
                class="min-w-[200px] md:w-[300px] lg:w-[400px] h-10 px-4 py-[6px] border-2 border-solid border-secondary rounded-md focus:border-secondary focus:outline-none flex"
                type="text"
              />
            </article>
            <article class="flex flex-col justify-center items-center">
              <ComboBox/>
            </article>
          </section>
          <section class="flex flex-col w-1/3 max-sm:justify-center max-sm:items-center">
            <article>
              <p>Time till wishes end</p>
              <div id="calendar" class="bg-pink-200"></div>
            </article>
          </section>
        </section>
        <section class="w-full flex justify-center items-center">
          <button class="rounded-[50px] w-[150px] h-[40px] bg-orange-200 hover:scale-110 hover:border-solid hover:border-2 hover:border-pink-500 duration-300 font-bold text-red-600">
            Create a wish
          </button>
        </section>
      </section>
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
