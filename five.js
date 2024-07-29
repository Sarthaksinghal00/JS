console.log("jai shree ram//5 #function & Methods ")
// function sum(santa,banta){
//     console.log(santa+banta)
// }
// sum(4,5)
// const arrowsum =(a,b)=>{
//    return a*b;
// };
// arrowsum(6,7)


//question 1
// function vowels(str){
//     let count =0;
//   for (const char of str){
//     if (char ==="a" || char === "e" || char === "i"|| char === "o"|| char === "u"){
//         count++;
//     }
//   }
// console.log(count);
// }

// let arrowvowles=(str)=>{
//     let count =0;
//     for (const char of str){
//       if (char ==="a" || char === "e" || char === "i"|| char === "o"|| char === "u"){
//           count++;
//       }
//     }
//     return(count);


// }

// forEach loop in arrays 
//  "this is for particular string or a number to apply on the single arugement and like sarthak convert to uppercase "
// let arr =["puna ","delhi ","mumbai "];
// arr.forEach((val)=>{
//     console.log(val.toUpperCase());
// })

// question 2

// let squar=[2,3,4,6,7,8];
// squar.forEach((sum)=>{
//     console.log(`sum of ${squar} = ` + sum*sum)
// })

// REDUCE METHOD
// let ss =[1,2,3,4,5];
// const output=ss.reduce((a,b)=>{
//     return a +b;
// });
// console.log(output)

// question 1 (using filter arry)

// let marks =[89,95,97,56,7,94];
// let toppers = marks.filter((val)=>{
//    return val>90;

// })
// console.log(toppers)

// question 2

let n =prompt("enter a number:- ");
let arr=[];
for (let i=1; i<n; i++){
    arr[i-1]=i;
    

}
console.log(arr)
let output =arr.reduce((a,b)=>{
    return a +b;
})
console.log("sum = ",output);

let  factorial =arr.reduce((a,b)=>{
    return a *b;
})
console.log("factorial= ", factorial);












