import { component$, $, useStore, QwikChangeEvent, useContext } from "@builder.io/qwik";
import { DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import { Button } from "~/components/buttons/button";
import { FormControl } from "~/components/form-control/form-control";
import { applicationContext } from "~/context/context";
import AuthService from "~/service/auth";
import {
  CONFIRM_PASSWORD_DOSE_NOT_MATCH,
  CONFIRM_PASSWORD_REQUIRED,
  EMAIL_INVALID,
  EMAIL_REGEX,
  EMAIL_REQUIRED,
  PASSWORD_INVALID_LENGTH,
  PASSWORD_REQUIRED,
} from "~/validators/validators";

export default component$(() => {
  const applicationState = useContext(applicationContext);
  const registerState = useStore({
    email: "",
    emailValidation: false,
    emailValidationErrorMessage: "",
    password: "",
    passwordValidation: false,
    passwordValidationErrorMessage: "",
    confirmPassword: "",
    confirmPasswordValidation: false,
    confirmPasswordValidationErrorMessage: "",
    disabledRegisterButton: false,
  });
  const navigation = useNavigate();

  const getPassword = $((Event: QwikChangeEvent<HTMLInputElement>) => {
    registerState.password = Event.target.value;
    if (Event.target.value.length === 0) {
      registerState.passwordValidation = true;
      registerState.passwordValidationErrorMessage = PASSWORD_REQUIRED;
    } else if (Event.target.value.length < 8) {
      registerState.passwordValidation = true;
      registerState.passwordValidationErrorMessage = PASSWORD_INVALID_LENGTH;
    } else {
      registerState.passwordValidation = false;
      registerState.passwordValidationErrorMessage = "";
    }
  });

  const getConfirmPassword = $((Event: QwikChangeEvent<HTMLInputElement>) => {
    registerState.confirmPassword = Event.target.value;
    if (Event.target.value.length === 0) {
      registerState.confirmPasswordValidation = true;
      registerState.confirmPasswordValidationErrorMessage = PASSWORD_REQUIRED;
    } else if (Event.target.value.length < 8) {
      registerState.confirmPasswordValidation = true;
      registerState.confirmPasswordValidationErrorMessage =
        PASSWORD_INVALID_LENGTH;
    } else if (Event.target.value !== registerState.password) {
      registerState.confirmPasswordValidation = true;
      registerState.confirmPasswordValidationErrorMessage =
        CONFIRM_PASSWORD_DOSE_NOT_MATCH;
    } else {
      registerState.confirmPasswordValidation = false;
      registerState.confirmPasswordValidationErrorMessage = "";
    }
  });

  const getEmail = $((Event: QwikChangeEvent<HTMLInputElement>) => {
    const emailRegex = EMAIL_REGEX;
    registerState.email = Event.target.value;
    if (Event.target.value.length === 0) {
      registerState.emailValidation = true;
      registerState.emailValidationErrorMessage = EMAIL_REQUIRED;
    } else if (!emailRegex.test(Event.target.value)) {
      registerState.emailValidation = true;
      registerState.emailValidationErrorMessage = EMAIL_INVALID;
    } else {
      registerState.emailValidation = false;
      registerState.emailValidationErrorMessage = "";
    }
  });

  const register = $(async () => {
    let passMatch = false;

    if (!registerState.email) {
      registerState.emailValidation = true;
      registerState.emailValidationErrorMessage = EMAIL_REQUIRED;
    }

    if (!registerState.password) {
      registerState.passwordValidation = true;
      registerState.passwordValidationErrorMessage = PASSWORD_REQUIRED;
    }

    if (!registerState.confirmPassword) {
      registerState.confirmPasswordValidation = true;
      registerState.confirmPasswordValidationErrorMessage =
        CONFIRM_PASSWORD_REQUIRED;
    }

    if (
      registerState.confirmPassword !== registerState.password &&
      registerState.confirmPassword &&
      registerState.password
    ) {
      registerState.confirmPasswordValidation = true;
      registerState.confirmPasswordValidationErrorMessage =
        CONFIRM_PASSWORD_DOSE_NOT_MATCH;
      passMatch = false;
    } else if (
      registerState.confirmPassword === registerState.password &&
      registerState.confirmPassword &&
      registerState.password
    ) {
      passMatch = true;
    }

    if (registerState.password && registerState.email && passMatch) {
      try {
        applicationState.loading = true;
        registerState.disabledRegisterButton = true;
        const response: AxiosResponse = await AuthService.register(
          registerState.password,
          registerState.email
        );
        applicationState.loading = false;
        Swal.fire({
          title: "Registration successful!",
          text: response.data.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigation("/login/");
      } catch (error: any) {
        applicationState.loading = false;
        registerState.disabledRegisterButton = false;
        if (error) {
          Swal.fire({
            title: "Registration failed!",
            text: error.response.data.message,
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      }
    }
  });

  return (
    <div class="h-[100vh] w-[100vw]">
      <section class="w-full h-full flex flex-col justify-center items-center bg-[url('/images/landingpage.png')] bg-cover">
        <section class="w-[623px] h-[684px] bg-[#FFF5FA] text-black flex flex-col items-center justify-center gap-[20px]">
          <section class="w-2/3">
            <article>
              <p class="font-bold text-center text-[32px] py-4">
                Creaza un cont nou
              </p>
            </article>
            <section class="flex flex-col gap-4">
              <article>
                <FormControl
                  type="text"
                  name="register_email"
                  id="register_email"
                  label="Adresa de email"
                  onEvent={getEmail}
                  validationError={registerState.emailValidation}
                  validationMessage={registerState.emailValidationErrorMessage}
                />
              </article>
              <article>
                <FormControl
                  type="password"
                  name="register_password"
                  id="register_password"
                  label="Parola"
                  onEvent={getPassword}
                  validationError={registerState.passwordValidation}
                  validationMessage={
                    registerState.passwordValidationErrorMessage
                  }
                />
              </article>
              <article>
                <FormControl
                  type="password"
                  name="register_confirm_password"
                  id="register_confirm_password"
                  label="Confirmare Parola"
                  onEvent={getConfirmPassword}
                  validationError={registerState.confirmPasswordValidation}
                  validationMessage={
                    registerState.confirmPasswordValidationErrorMessage
                  }
                />
              </article>
              <article class="w-full flex justify-center items-center">
                <Button
                  w="280px"
                  text="Creaza un cont nou"
                  onClick={register}
                  disabled={registerState.disabledRegisterButton}
                />
              </article>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Wisher Profile",
  meta: [
    {
      name: "description",
      content:
        "This is the main page where u can create your wishes and share with others.",
    },
  ],
};
