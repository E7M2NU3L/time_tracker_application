import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualLoggerComponent } from './manual-logger.component';

describe('ManualLoggerComponent', () => {
  let component: ManualLoggerComponent;
  let fixture: ComponentFixture<ManualLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualLoggerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
