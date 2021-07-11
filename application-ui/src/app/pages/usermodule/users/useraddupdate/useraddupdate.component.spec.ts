import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddupdateComponent } from './useraddupdate.component';

describe('UseraddupdateComponent', () => {
  let component: UseraddupdateComponent;
  let fixture: ComponentFixture<UseraddupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraddupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraddupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
