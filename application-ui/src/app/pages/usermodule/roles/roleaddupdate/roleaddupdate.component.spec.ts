import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleaddupdateComponent } from './roleaddupdate.component';

describe('RoleaddupdateComponent', () => {
  let component: RoleaddupdateComponent;
  let fixture: ComponentFixture<RoleaddupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleaddupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleaddupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
