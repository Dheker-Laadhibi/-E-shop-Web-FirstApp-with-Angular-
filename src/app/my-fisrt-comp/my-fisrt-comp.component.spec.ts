import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFisrtCompComponent } from './my-fisrt-comp.component';

describe('MyFisrtCompComponent', () => {
  let component: MyFisrtCompComponent;
  let fixture: ComponentFixture<MyFisrtCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFisrtCompComponent]
    });
    fixture = TestBed.createComponent(MyFisrtCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
