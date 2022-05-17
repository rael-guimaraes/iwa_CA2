import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { MealService } from '../connection/meal.service';
import { Meal } from '../connection/meal.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[MealService]
})
export class MenuComponent implements OnInit {

  constructor(public mealService: MealService, private router: Router) { }

  ngOnInit(): void {
    this.refreshMealList();
  }

  refreshMealList() {
    this.mealService.getMealList().subscribe((res) => {
      this.mealService.meal = res as Meal[];
    });
  }

}
