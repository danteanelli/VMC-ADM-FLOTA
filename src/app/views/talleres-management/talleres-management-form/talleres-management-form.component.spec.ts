import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalleresManagementFormComponent } from './talleres-management-form.component';

describe('TalleresManagementFormComponent', () => {
  let component: TalleresManagementFormComponent;
  let fixture: ComponentFixture<TalleresManagementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalleresManagementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalleresManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
