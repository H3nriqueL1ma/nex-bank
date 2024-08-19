import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Title} from "@angular/platform-browser";
import {HomePageComponent} from "./components/pages/home-page/home-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "nex-bank-v2";

  constructor(private titleService: Title) {
    titleService.setTitle("Internet Banking Nex | Conta Corrente e cartão sem anuidade")
  }
}
