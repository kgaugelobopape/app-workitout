import {Component, OnInit} from '@angular/core';
import { NavParams } from 'ionic-angular';

/*
  Generated class for the ExercisesDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-exercises-details',
  templateUrl: 'exercises-details.html'
})
export class ExercisesDetailsPage implements OnInit {
  data: any = [];

  constructor(private navParams: NavParams) {}

  ngOnInit(){
    this.data = this.navParams.data;
  }
}
