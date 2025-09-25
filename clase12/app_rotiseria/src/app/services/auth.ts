import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  
  private http = inject(HttpClient);

  url = 'http://localhost:6003';

  login(dataLogin:LoginRequest): Observable<any>{
    return this.http.post(this.url + '/auth/login', dataLogin);
  }

}
