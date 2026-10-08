import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchInTeluguAndTamilComponent } from './watch-in-telugu-and-tamil.component';

describe('WatchInTeluguAndTamilComponent', () => {
  let component: WatchInTeluguAndTamilComponent;
  let fixture: ComponentFixture<WatchInTeluguAndTamilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchInTeluguAndTamilComponent]
    });
    fixture = TestBed.createComponent(WatchInTeluguAndTamilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
