import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasManagementFormComponent } from './marcas-management-form.component';

describe('MarcasManagementFormComponent', () => {
  let component: MarcasManagementFormComponent;
  let fixture: ComponentFixture<MarcasManagementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasManagementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
