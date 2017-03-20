import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightLogComponent } from './flight-log.component';

describe('FlightLogComponent', () => {
  let component: FlightLogComponent;
  let fixture: ComponentFixture<FlightLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
