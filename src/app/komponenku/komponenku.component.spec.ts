import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponenkuComponent } from './komponenku.component';

describe('KomponenkuComponent', () => {
  let component: KomponenkuComponent;
  let fixture: ComponentFixture<KomponenkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomponenkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomponenkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
