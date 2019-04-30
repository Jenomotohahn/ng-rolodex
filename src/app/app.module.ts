import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app/app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { LoginComponent } from "./pages/login/login.component";
import { NewUserComponent } from "./pages/newUser/newUser.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./pages/home/home.component";
import { CreateContactComponent } from "./pages/create/createContact.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NewUserComponent,
    HomeComponent,
    CreateContactComponent
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
