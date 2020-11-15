import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiServiceModule} from "./api.service.module";

@Injectable({
  providedIn: ApiServiceModule
})

export class ApiService {

  constructor(protected httpClient: HttpClient) {
  }

  public greet(): Observable<any> {
    return this.httpClient.get('./api/greet');
  }

}
