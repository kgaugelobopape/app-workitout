import { Component, OnInit } from '@angular/core';
import {DashboardPage} from "../dashboard/dashboard";
import {ExercisesPage} from "../exercises/exercises";
import {WorkoutsPage} from "../workouts/workouts";
import {NutritionsPage} from "../nutritions/nutritions";
import {GoalsPage} from "../goals/goals";
import {Tab} from "../../models/Tab";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit {

  dashboard:any = DashboardPage;
  exercises: any = ExercisesPage;
  workouts: any = WorkoutsPage;
  nutritions: any = NutritionsPage;
  goals: any = GoalsPage;

  appPages: Tab[] = [];

  ngOnInit(){
    this.appPages = [
      { title: 'Exercises', component: this.exercises, icon: 'contacts' },
      { title: 'Dashboard', component: this.dashboard, icon: 'apps' },
      { title: 'Workouts', component: this.workouts, icon: 'star' },
      { title: 'Nutritions', component: this.nutritions, icon: 'basket' },
      { title: 'Goals', component: this.goals, icon: 'trophy' }
    ];
  }
}
