import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosManagementListComponent } from './modelos-management-list.component';

describe('ModelosManagementListComponent', () => {
  let component: ModelosManagementListComponent;
  let fixture: ComponentFixture<ModelosManagementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelosManagementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelosManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
