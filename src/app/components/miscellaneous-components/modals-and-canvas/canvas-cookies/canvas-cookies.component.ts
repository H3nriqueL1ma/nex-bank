import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {CookiesService} from "../../../../services/CookiesService";
import {Modal, Offcanvas} from "bootstrap";

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
  styleUrl: './canvas-cookies.component.scss',
  providers: [CookiesService]
})
export class CanvasCookiesComponent implements AfterViewInit {
  //######### Elementos HTML #########
  @ViewChild("canvas") canvasElement!: ElementRef;
  @ViewChild("modalCookies") modalElement!: ElementRef;

  @ViewChild("closeCookies") buttonCloseCookies!: ElementRef;
  @ViewChild("closeSettings") buttonCloseSettings!: ElementRef;

  @ViewChild("settingsCookies") buttonSettingsCookies!: ElementRef;
  @ViewChild("rejectCookies") buttonRejectCookies!: ElementRef;
  @ViewChild("acceptCookies") buttonAcceptCookies!: ElementRef;

  @ViewChild("checkBoxFunctionality") inputCheckBoxFunctionality!: ElementRef;
  @ViewChild("saveSettingsCookies") buttonSaveSettings!: ElementRef;

  //######### Instâncias dos Elementos #########
  private canvasInstance?: Offcanvas;
  private modalInstance?: Modal;

  constructor(private cookiesService: CookiesService) {
  }

  //######### Objeto de preferências dos Cookies - chave String/valor Boolean #########
  protected preferences: { [key: string]: boolean } = {
    necessary: true,
    functionality: false
  }

  ngAfterViewInit(): void {
    if (!this.preferences["funcionality"]) {
      setTimeout((): void => {
        this.showCanvasCookies();
      }, 3000);
    }

    this.buttonCloseCookies.nativeElement.addEventListener("click", (): void => {
      this.hideCanvasCookies();
    });

    this.buttonSettingsCookies.nativeElement.addEventListener("click", (): void => {
      this.showModalSettings();
    });

    this.buttonCloseSettings.nativeElement.addEventListener("click", (): void => {
      this.hideModalSettings();
    });

    this.buttonRejectCookies.nativeElement.addEventListener("click", (): void => {
      this.cookiesService.rejectCookies(this.preferences);
      this.hideCanvasCookies();

      console.log(this.preferences)
    });

    this.buttonAcceptCookies.nativeElement.addEventListener("click", (): void => {
      this.cookiesService.acceptCookies(this.preferences);
      this.hideCanvasCookies();

      console.log(this.preferences)
    });

    if (this.preferences["functionality"]) {
      this.inputCheckBoxFunctionality.nativeElement.setAttribute("checked", "checked");
    } else {
      this.inputCheckBoxFunctionality.nativeElement.removeAttribute("checked");
    }

    this.buttonSaveSettings.nativeElement.addEventListener("click", (): void => {
      this.cookiesService.saveCookiesSettings(this.preferences);
      this.hideModalSettings();
      this.hideCanvasCookies();

      console.log(this.preferences)
    });

    this.initializeCanvas();
    this.initializeModal();
  }

  initializeCanvas(): void {
    this.canvasInstance = new Offcanvas(this.canvasElement.nativeElement);
  }

  initializeModal(): void {
    this.modalInstance = new Modal(this.modalElement.nativeElement);
  }

  showCanvasCookies(): void {
    if (this.canvasInstance) {
      this.canvasInstance.show();
    }
  }

  hideCanvasCookies(): void {
    if (this.canvasInstance) {
      this.canvasInstance.hide();
    }
  }

  showModalSettings(): void {
    if (this.modalInstance) {
      this.modalInstance.show();
    }
  }

  hideModalSettings(): void {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }

  //######### Alteração do valor da preferência #########
  handlePreferenceChange(preferency: string): void {
    this.preferences = {
      ...this.preferences, //Atributos atuais das preferências
      [preferency]: !this.preferences[preferency] //O valor da preferência será o inverso do atual (Caso true, será false. E assim por diante)
    }
  }
}
