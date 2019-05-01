import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SessionService {
  constructor() {}
  setSession(user: { username: string }) {
    //save to memory first
    this.user.username = user.username;
    // this.user.loggedIn = true;
    let userString = JSON.stringify(this.user);
    window.localStorage.setItem("user", userString);
    this._isLoggedInSubject.next(true);
  }
}
