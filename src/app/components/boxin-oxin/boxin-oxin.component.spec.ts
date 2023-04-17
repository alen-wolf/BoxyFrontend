import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxinOxinComponent } from './boxin-oxin.component';

describe('BoxinOxinComponent', () => {
  let component: BoxinOxinComponent;
  let fixture: ComponentFixture<BoxinOxinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxinOxinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxinOxinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
