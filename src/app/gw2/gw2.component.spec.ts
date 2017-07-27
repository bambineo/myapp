import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gw2Component } from './gw2.component';

describe('Gw2Component', () => {
  let component: Gw2Component;
  let fixture: ComponentFixture<Gw2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gw2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gw2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
