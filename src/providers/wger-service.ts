import { Injectable } from '@angular/core';

//App Providers
import {AppSettings} from './app-settings';
import {HttpHelper} from './http-helper';

@Injectable()
export class WgerService {

  constructor(
    public _appSettings: AppSettings,
    public _httpHelper: HttpHelper) { }

  getMuscleGroups() {
    let url = this._appSettings.WGER_URL + '/api/v2/exercisecategory/';
    // let url = '../assets/data/exercisecategory.json';

    return this._httpHelper.get(url, 'Loading...')
      .map(
        (response) => {
          return response.json();
        },
        (error) => {
          return error;
        });
  }

  getMuscleGroupExercises(id: number) {
    let url = this._appSettings.WGER_URL + '/api/v2/exercise/?category=' + id + '&limit=10000' + '&language=' + 2;

    return this._httpHelper.get(url, 'Loading...')
      .map(
        (response) => {
          return response.json();
        },
        (error) => {
          return error;
        });
  }

  getAllExercises(){
    let url = this._appSettings.WGER_URL + '/api/v2/exercise/?limit=1000';
    // let url = '../assets/data/exercise.json';

    return this._httpHelper.get(url, 'Loading...')
      .map(
        (response) => {
          return response.json();
        },
        (error) => {
          return error;
        });
  }

  getExerciseImageList(id: number) {
    let url = this._appSettings.WGER_URL + '/api/v2/exerciseimage/?exercise=' + id;

    return this._httpHelper.get(url, 'Loading...')
      .map(
        (response) => {
          return response.json();
        },
        (error) => {
          return error;
        });
  }

  getExerciseEquipmentList(equipments) {
    let response: any = [];

    let url = this._appSettings.WGER_URL + '/api/v2/equipment/';

    for (let i = 0; i < equipments.length; i++) {
      return this._httpHelper.get(url + equipments[i] + '/', 'Loading...')
        .map(
          (res) => {
            response.push(res.json());
          });
    }

    console.log(response);
    return response;
  }

  getExerciseCommentList(item: any) {
    let url = this._appSettings.WGER_URL + '/api/v2/exercisecomment/' + item.id + '?limit=1000&language=' + 2;

    return this._httpHelper.get(url, 'Loading...')
      .map(
        (response) => {
          return response.json();
        },
        (error) => {
          return error;
        });
  }
}
