
   
export function detailHome(list){
        // console.log(data);
        let contiar=``;       
        for(let i=0; i < list.length; i++){
            const category = list[i];
        contiar +=`<div class="headInfo" id='${category.idCategory}'>
                    <img  src="${category.strCategoryThumb}" alt="${category.strCategory}">
            <div class="prag"><h2 class="heait">${category.strCategory}</h2>
            </div></div>`
         
        }

        document.querySelector(".headin").innerHTML=contiar;
    }
   export async function  getdata(){
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const data = await response.json(); // Data is lowercase for convention
        console.log(data);
        displaycategories(data.categories);
    }

  function displaycategories(list){
        let categories=``;
        for(let i=0; i < list.length; i++){
            const category = list[i];
        categories +=`<div class="Infocat" id=''>
        <img  src="${category.strCategoryThumb}" alt="${category.strCategory}">
<div class="prag"><h2 class="heait">${category.strCategory}</h2>
    <p>${category.strCategoryDescription}</p></div></div>`
        
    }
    document.querySelector(".catinfo").innerHTML=categories;

}


export async function  getArea(){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    const data = await response.json(); // Data is lowercase for convention
    console.log(data);
    Area(data.meals);
}

function Area(list){
    let Area=``;
    for(let i=0; i < list.length; i++){
        const category = list[i];
    Area +=` <div class="Area">
            <i class="fa-solid fa-house-laptop fa-4x"></i>
    <div class="prage"><h2 class="heait">${category.strArea}</h2>
    </div>
    </div>`
    
}
document.querySelector(".AllArea").innerHTML=categories;

}
export async function  geticredin(){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    const data = await response.json(); // Data is lowercase for convention
    console.log(data);
    gredin(data.meals);
}

function gredin(list){
    let Area=``;
    for(let i=0; i < list.length; i++){
        const category = list[i];
    Area +=`    <div class="Area">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
    <div class="prage"><h2 class="heait">${category.strIngredient}</h2>
        <p>${category.strDescription}</p>
    </div>
    </div> `
    
}
document.querySelector(".ingredient").innerHTML=categories;

}


  
// }
 export function detailinfo(list){
    console.log(list);
    let cont=``;       
    for(let i=0; i < list.length; i++){
            const category = list.meals[i];
        cont =` <div class="infodetail">
        <div class="first">
            <img src="${category.strMealThumb}" alt="">
            <h2>${category.strCategory}</h2>
        </div>
        <div class="two">
            <h1>x</h1>
            <h2>${category.strCategory}</h2>
            <p>${category.strmeal}</p>
        <p>Area : Filipino<br>
            Category : Beef<br>
            Recipes :</p>
            <div class="ineer">
        <p>1.5kg Beef</p>
                 </div>
                 <p>tags:</p>
                 <button type="button" class="btn btn-danger">youtube</button>
                 <button type="button" class="btn btn-success">Source</button>
        </div>
    </div>`
            document.querySelector(".details").innerHTML=cont;
    }}
    