import { ElementRef } from '@angular/core';
import { SessionService } from '../services/session/session.service';
import { LoginDirective } from './login.directive';

describe('LoginDirective', () => {
  it('should create an instance', () => {
    const directive = new LoginDirective(new SessionService(), undefined);
    expect(directive).toBeTruthy();
  });
});
