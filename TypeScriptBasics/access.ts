import{classDemo} from './classDemo';
let cd = new classDemo(123);
cd.setUsername("ram");
console.log(cd.getUsername());
console.log(cd.getSSN());


export interface vehicle
{
   color:string; 
   engine:number;
   camera?:boolean; //using question mark allows to make property optional
}

function validate(value:number):number
{
    return value+1;
}

function validateCar(car:vehicle)
{
console.log(car.camera);
console.log(car.engine);
}
let bmw=
{
    color:"red",
    engine:100,
    camera:true
}
validateCar(bmw)
//console.log(obj.engine);

console.log(validate(2));