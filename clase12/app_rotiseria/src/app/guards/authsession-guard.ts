import { CanActivateFn } from '@angular/router';

export const authsessionGuard: CanActivateFn = (route, state) => {
  console.log("Entra guard session");
  if(localStorage.getItem('token')){
    return true;
  }
  return false;
};
