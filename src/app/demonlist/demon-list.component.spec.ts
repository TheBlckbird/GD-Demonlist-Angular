import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonListComponent } from './demon-list.component';

describe('DemonlistComponent', () => {
  let component: DemonListComponent;
  let fixture: ComponentFixture<DemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
