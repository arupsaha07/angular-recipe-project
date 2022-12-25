import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { IRecipe } from '../../shared/recipe';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: IRecipe;
  star = faStar;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.receiveMessage().subscribe((res) => {
      this.recipeDetail = res;
      // console.log(res)
      if (this.recipeDetail.rating) {
      }
    });
  }

  getBg(val){
    
    switch(true){
      case val <= 2 : return 'bg-danger';
      break;
      case val > 2 && val < 4 : return 'bg-warning';
      break;
      case val > 4 : return 'bg-success'
    }

  }
}
