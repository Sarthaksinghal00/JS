// console.log("jai shree ram   class&Obje");
// const student ={
//     fullName :"sathak singhal ",
//     marks :94.9,
//     printMarks:function(){
//         console.dir("marks =",this.marks); /// this is the same object ex- student.marks()
//                                                                 //we can replace this.marks()
//     }

// }

// //class 
// class ToyotaCar{
//     constructor(brand){
//         console.log("creating new  object ");
//         this.brand=brand;

//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
  
// }

// let fortuner =new ToyotaCar("fortuner");

// let lexus=new ToyotaCar();

// inheritance  in js 
// class parent {
//     hello(){
//         console.log("hello");
//     }
// }
// class child extends parent{

// }
// let obj =new child()

//qusetion 1

let data="sarthak singhal"

class user {
   constructor(name,email){
    this.name=name;
    this.email=email;
   }
   viewData(){
    console.log("data=",data)
   }
}

let sut1=new user("sarthak bhaui","sarthaksinghal0910@gmail.com")
class admin extends user{
    constructor(name,email){
        super(name,email);
    }

    editData(){
        data="some new data";
    }
}
let admin1=new admin("ram","ra,@gmail.com")


