import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountByComponent } from './count-by.component';

describe('CountByComponent', () => {
  let component: CountByComponent;
  let fixture: ComponentFixture<CountByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountByComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
