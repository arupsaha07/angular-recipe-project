import { Component, OnInit } from '@angular/core';
// import { IRecipe } from '../../shared/recipe';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { IRecipe } from '../shared/recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  
  // recipe:IRecipe | undefined;
  recipe:any;
  star = faStar;

  constructor( private activeRoute: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    // this.activeRoute.snapshot.paramMap.get('id');
    this.activeRoute.params.subscribe(param => this.getSingleRecipeById(param['id']))
  }


  getSingleRecipeById(id:number){
    this.recipeService.getSingleRecipe(id).subscribe((data:any)=>{
      this.recipe = data.data.recipe
    })
  }


  getBg(val) {

    switch (true) {
      case val <= 2: return 'bg-danger';
        break;
      case val > 2 && val < 4: return 'bg-warning';
        break;
      case val > 4: return 'bg-success'
    }

  }
}
