import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Components/auth/auth.guard';
import { RecipeResolveService } from './Components/services/recipes-resolve.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'shopping',

    loadComponent: () =>
      import('./Components/shopping-list/shopping-list.component').then(
        (m) => m.ShoppingListComponent
      ),
  },
  {
    path: 'recipes',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./Components/recipes/recipes.component').then(
        (m) => m.RecipesComponent
      ),
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadComponent: () =>
          import(
            './Components/recipes/start-recipe/start-recipe.component'
          ).then((m) => m.StartRecipeComponent),
      },
      {
        path: 'new',
        canActivate: [AuthGuard],
        loadComponent: () =>
          import('./Components/recipes/edit-recipe/edit-recipe.component').then(
            (m) => m.EditRecipeComponent
          ),
      },

      {
        path: 'recipeDetails/:id',
        canActivate: [AuthGuard],
        resolve: [RecipeResolveService],
        loadComponent: () =>
          import(
            './Components/recipes/recipe-list/recipe-details/recipe-details.component'
          ).then((m) => m.RecipeDetailsComponent),
      },
      {
        path: 'recipeDetails/:id/edit',
        resolve: [RecipeResolveService],
        canActivate: [AuthGuard],
        loadComponent: () =>
          import('./Components/recipes/edit-recipe/edit-recipe.component').then(
            (m) => m.EditRecipeComponent
          ),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./Components/auth/auth/auth.component').then(
        (m) => m.AuthComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./Components/auth/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
