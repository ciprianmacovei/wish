import { Slot, component$, useBrowserVisibleTask$, useContext } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { userContext } from "~/context/context";

export const GuardLayout = component$(() => {
  const nagivation = useNavigate();
  const userState = useContext(userContext)
  useBrowserVisibleTask$(() => {
    if (!userState.email && !userState.token) {
      nagivation("/login");
    }
  });

  return <Slot />;
});
