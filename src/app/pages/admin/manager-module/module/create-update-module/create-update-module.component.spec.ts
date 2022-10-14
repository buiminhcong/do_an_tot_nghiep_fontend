import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateModuleComponent } from './create-update-module.component';

describe('CreateUpdateModuleComponent', () => {
  let component: CreateUpdateModuleComponent;
  let fixture: ComponentFixture<CreateUpdateModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
