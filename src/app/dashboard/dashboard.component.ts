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
  detenciones_recientes:any;
  total_por_dependencia23:any;
  total_por_dependencia24:any;
  total_por_dependencia9:any;
  observaciones:string='';

  click:boolean=false;
  ultimo_movimiento:Date | undefined;
  
  
  
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
      //calcula total de detenciones
      this.detenciones = response;
      this.total_detenciones=this.detenciones.length;
      let edad=this.detenciones.map( i=> this.httpApiService.CalculateAge(i.persona.fecha_nacimiento));
      this.cantidad_de_menores=edad.filter(i=>i<18).length;
     
      let fechas =this.detenciones.map(i=> new Date(i.fecha) > new Date('01-01-2023'));
      this.detenciones_recientes=fechas.filter(i=>i==true).length;

      //calcula totales por dependencia     
      this.total_por_dependencia23=this.detenciones.filter( i=>i.dependencia.dependencia_id ==23).length ;
      this.total_por_dependencia24=this.detenciones.filter( i=>i.dependencia.dependencia_id ==24).length;
      this.total_por_dependencia9=this.detenciones.filter( i=>i.dependencia.dependencia_id ==9).length;

      
      console.log(this.total_por_dependencia23,this.total_por_dependencia24,this.total_por_dependencia9,this.cantidad_de_menores,this.detenciones_recientes);
    })
  }



  onClick(){
    this.click=true;
    console.log(this.click)
  }

  guardarReporte(){

    //guarda los reportes en una variable data

    let data={
      total_detenciones:this.total_detenciones,
      cantidad_de_menores:this.cantidad_de_menores,
      detenciones_recientes:this.detenciones_recientes,
      
      dependencia1:this.total_por_dependencia23,
      dependencia2:this.total_por_dependencia24,
      dependencia3:this.total_por_dependencia9,
      observaciones:this.observaciones


    }

    localStorage.setItem('Rep_Det',JSON.stringify(data))

    //genera mensaje de exito con libreria swal
    swal({
      title: "El Reporte se guardo con Éxito",
      text: "Haz Clic en el boton!",
      icon: "success",
    });
  }
  
}
    
  





