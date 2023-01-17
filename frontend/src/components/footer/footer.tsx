import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Footer = component$(() => {
  return (
    <>
      <div class="w-full bg-gray-900 p-8">
        <section class=" text-white w-full flex flex-col items-center gap-3">
          <section>
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
          <article>Created with ♥️ by maco</article>
        </section>
      </div>
    </>
  );
});
