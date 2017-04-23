import {Injectable} from '@angular/core';

import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class AppData {

  data: any;

  constructor(private http: Http) {
  }

  getMuscleGroups(): any {

    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.http.get('assets/data/exercisecategory.json')
        .map((response: Response) => {
          return response.json();
        });
    }
  }

  getAllExercises(){

    return this.http.get('assets/data/exercise.json')
      .map(
        (response: Response) => {
          return response.json();
        });
  }
}
