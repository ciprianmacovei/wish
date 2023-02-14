import { RouteNavigate } from "@builder.io/qwik-city";
import axios from "axios";
import Swal from "sweetalert2";

interface CreateWishboxResponse {
  link: string;
  id: number;
}

export interface Wishbox {
  id: number;
  wishbox_end_date: string;
  wishbox_name: string;
  wishes: Array<Wishes>;
}

export interface Wishes {
  id: number;
  wish_name: string;
  wish_link: string | null;
  wish_taken: 0 | 1;
  wishbox_img_url: string;
  likes: number;
  price: number;
  contributors_price: number;
}

export default class WishboxService {
  static url = "http://localhost/api";
  static token: string | undefined;

  static setToken() {
    if (this.token === undefined) {
      if (sessionStorage.getItem("token")) {
        this.token = sessionStorage.getItem("token") as string;
      }
      if (localStorage.getItem("token")) {
        this.token = localStorage.getItem("token") as string;
      }
    }
    return this
  }

  static getWishboxes(signal: AbortController): Promise<Array<Wishbox>> | undefined {
    if (this.token) {
      return axios.get(this.url + "/wishbox", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        },
        signal: signal?.signal,
      });
    }
    return undefined;
  }

  static createWishbox(
    wishbox_end_date: string,
    wishbox_name: string
  ): Promise<CreateWishboxResponse> | undefined {
    if (this.token) {
      const bodyData = {
        wishbox_end_date,
        wishbox_name,
      };
      return axios.post(
        this.url + "/create/wishbox",
        bodyData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    }
    return undefined;
  }

  static createWishes(
    password: string,
    email: string,
    username: string
  ): Promise<boolean> | undefined {
    if (this.token) {
      const bodyData = {
        email,
        username,
        password,
      }
      return axios.post(
        this.url + "/register",
        bodyData,
        { headers: { "Content-Type": "application/json" } }
      );
    }
    return undefined;
  }

  static noTokenRequest(navigation: RouteNavigate): void {
    if (!this.token) {
      navigation("/login/");
      Swal.fire({
        title: "Your login credentials have expired!",
        text: "Please login again!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  }
}
