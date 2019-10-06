class classDemo
{
    //properties,methods,constructor
    username:string;
    password:string;
    ssn:number;


    getUsername()
    {
        return this.username;//username property of the class
    }


    setUsername()
    {
    this.username="hello";// set username propert to one name
    }

    getSSN()
    {
        return this.ssn;
    }
    
}
//create object of the class and using that object call the methods or properties present in that class
let cd=new classDemo();
cd.setUsername();
console.log(cd.getUsername());