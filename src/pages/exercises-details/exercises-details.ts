import {Component, OnInit} from '@angular/core';
import { NavParams } from 'ionic-angular';
import {WgerService} from "../../providers/wger-service";
import _ from 'underscore';
import {MessageHelper} from "../../providers/message-helper";

@Component({
  selector: 'page-exercises-details',
  templateUrl: 'exercises-details.html'
})
export class ExercisesDetailsPage implements OnInit {
  data: any = [];
  imageList: any;
  exercise: string = 'image';

  constructor(private navParams: NavParams, private _wgerService: WgerService, private messageHelper: MessageHelper) {}

  ngOnInit(){
    this.data = this.navParams.data;
    this.getExerciseImageList(this.data.id);
  }

  getExerciseImageList(id: number) {
    this._wgerService.getExerciseImageList(id)
      .subscribe(
        (response) => {
          this.imageList = response.results;
        },
        (err) => {
          this.messageHelper.create(err, 3000, 'top');
        });
  }

  getExerciseEquipmentList(equipments) {
    this._wgerService.getExerciseEquipmentList(equipments)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (err) => {
          this.messageHelper.create(err, 3000, 'top');
        });
  }
}
