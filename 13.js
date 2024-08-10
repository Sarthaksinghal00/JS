// alert("jai shree ram /// api with project ")
// console.log("ram ")

const url="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector('#facts')
const btn=document.querySelector('#btn')


const getFacts=async()=>{
console.log("featching data.. ")
let response =await fetch(url);
console.log(response) // JSON FORMATT
let data = await response.json()
factPara.innerText=data[1].text;


}
btn.addEventListener("click",getFacts);
// getFacts()
