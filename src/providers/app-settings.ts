import { Injectable } from '@angular/core';

@Injectable()

export class AppSettings {

  get WGER_URL(): string {
    return 'https://wger.de';
  }
}
