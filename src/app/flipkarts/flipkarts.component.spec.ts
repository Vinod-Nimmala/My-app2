import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartsComponent } from './flipkarts.component';

describe('FlipkartsComponent', () => {
  let component: FlipkartsComponent;
  let fixture: ComponentFixture<FlipkartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
