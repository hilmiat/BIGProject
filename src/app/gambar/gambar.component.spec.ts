import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GambarComponent } from './gambar.component';

describe('GambarComponent', () => {
  let component: GambarComponent;
  let fixture: ComponentFixture<GambarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GambarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GambarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
