import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ExercisesDetailsPage} from "../exercises-details/exercises-details";
import {AppData} from "../../providers/app-data";

import _ from "underscore";

@Component({
  selector: 'page-exercises-list',
  templateUrl: 'exercises-list.html'
})
export class ExercisesListPage implements OnInit{

  data: any;
  group: any = {};
  items: string[];

  constructor(
    private _navCtrl: NavController,
    private _navParams: NavParams,
    private _appData: AppData) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [];
  };

  ngOnInit(){
      this.group = this._navParams.data;
  };

  onLoadExercise(d: any){
    this._navCtrl.push(ExercisesDetailsPage, d);
  };

  getItems(ev: any){
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.group = _.where(this.group.exercises, (item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }else{
      this.ngOnInit();
    }
  };

  onReplaceText(name: string){
    return name.toLowerCase().replace(/\s+/g, '-').replace('’','');
  };
}
