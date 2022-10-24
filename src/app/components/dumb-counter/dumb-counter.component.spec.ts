import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbCounterComponent } from './dumb-counter.component';

describe('DumbCounterComponent', () => {
  let component: DumbCounterComponent;
  let fixture: ComponentFixture<DumbCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumbCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DumbCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
