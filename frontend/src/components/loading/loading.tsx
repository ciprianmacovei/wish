import { component$, useContext, useStyles$ } from "@builder.io/qwik";
import styles from "./loading.css?inline";
import { applicationContext } from "~/context/context";

export const Loading = component$(() => {
  useStyles$(styles);
  const appState = useContext(applicationContext);
  return (
    <div>
      {appState.loading && (
        <div class="flex justify-center items-center w-[100vw] h-[100vh] bg-[#FE98CF]/80 fixed top-0 font-nuito z-50">
          <div class="loader bg-white p-5 rounded-full flex space-x-3">
            <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
            <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
            <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
          </div>
        </div>
      )}
    </div>
  );
});
