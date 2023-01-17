import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="h-[100vh] w-[100vw]">
      <section class="w-full h-full flex flex-col justify-center items-center">
        <section class="w-[450px] bg-pink-500 rounded-2xl p-4 text-white flex flex-col items-center gap-4">
          <article>
            <p class="font-bold text-center text-[20px] px-4">
              Creating an account si absolutely free of charge!
            </p>
          </article>
          <section class="flex flex-col gap-4">
            <article>
              <p class="font-bold text-left text-[12px]">Account Name</p>
              <input
                class="min-w-[200px] md:w-[200px] lg:w-[300px] h-10 px-4 py-[6px] border-2 border-solid border-primary rounded-md focus:border-alternate focus:outline-none flex text-black"
                type="text"
              />
            </article>
            <article>
              <p class="font-bold text-left text-[12px]">Password</p>
              <input
                class="min-w-[200px] md:w-[200px] lg:w-[300px] h-10 px-4 py-[6px] border-2 border-solid border-primary rounded-md focus:border-alternate focus:outline-none flex text-black"
                type="text"
              />
            </article>
            <article>
              <p class="font-bold text-left text-[12px]">Email</p>
              <input
                class="min-w-[200px] md:w-[200px] lg:w-[300px] h-10 px-4 py-[6px] border-2 border-solid border-primary rounded-md focus:border-alternate focus:outline-none flex text-black"
                type="text"
              />
            </article>
          </section>
          <button class="rounded-[50px] w-[150px] h-[40px] bg-alternate hover:scale-110 hover:border-solid hover:border-2 hover:border-grey-500 hover:font-bold duration-100">
            Create Account
          </button>
        </section>
      </section>
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
