const a=4;
//a=5;
let b:string="hello";
//b=3;

let c:number=4;
let list:Array<number>=[1,2,3];
let dynamic:any;

dynamic=3;
dynamic="hello";

let flag:boolean=false;



for(let i=0;i<5;i++)
{
    setTimeout(function()
    {
        console.log(i);}, 
        100*i);
    }
