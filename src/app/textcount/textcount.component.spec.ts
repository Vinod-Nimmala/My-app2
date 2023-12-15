import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextcountComponent } from './textcount.component';

describe('TextcountComponent', () => {
  let component: TextcountComponent;
  let fixture: ComponentFixture<TextcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextcountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
