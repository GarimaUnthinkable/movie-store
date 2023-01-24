import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteShowsComponent } from './favourite-shows.component';

describe('FavouriteShowsComponent', () => {
  let component: FavouriteShowsComponent;
  let fixture: ComponentFixture<FavouriteShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
