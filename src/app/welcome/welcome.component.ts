import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})

export class WelcomeComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openLoginModal() {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: {},
      height: '300px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('closed');
    });
  }
}
