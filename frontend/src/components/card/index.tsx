import { component$ } from "@builder.io/qwik";

export const Card = component$(() => {
  return (
    <div>
      <div class="h-80 w-72 bg-primary rounded-xl p-4 flex flex-col gap-4 justify-center items-center">
        <div>title</div>
        <div>body</div>
        <div>footer</div>
      </div>
    </div>
  );
});
