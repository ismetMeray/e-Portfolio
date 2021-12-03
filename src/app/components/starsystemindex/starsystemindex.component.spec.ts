import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsystemindexComponent } from './starsystemindex.component';

describe('StarsystemindexComponent', () => {
  let component: StarsystemindexComponent;
  let fixture: ComponentFixture<StarsystemindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarsystemindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsystemindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
