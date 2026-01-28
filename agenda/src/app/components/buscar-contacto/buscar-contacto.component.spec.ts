import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarContactoComponent } from './buscar-contacto.component';

describe('BuscarContactoComponent', () => {
  let component: BuscarContactoComponent;
  let fixture: ComponentFixture<BuscarContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarContactoComponent]
    });
    fixture = TestBed.createComponent(BuscarContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
