import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Footer } from "./shared/footer/footer";
import { Main } from "../main/main";
import { LandingPage } from "../landing.page/landing.page";
import { Account } from "../account/account";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Main, LandingPage, Account],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';

  landingPage = true;
}
