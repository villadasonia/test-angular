import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Detenidos } from '../interfaces/detenidos';
import swal from 'sweetalert';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {
  detenciones:Detenidos[]=[];
  total_detenciones:number = 0;
  cantidad_de_menores:any;
  total_por_dependencia23:any;
  total_por_dependencia24:any;
  total_por_dependencia9:any;
  click:boolean=false;
  ultimo_movimiento:Date | undefined;
  observaciones:string='';
  
  constructor(private httpApiService: ApiService) {
  }

  ngOnInit(){
    this.calcularReporte()
    console.log(this.observaciones)
   

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
      let edad=this.detenciones.map( i=> this.httpApiService.CalculateAge(i.persona.fecha_nacimiento));
      this.cantidad_de_menores=edad.filter(i=>i<18).length;

            
      this.total_por_dependencia23=this.detenciones.filter( i=>i.dependencia.dependencia_id ==23).length ;
      this.total_por_dependencia24=this.detenciones.filter( i=>i.dependencia.dependencia_id ==24).length;
      this.total_por_dependencia9=this.detenciones.filter( i=>i.dependencia.dependencia_id ==9).length;

      
      console.log(this.total_por_dependencia23,this.total_por_dependencia24,this.total_por_dependencia9,this.cantidad_de_menores);
    })
  }



  onClick(){
    this.click=true;
    console.log(this.click)
  }

  guardarReporte(){
    let data={
      total_detenciones:this.total_detenciones,
      dependencia1:this.total_por_dependencia23,
      dependencia2:this.total_por_dependencia24,
      dependencia3:this.total_por_dependencia9,
      observaciones:this.observaciones,


    }
    localStorage.setItem('Rep_Det',JSON.stringify(data))
    swal({
      title: "El Reporte se guardo con Éxito",
      text: "Haz Clic en el boton!",
      icon: "success",
    });
  }
  
}
    
  





