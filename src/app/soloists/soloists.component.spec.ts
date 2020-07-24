import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloistsComponent } from './soloists.component';

describe('SoloistsComponent', () => {
  let component: SoloistsComponent;
  let fixture: ComponentFixture<SoloistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
