import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Register } from "./register/register";

@Component({
  selector: 'app-account',
  imports: [RouterOutlet, Login, Register],
  templateUrl: './account.html',
  styleUrl: './account.css'
})
export class Account {

}
