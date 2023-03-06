

export interface Detenidos{
    detencion_id:number;
    fecha:Date ;
    persona:{
        numero_documento:number;
        nombre:string;
        apellido:string;
        fecha_nacimiento:string;
        edad:number;

    }

    dependencia:{
        dependencia_id:number;
        descripcion:string;
    }
    
    cantidad_dias:number;
    delito:string;

    

}