import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelSiswaComponent } from './tabel-siswa.component';

describe('TabelSiswaComponent', () => {
  let component: TabelSiswaComponent;
  let fixture: ComponentFixture<TabelSiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelSiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelSiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
