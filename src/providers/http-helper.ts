import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers }  from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

//App providers
import { LoadingHelper } from './loading-helper';

@Injectable()
export class HttpHelper {

  timeOut: number = 120000;

  constructor(
    public http: Http,
    public _loadingHelper: LoadingHelper) { }

  post(url, data, loadingMessage) {
    if (loadingMessage) {
      this._loadingHelper.create(loadingMessage);
    }

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(url, data, options)
      .map(
      (response) => {
        if (loadingMessage) {
          this._loadingHelper.dismiss();
        }

        return response;
      },
      (error) => {
        if (loadingMessage) {
          this._loadingHelper.dismiss();
        }

        return error;
      });
  }

  get(url, loadingMessage) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    if (loadingMessage) {
      this._loadingHelper.create(loadingMessage);
    }

    return this.http.get(url, options)
      .map((response) => {
        if (loadingMessage) {
          this._loadingHelper.dismiss();
        }

        return response;
      },
      (error) => {
        if (loadingMessage) {
          this._loadingHelper.dismiss();
        }

        return error;
      });
  }
}
