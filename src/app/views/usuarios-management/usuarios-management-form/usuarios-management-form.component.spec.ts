import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosManagementFormComponent } from './usuarios-management-form.component';

describe('UsuariosManagementFormComponent', () => {
  let component: UsuariosManagementFormComponent;
  let fixture: ComponentFixture<UsuariosManagementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosManagementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
