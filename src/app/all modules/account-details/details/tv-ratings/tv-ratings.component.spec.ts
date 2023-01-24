import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvRatingsComponent } from './tv-ratings.component';

describe('TvRatingsComponent', () => {
  let component: TvRatingsComponent;
  let fixture: ComponentFixture<TvRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvRatingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
