import { component$, $ } from "@builder.io/qwik";

type ButtonSizeType = 'sm' | 'md' | 'lg'; 
interface ButtonProps {
  background?: string;
  color?: string;
  onClick?: () => void;
  text?: string;
  w?: string;
  h?: string;
  disabled?: boolean;
  size?: ButtonSizeType;
}

export const Button = component$(
  ({
    background = "#000000",
    color = "white",
    onClick,
    text,
    w = "auto",
    h = "auto",
    disabled,
    size = 'lg'
  }: ButtonProps) => {
    const myOnClick = $(() => {
      onClick ? onClick() : null;
    });

    return (
      <>
        <button
          disabled={disabled}
          onClick$={myOnClick}
          class={`${
            disabled
              ? "bg-gray-400 cursor-not-allowed hover:bg-grey-400"
              : `bg-[${background}] hover:bg-[#ff90e8]`
          } w-[${w}] h-[${h}] text-${color} border-solid border-[1px] border-black rounded-[4px] ${size === 'lg' ? 'py-[0.8em]' : size === 'md' ? 'py-[0.4em]' : 'py-[0.2em]' } ${size === 'lg' ? 'px-[2em]' : size === 'md' ? 'px-[1em]' : 'px-[0.5em]' } duration-200 hover:text-black hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[0.25rem_0.25rem_black] active:translate-0 active:shadow-none`}
        >
          {text}
        </button>
      </>
    );
  }
);
