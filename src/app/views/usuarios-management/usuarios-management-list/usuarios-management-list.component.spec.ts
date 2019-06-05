import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosManagementListComponent } from './usuarios-management-list.component';

describe('UsuariosManagementListComponent', () => {
  let component: UsuariosManagementListComponent;
  let fixture: ComponentFixture<UsuariosManagementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosManagementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
