import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SessionService } from "../services/session/session.service";

@Injectable({
    providedIn:'root'
})

export class DetailGuard implements CanActivate{
    constructor(private session: SessionService){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.session.hasLoginName();
    }
}