import { Injectable } from "@angular/core";
import { BackendService } from "./backend.service";
import { SessionService } from "./session.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private backend: BackendService,
    private session: SessionService
  ) {}

  register(user: { username: string }) {
    return this.backend.register(user);
  }
  login(user: { email: string; password: string }) {
    console.log("user", user);
    // return this.backend
    //   .login(user)
    //   .then((user: { email: string; password: string }) => {});
  }
}
