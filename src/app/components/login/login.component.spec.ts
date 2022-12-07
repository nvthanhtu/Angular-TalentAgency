import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { SessionService } from 'src/app/services/session/session.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockDialog : jasmine.SpyObj<MatDialog>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<LoginComponent,any>>; 
  let spySession: jasmine.SpyObj<SessionService>;
  beforeEach(async () => {
    mockDialogRef = jasmine.createSpyObj<MatDialogRef<LoginComponent,any>>('MatDialog',{ afterClosed: of()});
    
    mockDialog = jasmine.createSpyObj<MatDialog>('MatDialog',{
      open: mockDialogRef});

    spySession = jasmine.createSpyObj<SessionService>('SessionService',
    { hasLoginName: true});

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        MatCardModule,
        CommonModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        MatDialogModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      providers: [
        {provide: MatDialog, useValue: mockDialog},
        {provide: MatDialogRef, useValue: mockDialogRef},
        {provide: SessionService, useValue: spySession}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
