import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IRecipe } from '../shared/recipe';

@Injectable()
export class RecipeService {
  url: string = 'assets/recipe.json';

  public singleRecipeData: any;

  private subject = new Subject<IRecipe>();

  constructor(private http: HttpClient) {}

  getAllRecipe() {
    return this.http.get<IRecipe[]>(this.url);
  }

  sendMessage(val) {
    this.subject.next(val);
  }

  receiveMessage(): Observable<IRecipe> {
    return this.subject.asObservable();
  }

  
}
