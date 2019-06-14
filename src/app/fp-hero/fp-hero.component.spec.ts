import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpHeroComponent } from './fp-hero.component';

describe('FpHeroComponent', () => {
  let component: FpHeroComponent;
  let fixture: ComponentFixture<FpHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
