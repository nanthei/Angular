import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpCharListComponent } from './ep-char-list.component';

describe('EpCharListComponent', () => {
  let component: EpCharListComponent;
  let fixture: ComponentFixture<EpCharListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpCharListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpCharListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
