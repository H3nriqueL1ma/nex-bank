import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {CookieService} from "ngx-cookie-service";
import {provideEnvironmentNgxMask} from "ngx-mask";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {LoadingInterceptor} from "./services/Loading/loading.interceptor";
import {LoadingComponent} from "./components/errors-animations-functions/loading/loading.component";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    CookieService,
    provideEnvironmentNgxMask(),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([LoadingInterceptor])), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()
  ]
};
