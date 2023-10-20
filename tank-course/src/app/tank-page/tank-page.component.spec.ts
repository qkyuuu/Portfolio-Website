import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankPageComponent } from './tank-page.component';

describe('TankPageComponent', () => {
  let component: TankPageComponent;
  let fixture: ComponentFixture<TankPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TankPageComponent]
    });
    fixture = TestBed.createComponent(TankPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
