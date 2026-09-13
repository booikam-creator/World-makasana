import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../service/token.service';
// Adjust path as needed

export const signinGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);

  const router = inject(Router)
  if(tokenService.getToken()){
    return true
  }else{

    router.navigate(['/signin'])
  }
  return true 
};