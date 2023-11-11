import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasinaComponent } from './masina.component';

describe('MasinaComponent', () => {
  let component: MasinaComponent;
  let fixture: ComponentFixture<MasinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
