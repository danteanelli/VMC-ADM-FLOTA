import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasManagementListComponent } from './marcas-management-list.component';

describe('MarcasManagementListComponent', () => {
  let component: MarcasManagementListComponent;
  let fixture: ComponentFixture<MarcasManagementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasManagementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
