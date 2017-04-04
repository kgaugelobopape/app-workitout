import {Component, OnInit} from '@angular/core';
import {WgerService} from "../../providers/wger-service";
import {LoadingController} from "ionic-angular";

@Component({
  selector: 'page-exercises',
  templateUrl: 'exercises.html'
})
export class ExercisesPage implements OnInit {
  category: any = [];

  constructor(private wgerService: WgerService, private loadingCtrl: LoadingController){}

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
    console.log(cat);
  }
}
