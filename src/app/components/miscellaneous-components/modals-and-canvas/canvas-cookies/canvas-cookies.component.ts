import {AfterViewInit, Component} from '@angular/core';
import {NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-canvas-cookies',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './canvas-cookies.component.html',
  styleUrl: './canvas-cookies.component.scss'
})
export class CanvasCookiesComponent implements AfterViewInit {
  private canvasElement: HTMLElement = <HTMLElement>document.querySelector("#canvas");
  private buttonCloseCookies: HTMLElement = <HTMLElement>document.querySelector("#close-cookies");
  private modalElement: HTMLElement = <HTMLElement>document.querySelector("#modal-cookies");
  private buttonCloseSettings: HTMLElement = <HTMLElement>document.querySelector("#close-settings");

  private preferences: { [key: string]: boolean } = {
    necessary: true,
    functionality: false
  }

  constructor(private cookieService: CookieService) {
  }

  acceptCookies(): void {
    this.cookieService.set("cookieConsent", "accepted", 365);
    this.hideCanvasCookies();
  }

  rejectCookies(): void {
    this.cookieService.set("cookiesConsent", "rejected", 365);
    this.hideCanvasCookies();

    for (let key in this.preferences) {
      if (key !== "necessary") {
        this.cookieService.delete(key);
      }
    }
  }

  saveCookiesSettings(): void {
    for (let key in this.preferences) {
      if (this.preferences[key]) {
        this.cookieService.set(key, "true", 365);
      } else {
        this.cookieService.delete(key);
      }
    }

    this.cookieService.set("cookieConsent", "custom", 365);
    this.hideCanvasCookies();
  }

  handlePreferenceChange(type: string): void {
    this.preferences = {
      ...this.preferences,
      [type]: !this.preferences[type]
    }
  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      this.showCanvasCookies();
    }, 3000);

    this.buttonCloseCookies.addEventListener("click", () => {
      this.hideCanvasCookies();
    });
  }

  showCanvasCookies(): void {
    this.canvasElement.classList.add("hiding");
    this.canvasElement.classList.remove("hiding");
    this.canvasElement.classList.add("show");
  }

  hideCanvasCookies(): void {
    this.canvasElement.classList.remove("show");
    this.canvasElement.classList.add("hiding");

    setTimeout(() => {
      this.canvasElement.classList.remove("hiding");
    }, 3000);
  }

  showModalSettings(): void {

  }
}
