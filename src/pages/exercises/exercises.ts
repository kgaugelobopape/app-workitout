import {Component, OnInit} from '@angular/core';
import {WgerService} from "../../providers/wger-service";
import {LoadingController, NavController} from "ionic-angular";
import {ExercisesListPage} from "../exercises-list/exercises-list";

@Component({
  selector: 'page-exercises',
  templateUrl: 'exercises.html'
})
export class ExercisesPage implements OnInit {
  category: any = [];

  constructor(
    private wgerService: WgerService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController){}

  ngOnInit(){
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.wgerService.getExercises()
      .subscribe((data) => {
        this.category = data;
        loading.dismiss();
      },
        (error) => {
          console.log(error);
          loading.dismiss();
        });
  }

  onLoadExercises(cat:any){
    this.navCtrl.push(ExercisesListPage,{cat});
  }
}
