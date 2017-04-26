import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';

@Injectable()
export class UserData {
  _favorites: any = [{}];
  HAS_LOGGED_IN = 'hasLoggedIn';

  constructor(
    public events: Events
  ) {}

  hasFavorite(exercise: {}) {
    return (this._favorites.indexOf(exercise) > -1);
  };

  addFavorite(exercise: {}) {
    this._favorites.push(exercise);
  };

  removeFavorite(exercise: {}) {
    let index = this._favorites.indexOf(exercise);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  };

  // login(username: string) {
  //   this.storage.set(this.HAS_LOGGED_IN, true);
  //   this.setUsername(username);
  //   this.events.publish('user:login');
  // };

  // signup(username: string) {
  //   this.storage.set(this.HAS_LOGGED_IN, true);
  //   this.setUsername(username);
  //   this.events.publish('user:signup');
  // };

  // logout() {
  //   this.storage.remove(this.HAS_LOGGED_IN);
  //   this.storage.remove('username');
  //   this.events.publish('user:logout');
  // };

  // setUsername(username: string) {
  //   this.storage.set('username', username);
  // };
  //
  // getUsername() {
  //   return this.storage.get('username').then((value) => {
  //     return value;
  //   });
  // };
  //
  // // return a promise
  // hasLoggedIn() {
  //   return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
  //     return value === true;
  //   });
  // };

}
