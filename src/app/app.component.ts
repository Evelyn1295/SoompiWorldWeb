import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'SoompiWorld-app';
  loggedIn: boolean = false;

  constructor(
    private service: RequestService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.isLogged.subscribe(
      (isLogged) => (this.loggedIn = isLogged)
    );
  }
}
