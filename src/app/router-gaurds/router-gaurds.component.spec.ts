import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterGaurdsComponent } from './router-gaurds.component';

describe('RouterGaurdsComponent', () => {
  let component: RouterGaurdsComponent;
  let fixture: ComponentFixture<RouterGaurdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterGaurdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterGaurdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
