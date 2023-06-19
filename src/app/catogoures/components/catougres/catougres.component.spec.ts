import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatougresComponent } from './catougres.component';

describe('CatougresComponent', () => {
  let component: CatougresComponent;
  let fixture: ComponentFixture<CatougresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatougresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatougresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
