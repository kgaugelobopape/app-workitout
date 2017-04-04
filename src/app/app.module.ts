import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {DashboardPage} from "../pages/dashboard/dashboard";
import {ExercisesPage} from "../pages/exercises/exercises";
import {WorkoutsPage} from "../pages/workouts/workouts";
import {NutritionsPage} from "../pages/nutritions/nutritions";
import {GoalsPage} from "../pages/goals/goals";
import {WgerService} from "../providers/wger-service";
import {ExercisesListPage} from "../pages/exercises-list/exercises-list";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    DashboardPage,
    ExercisesPage,
    WorkoutsPage,
    NutritionsPage,
    GoalsPage,
    ExercisesListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    DashboardPage,
    ExercisesPage,
    WorkoutsPage,
    NutritionsPage,
    GoalsPage,
    ExercisesListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WgerService
  ]
})
export class AppModule {}
