import { RouteNavigate } from "@builder.io/qwik-city";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";

interface CreateWishboxResponse {
  [x: string]: any;
  link: string;
  id: number;
}

export interface Wishbox {
  wishbox_id: number;
  wishbox_end_date: string;
  wishbox_name: string;
  link: string;
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
    return this;
  }

  static getWishboxes(
    signal: AbortController
  ): Promise<AxiosResponse<{ data: Wishbox }>> | undefined {
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
      return axios.post(this.url + "/create/wishbox", bodyData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        },
      });
    }
    return undefined;
  }

  static deleteWishbox(
    wishbox_id: number
  ): Promise<AxiosResponse<{ data: Wishbox }>> | undefined {
    if (this.token) {
      return axios.delete(this.url + "/delete/wishbox", {
        data: {
          id: wishbox_id,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        },
      });
    }
    return undefined;
  }

  static createWishes(
    wish_name: string,
    wishbox_id: number,
    wish_link: string,
    price: string,
  ): Promise<boolean> | undefined {
    if (this.token) {
      const bodyData = {
        wish_name,
        wishbox_id,
        wish_link,
        price,
      };
      return axios.post(this.url + "/create/wishes", bodyData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        },
      });
    }
    return undefined;
  }

  static deleteWishes(wish_id: number) {
    if (this.token) {
      return axios.delete(this.url + "/delete/wishes", {
        data: {
          id: wish_id,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        },
      });
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
