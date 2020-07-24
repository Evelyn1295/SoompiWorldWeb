import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdolgroupComponent } from './idolgroup.component';

describe('IdolgroupComponent', () => {
  let component: IdolgroupComponent;
  let fixture: ComponentFixture<IdolgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdolgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdolgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
