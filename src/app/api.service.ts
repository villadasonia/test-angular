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

  
  CalculateAge(fecha_nacimiento:string): any {
    const today: Date = new Date();
    const birthDate: Date = new Date(fecha_nacimiento);
    var edad: number = today.getFullYear() - birthDate.getFullYear();
    const month: number = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        edad--;
    }
      return edad;
    
    
  
}

    
}

