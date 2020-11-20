import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAllCustomerComponent } from './read-all-customer.component';

describe('ReadAllCustomerComponent', () => {
  let component: ReadAllCustomerComponent;
  let fixture: ComponentFixture<ReadAllCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadAllCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAllCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
