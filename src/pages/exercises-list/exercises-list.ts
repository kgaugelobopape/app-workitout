import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WgerService} from "../../providers/wger-service";

import _ from 'underscore';
import {ExercisesDetailsPage} from "../exercises-details/exercises-details";

@Component({
  selector: 'page-exercises-list',
  templateUrl: 'exercises-list.html'
})
export class ExercisesListPage implements OnInit{

  data: any = [];
  cat: any;
  dataCount: number;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private _wgerService: WgerService) {
    this.cat = this.navParams.data;
  }

  ngOnInit(){
    this._wgerService.getExerciseList(this.cat.id)
      .subscribe(
        (data) => {
          if(data && data.results){
            this.data = _.where(data.results, {category: this.cat.id});
            this.dataCount = this.data.length;
          }
        },
        (error) => {
          console.log(error);
        });
  }

  onLoadExercise(d: any){
    this.navCtrl.push(ExercisesDetailsPage, d);
  }

}
