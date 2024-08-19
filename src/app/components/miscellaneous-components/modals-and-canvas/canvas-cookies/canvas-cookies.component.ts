import {AfterViewInit, Component} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-canvas-cookies',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './canvas-cookies.component.html',
  styleUrl: './canvas-cookies.component.scss'
})
export class CanvasCookiesComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const canvasElement: HTMLElement = <HTMLElement>document.querySelector(".offcanvas");
    const buttonClose: HTMLElement = <HTMLElement>document.querySelector(".btn-close");

    setTimeout(() => {
      canvasElement.classList.add("hiding");
      canvasElement.classList.remove("hiding");
      canvasElement.classList.add("show");
    }, 3000);

    buttonClose.addEventListener("click", () => {
      canvasElement.classList.remove("show");
      canvasElement.classList.add("hiding");

      setTimeout(() => {
        canvasElement.classList.remove("hiding");
      }, 500);
    });
  }
}
