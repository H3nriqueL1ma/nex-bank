import {CookieService} from "ngx-cookie-service";
import {Injectable} from "@angular/core";

@Injectable()
export class CookiesService {

  constructor(private cookieService: CookieService) {
  }

  //######### Método de aceitação de Cookies, que também faz o canvas sumir após aceitar #########
  acceptCookies(preferences: { [key: string]: boolean }): void {
    this.cookieService.set("cookieConsent", "accepted", 365);

    for (let key in preferences) {
      if (key !== "necessary") { //Se a Key não for Necessary, irá ser confirmada
        preferences[key] = true;
      }
    }
  }

  //######### Método de rejeição de Cookies #########
  rejectCookies(preferences: { [key: string]: boolean }): void {
    this.cookieService.set("cookiesConsent", "rejected", 365);

    for (let key in preferences) {
      if (key !== "necessary") {
        preferences[key] = false;
      }
    }
  }

  //######### Salvamento de configurações customizadas de Cookies #########
  saveCookiesSettings(preferences: { [key: string]: boolean }): void {
    for (let key in preferences) {
      if (preferences[key]) { //Se o valor da Key for true, o valor da Key será setado nos Cookies
        this.cookieService.set(key, "true", 365);
      } else {
        this.cookieService.delete(key);
      }
    }

    this.cookieService.set("cookieConsent", "custom", 365);
  }
}
