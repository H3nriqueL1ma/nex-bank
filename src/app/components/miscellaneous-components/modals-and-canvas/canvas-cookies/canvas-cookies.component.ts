import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

//######### Componente Canvas Cookies da página Home #########

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
  //######### Elementos HTML #########
  @ViewChild("canvas") canvasElement!: ElementRef;
  @ViewChild("modalCookies") modalElement!: ElementRef;

  @ViewChild("closeCookies") buttonCloseCookies!: ElementRef;
  @ViewChild("closeSettings") buttonCloseSettings!: ElementRef;

  @ViewChild("settingsCookies") buttonSettingsCookies!: ElementRef;

  @ViewChild("checkBoxFunctionality") inputCheckBoxFunctionality!: ElementRef;

  //######### Objeto de preferências dos Cookies - chave String/valor Boolean #########
  protected preferences: { [key: string]: boolean } = {
    necessary: true,
    functionality: false
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showCanvasCookies();
    }, 3000);

    this.buttonCloseCookies.nativeElement.addEventListener("click", () => {
      this.hideCanvasCookies();
    });

    this.buttonSettingsCookies.nativeElement.addEventListener("click", () => {
      this.showModalSettings();
    });

    this.buttonCloseSettings.nativeElement.addEventListener("click", () => {
      this.hideModalSettings();
    });

    if (this.preferences["functionality"]) {
      this.inputCheckBoxFunctionality.nativeElement.setAttribute("checked", "checked");
    } else {
      this.inputCheckBoxFunctionality.nativeElement.removeAttribute("checked");
    }
  }

  showCanvasCookies(): void {
    this.canvasElement.nativeElement.classList.add("hiding");
    this.canvasElement.nativeElement.classList.remove("hiding");
    this.canvasElement.nativeElement.classList.add("show");
  }

  hideCanvasCookies(): void {
    this.canvasElement.nativeElement.classList.remove("show");
    this.canvasElement.nativeElement.classList.add("hiding");

    setTimeout(() => {
      this.canvasElement.nativeElement.classList.remove("hiding");
    }, 1500);
  }

  showModalSettings(): void {
    this.modalElement.nativeElement.classList.add("hiding");
    this.modalElement.nativeElement.classList.remove("hiding");
    this.modalElement.nativeElement.classList.add("show");
  }

  hideModalSettings(): void {
    this.modalElement.nativeElement.classList.remove("show");
    this.modalElement.nativeElement.classList.add("hiding");

    setTimeout(() => {
      this.modalElement.nativeElement.classList.remove("hiding");
    }, 1500);
  }


}
