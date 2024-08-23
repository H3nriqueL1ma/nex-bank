import { Component } from '@angular/core';
import {ErrorModalComponent} from "../../errors-animations-functions/error-modal/error-modal.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ErrorModalComponent,
    RouterLink
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
