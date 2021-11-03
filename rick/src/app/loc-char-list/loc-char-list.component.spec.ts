import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocCharListComponent } from './loc-char-list.component';

describe('LocCharListComponent', () => {
  let component: LocCharListComponent;
  let fixture: ComponentFixture<LocCharListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocCharListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocCharListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
