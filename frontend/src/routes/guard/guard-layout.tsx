import { Slot, component$, useVisibleTask$, useContext } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { userContext } from "~/context/context";

export const GuardLayout = component$(() => {
  const nagivation = useNavigate();
  const userState = useContext(userContext)
  useVisibleTask$(() => {
    if (!userState.email && !userState.token) {
      nagivation("/login");
    }
  });

  return <Slot />;
});
