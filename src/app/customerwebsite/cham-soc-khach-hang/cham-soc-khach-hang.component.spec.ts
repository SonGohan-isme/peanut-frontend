import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamSocKhachHangComponent } from './cham-soc-khach-hang.component';

describe('ChamSocKhachHangComponent', () => {
  let component: ChamSocKhachHangComponent;
  let fixture: ComponentFixture<ChamSocKhachHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamSocKhachHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamSocKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
