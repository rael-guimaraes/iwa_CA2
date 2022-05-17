import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import{Meal} from './meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  selectedMeal: Meal;
  meal: Meal[];
  readonly baseURL = 'https://iwa-ca2-rael.herokuapp.com/meals';
  

  constructor(private http: HttpClient) { }

  postMeal(m: any) {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.post(this.baseURL, m, httpOptions );
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
