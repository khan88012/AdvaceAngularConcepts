import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableVpromiseComponent } from './observable-vpromise.component';

describe('ObservableVpromiseComponent', () => {
  let component: ObservableVpromiseComponent;
  let fixture: ComponentFixture<ObservableVpromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableVpromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableVpromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
