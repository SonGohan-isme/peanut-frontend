import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoTroKhachHangComponent } from './ho-tro-khach-hang.component';

describe('HoTroKhachHangComponent', () => {
  let component: HoTroKhachHangComponent;
  let fixture: ComponentFixture<HoTroKhachHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoTroKhachHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoTroKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
