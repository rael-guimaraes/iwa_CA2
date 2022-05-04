import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { MealService } from '../connection/meal.service';
import { Meal } from '../connection/meal.model';

declare var M: any;

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
  providers:[MealService]
})
export class MealComponent implements OnInit {

  constructor(public mealService: MealService, private router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.mealService.selectedMeal = {
      _id: "",
      name: "",
      price: ""
    }
  }

  onSubmit(form: NgForm) {
    
    if (form.value._id == "") {
      this.mealService.postMeal(form.value).subscribe((res) => {
        this.resetForm(form);
        
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    
  }


}
