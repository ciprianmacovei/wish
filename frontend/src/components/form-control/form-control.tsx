import {
  QwikChangeEvent,
  component$,
  $,
  useSignal,
  useStore,
} from "@builder.io/qwik";

interface FormControlType {
  id: string;
  label: string;
  type: string;
  name: string;
  onEvent: (event: QwikChangeEvent<HTMLInputElement>) => void;
  validationError?: boolean;
  validationMessage?: string;
}
interface FormControlState {
  focused: boolean;
}

export const FormControl = component$(
  ({
    id,
    label,
    type,
    name,
    onEvent,
    validationError,
    validationMessage,
  }: FormControlType) => {
    const formControlState: FormControlState = useStore({
      focused: false,
    });
    const formControlRef = useSignal<HTMLInputElement>();

    const onFocuseIn = $(() => {
      formControlRef.value?.setAttribute("placeholder", "");
      formControlState.focused = true;
    });

    const onFocuseOut = $(() => {
      formControlState.focused = false;
      formControlRef.value?.setAttribute("placeholder", label);
    });

    return (
      <div class="flex flex-col relative font-nuito my-2">
        {formControlState.focused && (
          <label
            class="absolute text-[14px] z-10 font-bold -top-6 left-2 animate-[label_0.2s_linear]"
            for={id}
          >
            {label}
          </label>
        )}
        <input
          ref={formControlRef}
          placeholder={label}
          class={`placeholder:text-black focus:outline-none border-solid border-[1px] ${
            validationError ? "border-red-500" : "border-black"
          }  rounded-[4px] py-[0.4em] px-[1em] duration-200 hover:text-black focus:bg-[#FECE31] focus:translate-x-[-0.25rem] focus:translate-y-[-0.25rem] focus:shadow-[0.25rem_0.25rem_black] active:translate-0 active:shadow-none font-[18px] leading-8 !bg-white`}
          id={id}
          type={type}
          name={name}
          onFocusin$={onFocuseIn}
          onFocusout$={onFocuseOut}
          onChange$={onEvent}
          {...(type === "date" ? { min: "2023-01-01" } : {})}
          {...(type === "date" ? { max: "2025-01-01" } : {})}
          {...(type === "date"
            ? { value: new Intl.DateTimeFormat("en-US").format(new Date()) }
            : {})}
        />
        <section class="h-[11px]">
          {validationMessage && (
            <article>
              <p class="text-red-500 text-[11px]">{validationMessage}</p>
            </article>
          )}
        </section>
      </div>
    );
  }
);
