import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDetenidosComponent } from './detalle-detenidos.component';

describe('DetalleDetenidosComponent', () => {
  let component: DetalleDetenidosComponent;
  let fixture: ComponentFixture<DetalleDetenidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDetenidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDetenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
