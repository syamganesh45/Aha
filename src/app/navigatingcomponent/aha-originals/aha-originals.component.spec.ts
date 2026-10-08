import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhaOriginalsComponent } from './aha-originals.component';

describe('AhaOriginalsComponent', () => {
  let component: AhaOriginalsComponent;
  let fixture: ComponentFixture<AhaOriginalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhaOriginalsComponent]
    });
    fixture = TestBed.createComponent(AhaOriginalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
