import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaNominaMensualPage } from './consulta-nomina-mensual.page';

describe('ConsultaNominaMensualPage', () => {
  let component: ConsultaNominaMensualPage;
  let fixture: ComponentFixture<ConsultaNominaMensualPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsultaNominaMensualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
