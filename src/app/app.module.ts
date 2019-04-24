import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app/app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { LoginComponent } from "./pages/login/login.component";
import { NewUserComponent } from "./pages/newUser/newUser.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NewUserComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
