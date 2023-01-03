import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import { Card } from "~/components/card";
import { ComboBox } from "~/components/combo-box";

export default component$(() => {
  return (
    <>
      <section class="flex flex-col justify-center items-center">
        <article>
          <p class="text-center">Wish name</p>
          <input type="text" />
        </article>
        <article>
          <p>Write the object/s name or add a link after each object click the start to add ur wish</p>
          <ComboBox/>
        </article>
        <article>
          <p>Time till wishes end</p>
        </article>
        <Card />
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
