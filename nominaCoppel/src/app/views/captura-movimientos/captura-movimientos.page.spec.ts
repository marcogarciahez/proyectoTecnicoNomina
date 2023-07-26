import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapturaMovimientosPage } from './captura-movimientos.page';

describe('CapturaMovimientosPage', () => {
  let component: CapturaMovimientosPage;
  let fixture: ComponentFixture<CapturaMovimientosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CapturaMovimientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
