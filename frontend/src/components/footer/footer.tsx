import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <>
      <div class="w-full bg-gray-900 p-8">
        <section class="text-white w-full flex justify-center items-center gap-10">
          <article class="max-w-[225.62px] max-h-[46.71px]">
            <img src="/images/logo.png" alt="logo" />
          </article>
          <article class="flex flex-col">
            <p class="font-nuito font-bold">first</p>
            <article class="flex flex-col gap-1">
              <p class="font-nuito">first</p>
              <p class="font-nuito">first</p>
              <p class="font-nuito">first</p>
            </article>
          </article>
          <article class="flex flex-col">
            <p class="font-nuito font-bold">Second</p>
            <article class="flex flex-col gap-1">
              <p class="font-nuito">Second</p>
              <p class="font-nuito">Second</p>
              <p class="font-nuito">Second</p>
            </article>
          </article>
          <article>
            <p class="font-nuito font-bold">Subscribe</p>
            <input
              class="font-nuito"
              type="text"
              placeholder="Enter email"
            ></input>
          </article>
          {/* <section>
            <article>
              <Link>
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                Twitter
              </Link>
            </article>
            <article>
              <Link>
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                Linkedin
              </Link>
            </article>
          </section>
          <article>Created with ♥️ by maco</article> */}
        </section>
      </div>
    </>
  );
});
