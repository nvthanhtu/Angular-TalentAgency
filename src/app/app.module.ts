import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainPageComponent } from './main-page/main-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TalentsServiceService } from './services/talents-service/talents-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ListTalentsComponent } from './list-talents/list-talents.component';
import { TalentTagComponent } from './components/talent-tag/talent-tag.component';
import { LoginComponent } from './components/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { SessionService } from './services/session/session.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailTalentComponent } from './components/detail-talent/detail-talent.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { LoginDirective } from './directives/login.directive';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MainPageComponent,
    ListTalentsComponent,
    TalentTagComponent,
    LoginComponent,
    DetailTalentComponent,
    LoginDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatAutocompleteModule,
    MatListModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TalentsServiceService, MatDialog, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
