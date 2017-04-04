import {Component, OnInit} from '@angular/core';
import {WgerService} from "../../providers/wger-service";
import {NavController} from "ionic-angular";
import {ExercisesListPage} from "../exercises-list/exercises-list";

@Component({
  selector: 'page-exercises',
  templateUrl: 'exercises.html'
})
export class ExercisesPage implements OnInit {
  category: any = [];

  constructor(
    private _wgerService: WgerService,
    private navCtrl: NavController){}

  ngOnInit(){

    this._wgerService.getExerciseCategoryList()
      .subscribe(
        (data) => {
          this.category = data;
        },
        (error) => {
          console.log(error);
        });
  }

  onLoadExercises(cat:any){
    this.navCtrl.push(ExercisesListPage,cat);
  }
}
