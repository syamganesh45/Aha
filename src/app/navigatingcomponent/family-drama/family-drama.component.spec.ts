import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyDramaComponent } from './family-drama.component';

describe('FamilyDramaComponent', () => {
  let component: FamilyDramaComponent;
  let fixture: ComponentFixture<FamilyDramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilyDramaComponent]
    });
    fixture = TestBed.createComponent(FamilyDramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
