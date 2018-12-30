import {Component, OnDestroy, Inject} from '@angular/core';
import { navItems } from './../../_nav';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

export interface DialogData {
  userData: 'profile';
}
export interface DialogData {
  update: 'updateProfile';
}
export interface DialogData {
  password: 'changePassword';
}
export interface DialogData {
  settings: 'appSettings';
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ["default-layout.component.css"]
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor(public dialog: MatDialog) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: [ 'class' ]
    });
  }

  openDialog() {
    this.dialog.open(ProfileComponent, {
      width: '300px',
      data: {
        userData: 'profile',
      }
    });
  };

  openUpdateDialog(){
    this.dialog.open(ProfileComponent, {
      width: '300px',
      data: {
        update: 'updateProfile'
      }
    });
  };
  openChangePassword(){
    this.dialog.open(ProfileComponent, {
      width: '300px',
      data: {
        password: 'changePassword'
      }
    });
  };
  openSettings(){
    this.dialog.open(ProfileComponent, {
      width: '300px',
      data: {
        settings: 'appSettings'
      }
    });
  };

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ["default-layout.component.css"]
})
export class ProfileComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}