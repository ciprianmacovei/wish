import axios, { AxiosResponse } from "axios";

export default class AuthService {
  static url = "http://localhost/api";

  static login(password: string, email: string): Promise<AxiosResponse> {
    const bodyData = {
      email,
      password,
    };
    return axios.post(this.url + "/login", bodyData, {
      headers: { "Content-Type": "application/json" },
    });
  }

  static register(password: string, email: string): Promise<AxiosResponse> {
    const bodyData = {
      email,
      password,
    };
    return axios.post(this.url + "/register", bodyData, {
      headers: { "Content-Type": "application/json" },
    });
  }

  static registerConfirmed(token: string): Promise<AxiosResponse> {
    return axios.get(this.url + `/register/${token}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
