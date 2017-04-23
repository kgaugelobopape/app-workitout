import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WgerService} from "../../providers/wger-service";

import _ from 'underscore';
import {ExercisesDetailsPage} from "../exercises-details/exercises-details";
import {AppData} from "../../providers/app-data";

@Component({
  selector: 'page-exercises-list',
  templateUrl: 'exercises-list.html'
})
export class ExercisesListPage implements OnInit{

  data: any;
  group: any = {};

  constructor(
    private _navCtrl: NavController,
    private _navParams: NavParams,
    private _appData: AppData) {
    this.group = this._navParams.data;
  }

  ngOnInit(){

      this._appData.getAllExercises()
        .subscribe(
          (response) => {
            if(response.results){
              if(_.isEmpty(this.group)){
                this.data = response.results;
              }else{
                this.data = _.where(response.results, {category: this.group.id});
              }
            }
          },
          (error) => {
            console.log(error);
          });
  }

  onLoadExercise(d: any){
    this._navCtrl.push(ExercisesDetailsPage, d);
  }

  getItems(){
  }
}
