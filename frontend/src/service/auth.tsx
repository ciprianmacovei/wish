import * as dotenv from 'dotenv'
import axios from "axios";

dotenv.config()

interface ResLogin {
  token: string;
}

export default class AuthService {

  static login(password: string, email?: string, username?: string): Promise<ResLogin> {
    const bodyData: string = JSON.stringify({
      email,
      username,
      password,
    });
    return axios.post(
      process.env.APP_URL + "/login/",
      { body: bodyData },
      { headers: { "Content-Type": "application/json" } }
    );
  }

  static register(password: string, email: string, username: string): Promise<boolean> {
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
