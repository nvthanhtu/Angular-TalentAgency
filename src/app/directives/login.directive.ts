import { Directive, ElementRef, Input } from '@angular/core';
import { SessionService } from '../services/session/session.service';

@Directive({
  selector: '[appRequiredLogin]'
})
export class LoginDirective {

  constructor(private session?: SessionService, private el?: ElementRef) {
    if(el != null && session != null)
      el.nativeElement.style.display = session.hasLoginName() ? "block":"none";
  }
}
