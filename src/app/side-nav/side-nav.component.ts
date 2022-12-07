import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { LoginComponent } from '../components/login/login.component';
import { SessionService } from '../services/session/session.service';
import { UserLoginInfo } from '../model/user-login.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent implements OnInit {
  loginName: string = '';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
     public dialog: MatDialog,
     public sessionService: SessionService) {}

  onLoginClick(event: Event){
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px'
    });

    // Subscribe when the dialog box closes
    dialogRef.afterClosed().subscribe(
      (res: UserLoginInfo)=>{
        this.loginName = res.login;
      }
    );
  }

  onDisconnectClick(event:Event){
    this.loginName = '';
    this.sessionService.setLoginName('');
  }

  ngOnInit(): void {
    this.loginName = sessionStorage.getItem('loginName') != null ? 
      (sessionStorage.getItem('loginName') as string) : '';
  }
  

}
