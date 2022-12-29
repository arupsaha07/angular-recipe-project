import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { IRecipe } from 'src/app/shared/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls:['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  recipes: IRecipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getAllRecipe().subscribe((res) => {
      this.recipes = res.data.recipes;
    });
  }


}
