import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachsinhvienComponent } from './danhsachsinhvien.component';

describe('DanhsachsinhvienComponent', () => {
  let component: DanhsachsinhvienComponent;
  let fixture: ComponentFixture<DanhsachsinhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachsinhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachsinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
