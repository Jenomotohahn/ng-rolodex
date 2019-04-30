import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.service";

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
  constructor(private backend: BackendService) {}
}
