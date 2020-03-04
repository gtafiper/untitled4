import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProducktComponent } from './add-produckt.component';

describe('AddProducktComponent', () => {
  let component: AddProducktComponent;
  let fixture: ComponentFixture<AddProducktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProducktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProducktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
