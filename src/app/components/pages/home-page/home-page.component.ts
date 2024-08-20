import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {MenuComponent} from "../../miscellaneous-components/pages-components/menu/menu.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FooterComponent} from "../../miscellaneous-components/pages-components/footer/footer.component";
import {BenefitsComponent} from "../../sections-home/benefits/benefits.component";
import {DoubtsComponent} from "../../sections-home/doubts/doubts.component";
import {
  CanvasCookiesComponent
} from "../../miscellaneous-components/modals-and-canvas/canvas-cookies/canvas-cookies.component";

//######### Componente da página Home #########

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MenuComponent,
    RouterLink,
    RouterLinkActive,
    FooterComponent,
    BenefitsComponent,
    DoubtsComponent,
    CanvasCookiesComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {}
