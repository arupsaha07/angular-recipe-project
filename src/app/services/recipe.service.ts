import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IRecipe } from '../shared/recipe';

@Injectable()
export class RecipeService {

  public singleRecipeData: any;

  constructor(private http: HttpClient) {}

  getAllRecipe() {
    return this.http.get<any>('http://localhost:3000/api/v1/recipes');
  }

  getSingleRecipe(id){
    return this.http.get<any>(`http://localhost:3000/api/v1/recipe/${id}`);
  }

  
}
