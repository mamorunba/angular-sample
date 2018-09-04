import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MydataService {
  private url = 'assets/config.json';

  constructor(private http: HttpClient) { }

  readData() {
    console.log('readData');
    // this.http.get(this.url);
    this.http.get(this.url)
      .subscribe(response => {
        console.log('key=' + response['key'] + ' value=' + response['value']);
      });
  }
}
