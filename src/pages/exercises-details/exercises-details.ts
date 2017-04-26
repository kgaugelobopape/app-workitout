import {Component, OnInit} from '@angular/core';
import {ActionSheetController, AlertController, NavParams, ToastController} from 'ionic-angular';
import {UserData} from "../../providers/user-data";

@Component({
  selector: 'page-exercises-details',
  templateUrl: 'exercises-details.html'
})
export class ExercisesDetailsPage implements OnInit {
  exercise: any = [];
  exerciseModel: string = 'image';

  constructor(
    private navParams: NavParams,
    private actionCtrl: ActionSheetController,
    private toastCtrl: ToastController,
    private user: UserData,
   private alertCtrl: AlertController) {}

  ngOnInit(){
    this.exercise = this.navParams.data;
  };

  presentActionSheet(exercise) {
    const actionSheet =  this.actionCtrl.create({
      title: 'Actions',
      buttons: [
        {
          text: 'Add to Favourites',
          handler: () => {
            this.addToFavorite(exercise);
          }
        },{
          text: 'Add to Workout',
          handler: () => {
            this.addToWorkout(exercise);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();

  };

  addToFavorite(exercise: any) {

    if (this.user.hasFavorite(exercise)) {
      // prompt them to remove it
      this.removeFavorite(exercise, 'Favorite already added');
    } else {
      // remember this session as a user favorite
      this.user.addFavorite(exercise);

      const toast = this.toastCtrl.create({
        message: 'Favorite Added',
        duration: 2000
      });

      toast.present();
    }
  };

  removeFavorite(exercise: any, title: string) {
    let alert = this.alertCtrl.create({
      title: title,
      message: 'Would you like to remove this exercise from your favorites?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Remove',
          handler: () => {
            // they want to remove this session from their favorites
            this.user.removeFavorite(exercise);
          }
        }
      ]
    });
    // now present the alert on top of all other content
    alert.present();
  };

  addToWorkout(exercise: any){
    const toast = this.toastCtrl.create({
      message: 'Favorite Added',
      duration: 2000
    });

    toast.present();
  };

  onReplaceText(name: string){
    return name.toLowerCase().replace(/\s+/g, '-').replace('’','');
  };
}
