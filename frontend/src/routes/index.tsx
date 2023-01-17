import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const navigate = useNavigate();

  return (
    <div class="flex max-sm:flex-col max-sm:px-2 max-sm:gap-5">
      <section class="w-1/2 max-sm:w-full justify-center flex">
        <article class="flex flex-col gap-4 max-sm:gap-2 w-8/12">
          <h1 class="text-xl">Welcome to Wish</h1>
          <p>
            We're here to help you share your wishes with your loved ones.
            Whether it's a big dream or a small goal, WishWell makes it easy to
            share your wishes with others and get the support and encouragement
            you need to make them come true.
          </p>
        </article>
      </section>
      <section class="w-1/2 max-sm:w-full justify-center flex">
        <article class="flex flex-col gap-4 max-sm:gap-2 w-8/12">
          <h1 class="text-xl">Get started</h1>
          <p>
            To get started, simply create a wish and share it with your friends
            and family. You can even create a custom link to share on social
            media or via email. With WishWell, you'll have a community of loved
            ones cheering you on and helping you turn your wishes into reality.
          </p>
          <button
            onClick$={() => {
              navigate.path = "/register/";
            }}
            class="rounded-[50px] w-[150px] h-[40px] bg-yellow-400 hover:scale-110 hover:border-solid hover:border-2 hover:border-orange-500 duration-300 font-bold"
          >
            Get Started
          </button>
        </article>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
