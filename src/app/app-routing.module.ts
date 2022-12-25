import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: 'recipe', pathMatch: 'full' },
  { path: 'recipe', component: RecipesComponent },
  { path: 'shopping', component: ShoppingListComponent },
  { path: '**', component: PageNotFoundComponent },
  // { path: '', children: [{ path: 'recipe-process/:id' }] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
