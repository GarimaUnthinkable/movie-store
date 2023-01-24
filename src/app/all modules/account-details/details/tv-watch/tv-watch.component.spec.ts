import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvWatchComponent } from './tv-watch.component';

describe('TvWatchComponent', () => {
  let component: TvWatchComponent;
  let fixture: ComponentFixture<TvWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvWatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
