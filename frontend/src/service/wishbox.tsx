import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config();

interface CreateWishboxResponse {
  link: string;
  id: number;
}

interface Wishbox {
  id: number;
  wishbox_end_date: string;
  wishbox_name: string;
  wishes: Array<Wishes>;
}

interface Wishes {
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
  static getWishboxes(): Promise<Array<Wishbox>> {
    return axios.get(process.env.APP_URL + "/login/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  static createWishbox(
    wishbox_end_date: string,
    wishbox_name: string
  ): Promise<CreateWishboxResponse> {
    const bodyData: string = JSON.stringify({
      wishbox_end_date,
      wishbox_name,
    });
    return axios.post(
      process.env.APP_URL + "/create/wishbox",
      { body: bodyData },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  }

  static createWishes(
    password: string,
    email: string,
    username: string
  ): Promise<boolean> {
    const bodyData: string = JSON.stringify({
      email,
      username,
      password,
    });
    return axios.post(
      process.env.APP_URL + "/register/",
      { body: bodyData },
      { headers: { "Content-Type": "application/json" } }
    );
  }
}
