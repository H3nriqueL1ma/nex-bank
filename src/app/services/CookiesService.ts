import {CookieService} from "ngx-cookie-service";

export class CookiesService {

  constructor(private cookieService: CookieService) {
  }

  //######### Método de aceitação de Cookies, que também faz o canvas sumir após aceitar #########
  acceptCookies(): void {
    this.cookieService.set("cookieConsent", "accepted", 365);
    this.hideCanvasCookies();
  }

  //######### Método de rejeição de Cookies #########
  rejectCookies(): void {
    this.cookieService.set("cookiesConsent", "rejected", 365);
    this.hideCanvasCookies();

    for (let key in this.preferences) {
      if (key !== "necessary") { //Se a Key não for Necessary, irá ser deletada
        this.cookieService.delete(key);
      }
    }
  }

  //######### Salvamento de configurações customizadas de Cookies #########
  saveCookiesSettings(): void {
    for (let key in this.preferences) {
      if (this.preferences[key]) { //Se o valor da Key for true, o valor da Key será setado nos Cookies
        this.cookieService.set(key, "true", 365);
      } else {
        this.cookieService.delete(key);
      }
    }

    this.cookieService.set("cookieConsent", "custom", 365);
    this.hideCanvasCookies();
  }

  //######### Alteração do valor da preferência #########
  handlePreferenceChange(preferency: string): void {
    this.preferences = {
      ...this.preferences, //Atributos atuais das preferências
      [preferency]: !this.preferences[preferency] //O valor da preferência será o inverso do atual (Caso true, será false. E assim por diante)
    }
  }
}
