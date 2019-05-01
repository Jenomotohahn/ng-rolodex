import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create",
  templateUrl: "./createContact.component.html",
  styleUrls: ["./createContact.component.scss"]
})
export class CreateContactComponent {
  newContact: {
    first_name: string;
    last_name: string;
    email: string;
    address: string;
    mobile: string;
    work_phone: string;
    home_phone: string;
    notes: string;
  } = {
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    mobile: "",
    work_phone: "",
    home_phone: "",
    notes: ""
  };
  constructor(private backend: BackendService, private router: Router) {}
  createNew() {
    console.log("hello");
    this.backend
      .addContact(this.newContact)
      .then(() => {
        const id = 1; //NEED TO CHANGE THIS TO DYNAMIC somehow....!!!
        console.log("new contact added");
        this.router.navigate([`/home`]);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
