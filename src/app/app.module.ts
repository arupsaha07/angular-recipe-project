import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeService } from './services/recipe.service';
import { AppRoutingModule } from './app-routing.module';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    TruncatePipe,
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
