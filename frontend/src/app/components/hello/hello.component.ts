import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api/api.service";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  greeting: string = '';

  constructor(readonly apiService: ApiService) {
  }


  ngOnInit(): void {
    this.apiService.greet().toPromise().then(res => this.greeting = res.message);
  }


}
