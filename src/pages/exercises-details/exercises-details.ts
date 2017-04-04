import {Component, OnInit} from '@angular/core';
import { NavParams } from 'ionic-angular';
import {WgerService} from "../../providers/wger-service";
import _ from 'underscore';

@Component({
  selector: 'page-exercises-details',
  templateUrl: 'exercises-details.html'
})
export class ExercisesDetailsPage implements OnInit {
  data: any = [];
  images: any;

  constructor(private navParams: NavParams, private _wgerService: WgerService) {}

  ngOnInit(){
    this.data = this.navParams.data;
    this.getExerciseImages(this.data);
  }

  getExerciseImages(ex: any){
    this._wgerService.getExerciseImageList(ex.id)
      .subscribe(
        (data) => {
          if(data){
             this.images = _.where(data.results, {exercise: ex.id});
              console.log(data.results[0]);
              console.log(ex.id);
          }
        },
        (error) => {
          console.log(error)
        });
  }
}
