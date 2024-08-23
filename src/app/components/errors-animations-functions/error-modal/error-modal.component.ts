import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Modal} from "bootstrap";

@Component({
  selector: 'app-error-modal',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.scss'
})
export class ErrorModalComponent {
  @Input() textError: String | undefined;

  @ViewChild("modalError") modalErrorElement!: ElementRef;

  private modalInstance?: Modal;

  setTextError(text: String): void {
    this.textError = text;
  }

  initializeModal(): void {
    this.modalInstance = new Modal(this.modalErrorElement.nativeElement)
  }

  showModalError(): void {
    if (this.modalInstance) {
      this.modalInstance.show();
    }
  }

  hideModalError(): void {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }
}
