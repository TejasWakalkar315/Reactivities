export interface Icar{
    color:string,
    model:string,
    topSpeed?:Number
}

const Car1:Icar={
    color:'red',
    model:"ZXI",
    topSpeed:120
}

const Car2:Icar={
    color:'Dual tone red',
    model:"ZXI"
}

const multiply=(x:number,y:number):number=>{
   return x*y;
}

export const Cars=[Car1,Car2];