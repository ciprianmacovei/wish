import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import styles from "./login.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return <>asdasd asdasdasdsadsadasdasxxxx</>;
});

export const head: DocumentHead = {
  title: "Login",
};
