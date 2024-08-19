import { Routes } from '@angular/router';
import {HomePageComponent} from "./components/pages/home-page/home-page.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  //{ path: "login" },
  //{ path: "registre-se" }
];
