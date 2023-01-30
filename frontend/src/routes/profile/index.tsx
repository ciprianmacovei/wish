import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import { Button } from "~/components/buttons/button";

export default component$(() => {
  return (
    <div>
      <Button text="asta la vista" />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Wisher Profile",
  meta: [
    {
      name: "description",
      content:
        "This is the main page where u can create your wishes and share with others.",
    },
  ],
};
