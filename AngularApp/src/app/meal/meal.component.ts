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


  form:any;

  constructor(public mealService: MealService, private router: Router) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshMealList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.mealService.selectedMeal = {
      _id: "",
      item: "",
      price: ""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {

      let data = {
        item: form.value.name,
        price: form.value.price

      };

      this.mealService.postMeal(data).subscribe((res) => {
        this.resetForm(form);
        this.refreshMealList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.mealService.putMeal(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshMealList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshMealList() {
    this.mealService.getMealList().subscribe((res) => {
      this.mealService.meal = res as Meal[];
    });
  }

  onEdit(m: Meal) {
    this.mealService.selectedMeal = m;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.mealService.deleteMeal(_id).subscribe((res) => {
        this.refreshMealList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }


}
