import {detailHome,detailinfo } from "./ui.js";

let form=document.querySelector("#exampleFormControlInput1");
 export async function details(dat){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${dat}`)
    const theData =await response.json();
    console.log(theData)
     detailinfo(theData);
 $(".two h1").on("click",()=>{
    $(".details").css("display","none")
})
 
 details();
}


async function search(val){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=search.php?s=${val}`)
    const theData =await response.json();
detailinfo(theData.categories);

}
form.addEventListener('keyup', function (){
    console.log("hhhhhhhhhhhiiiiiiiiiiii")
    if(this.value.length===2 ){
        search(this.value);
    }
})