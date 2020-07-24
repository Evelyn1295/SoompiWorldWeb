import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTES } from './side-bar-routes.config';
import { RequestService } from 'src/services/request.service';
import { DataService } from 'src/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  menuItems: Array<object>;
  clickedItem: string = 'Dashboard';

  constructor(
    private requestService: RequestService,
    private dataService: DataService,
    private router: Router
  ) {
    this.menuItems = ROUTES;
  }

  changeActive(clickedAnchor: string) {
    this.clickedItem = clickedAnchor;
  }

  logout() {
    this.requestService.logout();
    this.dataService.changeState(false);
    this.router.navigate['/'];
  }
}
