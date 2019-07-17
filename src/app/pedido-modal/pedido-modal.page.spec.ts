import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoModalPage } from './pedido-modal.page';

describe('PedidoModalPage', () => {
  let component: PedidoModalPage;
  let fixture: ComponentFixture<PedidoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
