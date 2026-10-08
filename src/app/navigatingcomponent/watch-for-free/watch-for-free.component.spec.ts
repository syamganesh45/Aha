import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchForFreeComponent } from './watch-for-free.component';

describe('WatchForFreeComponent', () => {
  let component: WatchForFreeComponent;
  let fixture: ComponentFixture<WatchForFreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchForFreeComponent]
    });
    fixture = TestBed.createComponent(WatchForFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
