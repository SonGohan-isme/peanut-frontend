import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuongdanGqqlbhComponent } from './huongdan-gqqlbh.component';

describe('HuongdanGqqlbhComponent', () => {
  let component: HuongdanGqqlbhComponent;
  let fixture: ComponentFixture<HuongdanGqqlbhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuongdanGqqlbhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuongdanGqqlbhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
