import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {
  NgbAccordionBody,
  NgbAccordionButton, NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem
} from "@ng-bootstrap/ng-bootstrap";

//######### Componente Seção Dúvidas #########

@Component({
  selector: 'app-doubts',
  standalone: true,
  imports: [
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionHeader,
    NgbAccordionButton,
    NgbAccordionCollapse,
    NgbAccordionBody
  ],
  templateUrl: './doubts.component.html',
  styleUrl: './doubts.component.scss'
})
export class DoubtsComponent {
}
