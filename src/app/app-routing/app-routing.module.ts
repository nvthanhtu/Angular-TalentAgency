import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from '../app.component';
import { DetailTalentComponent } from '../components/detail-talent/detail-talent.component';
import { ListTalentsComponent } from '../list-talents/list-talents.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { TalentResolveService } from '../services/resolver/talent-resolve.service';
import { DetailGuard } from './guard-module';

const routes: Routes = [
  {path: 'ListTalents' , component: ListTalentsComponent},
  {path: '' , component: MainPageComponent},
  {path: 'Talent/:id', component: DetailTalentComponent, 
    resolve:{ talent: TalentResolveService },
    canActivate: [DetailGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {
  

}
