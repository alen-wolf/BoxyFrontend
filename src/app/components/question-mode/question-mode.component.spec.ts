import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionModeComponent } from './question-mode.component';

describe('QuestionModeComponent', () => {
  let component: QuestionModeComponent;
  let fixture: ComponentFixture<QuestionModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
