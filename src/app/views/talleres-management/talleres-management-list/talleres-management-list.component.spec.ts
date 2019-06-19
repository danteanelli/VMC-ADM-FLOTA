import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalleresManagementListComponent } from './talleres-management-list.component';

describe('TalleresManagementListComponent', () => {
  let component: TalleresManagementListComponent;
  let fixture: ComponentFixture<TalleresManagementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalleresManagementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalleresManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
