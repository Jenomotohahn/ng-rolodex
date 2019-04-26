import { Injectable } from "@angular/core";
import { BackendService } from "./backend.service";
import { SessionService } from "./session.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private backend: BackendService,
    private session: SessionService
  ) {}
}