import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingEditComponent } from './shopping-edit.component';

describe('ShoppingEditComponent', () => {
  let component: ShoppingEditComponent;
  let fixture: ComponentFixture<ShoppingEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShoppingEditComponent]
    });
    fixture = TestBed.createComponent(ShoppingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
