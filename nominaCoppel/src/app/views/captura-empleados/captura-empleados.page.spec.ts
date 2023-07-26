import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapturaEmpleadosPage } from './captura-empleados.page';

describe('CapturaEmpleadosPage', () => {
  let component: CapturaEmpleadosPage;
  let fixture: ComponentFixture<CapturaEmpleadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CapturaEmpleadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
