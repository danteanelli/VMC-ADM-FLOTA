import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosManagementFormComponent } from './modelos-management-form.component';

describe('ModelosManagementFormComponent', () => {
  let component: ModelosManagementFormComponent;
  let fixture: ComponentFixture<ModelosManagementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelosManagementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelosManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
