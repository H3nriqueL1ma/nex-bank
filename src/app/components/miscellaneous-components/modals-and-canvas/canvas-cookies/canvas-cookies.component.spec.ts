import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasCookiesComponent } from './canvas-cookies.component';

describe('CanvasCookiesComponent', () => {
  let component: CanvasCookiesComponent;
  let fixture: ComponentFixture<CanvasCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasCookiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
