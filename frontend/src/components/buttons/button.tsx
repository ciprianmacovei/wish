import { component$, $ } from "@builder.io/qwik";

interface ButtonProps {
  background?: string;
  color?: string;
  onClick?: () => void;
  text?: string;
  w?: string;
  h?: string;
}

export const Button = component$(
  ({ background = "#000000", color="white", onClick, text, w = "auto", h = "auto" }: ButtonProps) => {

    const myOnClick = $(() => {
      onClick ? onClick() : null;
    }); 

    return (
      <>
        <button
          onClick$={myOnClick}
          class={
            `bg-[${background}] w-[${w}] h-[${h}] text-${color} border-solid border-[1px] border-black rounded-[4px] py-[0.8em] px-[2em] duration-200 hover:text-black hover:bg-[#ff90e8] hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[0.25rem_0.25rem_black] active:translate-0 active:shadow-none`
          }
        >
          {text}
        </button>
      </>
    );
  }
);
