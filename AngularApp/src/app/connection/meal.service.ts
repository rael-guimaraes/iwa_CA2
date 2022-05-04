import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import{Meal} from './meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  selectedMeal: Meal;
  meal: Meal[];
  readonly baseURL = 'http://localhost:8000/meals';

  constructor(private http: HttpClient) { }

  postMeal(meal: Meal) {
    return this.http.post(this.baseURL, meal);
  }
}
