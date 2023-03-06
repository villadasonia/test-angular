import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Detenidos } from '../interfaces/detenidos';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {
  detenciones:Detenidos[]=[];
  total_detenciones:number = 0;
  total_por_dependencia23:any;
  total_por_dependencia24:any;
  total_por_dependencia9:any;
  ultimo_movimiento:Date | undefined;
  
  constructor(private httpApiService: ApiService) {
  }

  ngOnInit(){
    this.calcularReporte()
   

  }

  listDetenciones(){
    this.httpApiService.getDetenciones()
    .subscribe((response)=>{
      this.detenciones = response;
    })
  }

  calcularReporte(){
    this.httpApiService.getDetenciones()
    .subscribe((response)=>{
      this.detenciones = response;
      this.total_detenciones=this.detenciones.length;
            
      this.total_por_dependencia23=this.detenciones.filter( i=>i.dependencia.dependencia_id ==23).length ;
      this.total_por_dependencia24=this.detenciones.filter( i=>i.dependencia.dependencia_id ==24).length;
      this.total_por_dependencia9=this.detenciones.filter( i=>i.dependencia.dependencia_id ==9).length;
      
      console.log(this.total_por_dependencia23,this.total_por_dependencia24,this.total_por_dependencia9);
    })
  }
    
  

}
