import { Component, Input,Output,EventEmitter} from '@angular/core';

import { Detenidos } from '../interfaces/detenidos';
import { ApiService } from '../api.service';

import { ActivatedRoute ,Params,ParamMap, Router} from '@angular/router';
import {finalize} from 'rxjs/operators';



/**
 * @title Injecting data when opening a dialog
 */




@Component({
  selector: 'app-detalle-detenidos',
  templateUrl: './detalle-detenidos.component.html',
  styleUrls: ['./detalle-detenidos.component.css']
})
export class DetalleDetenidosComponent  {
  // @Input() detalle:any=null;
  // @Output() cerrar=new EventEmitter();
  detenidos:Detenidos[]=[]
  detenido:any
  
  id:number=0
  

  constructor(private httpApiService: ApiService, private _router: Router, private _route:ActivatedRoute) {
    
  }

  

  ngOnInit(): void {
    
    this.Detalle()
    this.detenidoDetalle(); 

  }

  detenidoDetalle(){
    
    this.httpApiService.getDetenciones().subscribe((data) => {
    this.detenidos = data;
    
    this.detenido=this.detenidos.find( i => i.detencion_id == this.id)
    console.log(this.detenidos,this.detenido)
    
    // this.detenido= this.detenido2.find(i => i.detencion_id === id)
    })
  }
  
  Detalle(){
    this._route.params.forEach((params:Params)=> {
      let id=params['id'];
      this.id=id
      console.log(this.id)
      
    });
  }
  


}
