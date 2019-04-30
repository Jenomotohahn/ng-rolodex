import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BackendService {
  url: string = "http://localhost:4200";
  constructor(private http: HttpClient) {}

  getContacts(id) {
    const endpoint = this.url + `/api/contacts/${id}`;
    return this.http.get(endpoint).toPromise();
  }
  addContact(contact) {
    const endpoint = this.url + "/api/create";
    return this.http.post(endpoint, contact).toPromise();
  }
}
