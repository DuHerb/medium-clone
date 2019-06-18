import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpMainContentComponent } from './fp-main-content.component';

describe('FpMainContentComponent', () => {
  let component: FpMainContentComponent;
  let fixture: ComponentFixture<FpMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
