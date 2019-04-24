import { Component } from "@angular/core";
import { NgModule } from "@angular/core";
import { LoginComponent } from "src/app/pages/login/login.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
@NgModule({
  declarations: [LoginComponent]
})
export class HeaderComponent {
  user: { username: string } = { username: "" };

  constructor() {}
}
