import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRecipeComponent } from './start-recipe.component';

describe('StartRecipeComponent', () => {
  let component: StartRecipeComponent;
  let fixture: ComponentFixture<StartRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StartRecipeComponent]
    });
    fixture = TestBed.createComponent(StartRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
