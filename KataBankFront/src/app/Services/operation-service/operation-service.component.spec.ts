import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationServiceComponent } from './operation-service.component';

describe('OperationServiceComponent', () => {
  let component: OperationServiceComponent;
  let fixture: ComponentFixture<OperationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
