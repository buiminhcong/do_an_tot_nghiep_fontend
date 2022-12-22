import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatictisRoomComponent } from './statictis-room.component';

describe('StatictisRoomComponent', () => {
  let component: StatictisRoomComponent;
  let fixture: ComponentFixture<StatictisRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatictisRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatictisRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
