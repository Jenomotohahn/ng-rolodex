import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  user: string = "USERNAME!!";
  contactSearch: string = "";
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  mobile: string;
  work_phone: string;
  home_phone: string;
  notes: string;

  userId: number = 1;
  contacts: {
    first_name: string;
    last_name: string;
    email: string;
    address: string;
    mobile: string;
    work_phone: string;
    home_phone: string;
    notes: string;
  }[] = [];

  constructor(private backend: BackendService) {}

  ngOnInit() {
    this.backend
      .getContacts(this.userId)
      .then(
        (
          data: {
            first_name: string;
            last_name: string;
            email: string;
            address: string;
            mobile: string;
            work_phone: string;
            home_phone: string;
            notes: string;
          }[]
        ) => {
          this.contacts = data;
          console.log("this.contacts", this.contacts);
        }
      )
      .catch(err => {
        console.log(err);
      });
  }
}
