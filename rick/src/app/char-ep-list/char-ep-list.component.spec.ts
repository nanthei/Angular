import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharEpListComponent } from './char-ep-list.component';

describe('CharEpListComponent', () => {
  let component: CharEpListComponent;
  let fixture: ComponentFixture<CharEpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharEpListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharEpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
