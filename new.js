// unique() ;#function hoisting
// function unique() {
//     console.log("noor");
// }
class Unit{
    constructor(a,b){  
        console.log("hello");
        this.a=a,
        this.b=b
    }
    add(){
        console.log("function");
    }
    noor(){
        console.log(`value of a ${this.a},this value of b ${this.b}`)
    }
}
let obj1 = new Unit(10,20)
obj1.add()
obj1.noor()
class Main{
    constructor(l,w){
        this.l=l,
        this.w=w
    }
    area(){
        return this.l * this.w;
    }
    isSquare(){
        return this.l === this.w;
    }
}
const r =new Main(5,5)
console.log(r.area());
console.log(r.isSquare())

// let data=
// document.getElementById("hello").style.color=" red";
// console.log(data);
// let data=
// document.getElementById("hello").innerHTML=" noor";
// console.log(data);
// let data=
// document.getElementById("a").src=" untitled.jpg";
// console.log(data);
//  let data=document.getElementsByClassName("b");
//  data[0].style.color="blue";
//  console.log(data);
// let date=document.getElementsByTagName("p").innerHTML=" hii hlo";
// console.log(date);
 let box=document.querySelector("#s");
console.log(box)
let data=
document.getElementById("outer").outerHTML=" hi i am noor";
console.log(data);
let dom=
document.getElementById("inner").innerText;
console.log(dom);
let dat=
document.getElementById("text").textContent;
console.log(dat);
let noor=document.createElement("p");
noor.textContent="hello";
document.body.removeChild(noor);
