import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmaterialComponent } from './showmaterial.component';

describe('ShowmaterialComponent', () => {
  let component: ShowmaterialComponent;
  let fixture: ComponentFixture<ShowmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
