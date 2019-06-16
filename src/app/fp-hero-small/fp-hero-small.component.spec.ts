import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpHeroSmallComponent } from './fp-hero-small.component';

describe('FpHeroSmallComponent', () => {
  let component: FpHeroSmallComponent;
  let fixture: ComponentFixture<FpHeroSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpHeroSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpHeroSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
