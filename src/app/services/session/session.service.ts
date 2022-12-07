import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private loginName: string ='';
  private loginNameKey: string = 'loginName';
  constructor() { 
     if(sessionStorage.getItem(this.loginNameKey) != null ){
        this.loginName = (sessionStorage.getItem(this.loginNameKey) as string);
     }
  }

  setLoginName(loginName:string){
    this.loginName = loginName;
    this.updateOrCreateSession();
  }

  hasLoginName(){
    return this.loginName?.length > 0 == true ;
  }

  removeSession(){
    sessionStorage.removeItem(this.loginNameKey);
    window.location.reload();
  }

  updateOrCreateSession(){
    sessionStorage.setItem(this.loginNameKey,this.loginName);
    window.location.reload();
  }

}
