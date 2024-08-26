import { Component } from '@angular/core';
import {ErrorModalComponent} from "../../errors-animations-functions/error-modal/error-modal.component";
import {RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective} from "ngx-mask";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ErrorModalComponent,
    RouterLink,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgClass
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  formLogin: FormGroup;
  isPasswordVisible: Boolean = false;

  constructor() {
    this.formLogin = new FormGroup({
      CPF_login: new FormControl(""),
      pass_login: new FormControl(""),

    })
  }

  onSubmit() {

  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
