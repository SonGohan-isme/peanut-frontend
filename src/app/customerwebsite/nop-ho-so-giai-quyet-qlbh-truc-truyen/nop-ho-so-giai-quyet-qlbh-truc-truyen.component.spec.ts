import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopHoSoGiaiQuyetQlbhTrucTruyenComponent } from './nop-ho-so-giai-quyet-qlbh-truc-truyen.component';

describe('NopHoSoGiaiQuyetQlbhTrucTruyenComponent', () => {
  let component: NopHoSoGiaiQuyetQlbhTrucTruyenComponent;
  let fixture: ComponentFixture<NopHoSoGiaiQuyetQlbhTrucTruyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopHoSoGiaiQuyetQlbhTrucTruyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopHoSoGiaiQuyetQlbhTrucTruyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
