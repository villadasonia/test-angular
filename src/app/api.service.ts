import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  private detalleUrl ='http://localhost:4200/detalle-detenido'

  constructor(private httpClient: HttpClient ) { }
 
  getDetenciones(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${environment.baseURL}detenciones.json`);
  }

  
 

    
}