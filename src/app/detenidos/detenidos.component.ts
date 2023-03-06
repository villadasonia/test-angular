import { Component, OnInit,ViewChild,Pipe} from '@angular/core';
import { Detenidos } from '../interfaces/detenidos';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-detenidos',
  templateUrl: './detenidos.component.html',
  styleUrls: ['./detenidos.component.css']
})

export class DetenidosComponent  {

  detenciones:Detenidos[]=[]
  detalle=0;
  edad:any;
  
  displayedColumns: string[] = ['id','fecha', 'nombre','apellido','cantidad_dias','dependencia','delito','acciones'];
  
  constructor(private httpApiService: ApiService , private route: ActivatedRoute,) { 
    
  }

  

  ngOnInit(): void {

    
    this.cargarMenu()
    
    console.log(this.edad)
    
    
    
         
    
  }

  onClick(id:number ){

    this.detalle=id;
    console.log(id)
  }



  public get sortData() {
    return this.detenciones.sort((a, b) => {
      return <any>new Date(b.fecha) - <any>new Date(a.fecha);
    });
  }
  


  cargarMenu(){
    this.httpApiService.getDetenciones()
    .subscribe((data)=>{
    this.detenciones=data;
    this.edad=this.detenciones.map( i=> this.httpApiService.CalculateAge(i.persona.fecha_nacimiento)
    )

    
    
    })
    
    
 
  }
   


  

  // key:string ='fecha';
  // reverse: boolean=false;

  // sort(key:any){
  //   this.key=key;
  //   this.reverse= !this.reverse;
  // }


//   CalculateAge(fecha_nacimiento:string): any {
//     const today: Date = new Date();
//     const birthDate: Date = new Date(fecha_nacimiento);
//     var edad: number = today.getFullYear() - birthDate.getFullYear();
//     const month: number = today.getMonth() - birthDate.getMonth();
//     if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
//         edad--;
//     }
//       return edad;
    
    
  
// }




}

