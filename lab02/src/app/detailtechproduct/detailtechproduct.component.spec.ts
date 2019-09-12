import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtechproductComponent } from './detailtechproduct.component';

describe('DetailtechproductComponent', () => {
  let component: DetailtechproductComponent;
  let fixture: ComponentFixture<DetailtechproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailtechproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailtechproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
