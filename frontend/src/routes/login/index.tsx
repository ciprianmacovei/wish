import {
  component$,
  $,
  useContext,
  useSignal,
  QwikChangeEvent,
  useStore,
} from "@builder.io/qwik";
import { DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { Button } from "~/components/buttons/button";
import { userContext } from "~/context/context";
import Swal from "sweetalert2";

import AuthService from "~/service/auth";
import { FormControl } from "~/components/form-control/form-control";
import { EMAIL_REGEX } from "~/validators/validators";
import { AxiosResponse } from "axios";

export default component$(() => {
  const loginState = useStore({
    email: "",
    password: "",
    emailValidation: false,
    emailValidationErrorMessage: "",
    passwordValidation: false,
    passwordValidationErrorMessage: "",
  });
  const userState = useContext(userContext);
  const navigation = useNavigate();
  const rememberRef = useSignal<HTMLInputElement>();

  const getPassword = $((Event: QwikChangeEvent<HTMLInputElement>) => {
    loginState.password = Event.target.value;
    if (Event.target.value.length === 0) {
      loginState.passwordValidation = true;
      loginState.passwordValidationErrorMessage = "Parola este necompletata";
    } else if (Event.target.value.length < 8) {
      loginState.passwordValidation = true;
      loginState.passwordValidationErrorMessage =
        "Parola ta trebuie sa aiba cel putin 8 caractere";
    } else {
      loginState.passwordValidation = false;
      loginState.passwordValidationErrorMessage = "";
    }
  });

  const getEmail = $((Event: QwikChangeEvent<HTMLInputElement>) => {
    const emailRegex = EMAIL_REGEX;
    loginState.email = Event.target.value;
    if (Event.target.value.length === 0) {
      loginState.emailValidation = true;
      loginState.emailValidationErrorMessage = "Emailul este necompletata";
    } else if (!emailRegex.test(Event.target.value)) {
      loginState.emailValidation = true;
      loginState.emailValidationErrorMessage = "Emailul este invalid";
    } else {
      loginState.emailValidation = false;
      loginState.emailValidationErrorMessage = "";
    }
  });

  const login = $(async () => {
    if (loginState.password && loginState.email) {
      try {
        const response: AxiosResponse = await AuthService.login(
          loginState.password,
          loginState.email
        );
        console.log(rememberRef.value?.value, "success");
        if (rememberRef.value?.checked) {
          localStorage.setItem("email", loginState.email);
          localStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.setItem("email", loginState.email);
          sessionStorage.setItem("token", response.data.token);
        }
        userState.email = loginState.email;
        userState.token = response.data.token;
        navigation("/");
      } catch (error: any) {
        if (error) {
          Swal.fire({
            title: "Login failed!",
            text: error.response.data.message,
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      }
    } else {
      if (!loginState.email) {
        loginState.emailValidation = true;
        loginState.emailValidationErrorMessage = "Emailul este necompletata";
      }
      if (!loginState.password) {
        loginState.passwordValidation = true;
        loginState.passwordValidationErrorMessage = "Parola este necompletata";
      }
    }
  });

  const moveToRegister = $(() => {
    navigation("/register/");
  });

  return (
    <div class="h-[100vh] w-[100vw]">
      <section class="w-full h-full flex flex-col justify-center items-center bg-[url('/images/landingpage.png')] bg-cover">
        <section class="w-[623px] h-[684px] bg-[#FFF5FA] text-black flex flex-col items-center justify-center gap-[20px] p-4">
          <section class="w-2/3">
            <article>
              <p class="font-bold text-center text-[32px] py-4">
                Intra in cont
              </p>
            </article>
            <section class="flex flex-col">
              <article>
                <FormControl
                  name="login_email"
                  type="text"
                  label="Adresa de email"
                  id="login_email"
                  onEvent={getEmail}
                  validationError={loginState.emailValidation}
                  validationMessage={loginState.emailValidationErrorMessage}
                />
              </article>
              <article>
                <FormControl
                  name="password"
                  type="password"
                  label="Parola"
                  id="login_password"
                  onEvent={getPassword}
                  validationError={loginState.passwordValidation}
                  validationMessage={loginState.passwordValidationErrorMessage}
                />
                <article class="flex items-center mb-2">
                  <input
                    ref={rememberRef}
                    type="checkbox"
                    class="checked:bg-[pink] w-[15px] h-[15px] bg-white border-solid border-1 border-[#ddd]"
                  />
                  <p class="font-nuito ml-[4px] text-[12px]">Tine-ma minte</p>
                </article>
              </article>
            </section>
            <section class="flex flex-col justify-center gap-[40px]">
              <article class="flex flex-col justify-center">
                <Button text="Autentifica-te >>" onClick={login} />
                <article class="flex items-center justify-center gap-[4px] mt-[9px]">
                  <img
                    class="w-[11px] h-[11px]"
                    src="/images/smile.png"
                    alt="forghot password smile face"
                  />
                  <p class="text-[13px] font-nuito">Ai uitat parola?</p>
                  <p class="text-[13px] font-nuito font-bold cursor-pointer hover:underline">
                    Apasa aici
                  </p>
                </article>
              </article>
              <p class="text-center">--------------- SAU ---------------</p>
              <Button text="Creaza un cont nou >>" onClick={moveToRegister} />
            </section>
          </section>
        </section>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Login",
};
