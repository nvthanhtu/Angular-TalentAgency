import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Talent } from 'src/app/model/talent.model';
import { TalentsServiceService } from '../talents-service/talents-service.service';

@Injectable({
  providedIn: 'root'
})
export class TalentResolveService implements Resolve<Talent> {

  constructor(private talentService: TalentsServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Talent> {
    return this.talentService.getUser(route.params['id']);
  }
}
