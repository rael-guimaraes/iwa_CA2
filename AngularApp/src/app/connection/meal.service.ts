import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import{Meal} from './meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  selectedMeal: Meal;
  meal: Meal[];
  readonly baseURL = 'https://8000-raelguimaraes-iwaca2-9fvihhtzkdm.ws-eu43.gitpod.io/meals';
  

  constructor(private http: HttpClient) { }

  postMeal(m: Meal) {
    alert('works service');
    return this.http.post(this.baseURL, m);
  }
  getMealList() {
    return this.http.get(this.baseURL);
  }

  putMeal(m: Meal) {
    return this.http.put(this.baseURL + `/${m._id}`, m);
  }

  deleteMeal(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
