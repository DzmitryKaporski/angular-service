import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterHostComponent } from './counter-host.component';

describe('CounterHostComponent', () => {
  let component: CounterHostComponent;
  let fixture: ComponentFixture<CounterHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
