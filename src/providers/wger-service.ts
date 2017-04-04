import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WgerService {

  constructor(public http: Http) {}

  getExercises(){
    return this.http.get('../assets/data/exercisecategory.json')
      .map((response: Response) => {
        return response.json();
      });
  }

}
