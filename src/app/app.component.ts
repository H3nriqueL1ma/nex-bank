import {Component, OnInit, signal} from '@angular/core';
import {NavigationEnd, NavigationStart, Router, RouterOutlet} from '@angular/router';
import {Title} from "@angular/platform-browser";
import {HomePageComponent} from "./components/pages/home-page/home-page.component";
import {NgxSpinnerService} from "ngx-spinner";
import {LoadingService} from "./services/Loading/LoadingService";
import {NgIf} from "@angular/common";
import {LoadingComponent} from "./components/errors-animations-functions/loading/loading.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    LoadingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "nex-bank-v2";

  isLoading = signal(false);

  constructor(private titleService: Title, private router: Router, private loadingService: LoadingService) {
    titleService.setTitle("Internet Banking Nex | Conta Corrente e cartão sem anuidade");

    this.loadingService.loading$.subscribe((loading) => {
      this.isLoading.set(loading);
    })

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loadingService.setLoading(true);
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => this.loadingService.setLoading(false), 1500);
      }
    })
  }
}
