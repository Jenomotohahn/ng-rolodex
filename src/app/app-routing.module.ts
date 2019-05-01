import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { CreateContactComponent } from "./pages/create/createContact.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "create", component: CreateContactComponent },
  { path: "login", component: LoginComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
