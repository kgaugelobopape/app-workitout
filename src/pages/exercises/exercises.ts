import {Component, OnInit} from '@angular/core';
import {NavController} from "ionic-angular";
import {ExercisesListPage} from "../exercises-list/exercises-list";
import {AppData} from "../../providers/app-data";

@Component({
  selector: 'page-exercises',
  templateUrl: 'exercises.html'
})
export class ExercisesPage implements OnInit {
  muscleGroups: any = [];
  exercises: any = [];

  constructor(private navCtrl: NavController,
              private _appData: AppData) {
  }

  ngOnInit() {

    this._appData.getMuscleGroups()
      .subscribe(
        (response) => {
          this.muscleGroups = response.muscleGroup;
        });
  }

  onLoadExercises(group: any) {
    this.navCtrl.push(ExercisesListPage, group);
  }
}
