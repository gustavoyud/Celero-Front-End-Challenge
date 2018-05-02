import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelhaComponent } from './velha.component';

describe('VelhaComponent', () => {
  let component: VelhaComponent;
  let fixture: ComponentFixture<VelhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
