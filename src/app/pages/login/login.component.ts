import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  loginFormData: {
    email: string;
    password: string;
  } = {
    email: "",
    password: ""
  };
  constructor(private auth: AuthService) {}
  login() {
    this.auth.login(this.loginFormData);
    // .then(() => {
    //   console.log("user logged in");
    // })
    // .catch(err => {
    //   console.log(err);
    // });
  }
}
