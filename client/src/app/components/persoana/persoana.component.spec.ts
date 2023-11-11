import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoanaComponent } from './persoana.component';

describe('PersoanaComponent', () => {
  let component: PersoanaComponent;
  let fixture: ComponentFixture<PersoanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersoanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
