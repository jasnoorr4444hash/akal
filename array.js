// let fruits = ["apple", "orange", "banana", "mango"];
// fruits.sort()
// console.log(fruits);
// let num = [1, 9, 4, 11, 7, 3, 7, 45, 67, 23,]
// num.sort((a, b) => a - b);
// console.log(num);
// let numm = [1, 9, 4, 11, 7, 3, 7, 45, 67, 23,]
// numm.sort((a, b) => b - a);
// console.log(numm);
// let number = [1, 9, 4, 11, 7, 3, 7, 89, 67, 23,];
// let result = number.find(num => num > 10);
// console.log(result);
// let numberr=[1,8,4,9,3,6,8];
// let output=numberr.find(num =>num %2 ===0);
// console.log(output);
let c=[1,6,7,3,8,9,3,];
c.forEach((num,index)=>{
    console.log("index",index,"value",num);
 });
//   don't use  break and not store retuen value and not change original array
let d ={
    age:22,
    name:"noor",
};
for (let key in d){
   console.log(key," :",d[key]);

}
let e=" apple";
for(let val of e)
    console.log(val);
