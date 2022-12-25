import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { IRecipe } from '../../../shared/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls:['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipes: IRecipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getAllRecipe().subscribe((res) => {
      // console.log(res)
      this.recipes = res;
    });
  }

  sendRecipeData(val) {
    // console.log(val)
    this.recipeService.sendMessage(val);
  }
}
