import { Component } from "@angular/core";

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
  constructor() {}
}
