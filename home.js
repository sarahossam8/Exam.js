import { details } from "./details.js";
import { detailHome,getArea,geticredin,detailinfo,getdata } from "./ui.js";

        document.querySelectorAll("a").forEach((link)=>{
            link.addEventListener("click",async ()=>{
                console.log("hello")
               let x= link.getAttribute("alt");
               console.log(x)
               document.querySelector(`.${x}`).classList.remove('d-none')

               let y=link.getAttribute("aria")
               console.log(y)
               let z= await this.api(`${y}`); 
               getdata();
               detailinfo();
               getArea();
               geticredin();
            })
        })
       let  loading= document.querySelector(".loading")
       
     
        
        
      
  
    async function api(cat) {
        loading.classList.remove('d-none');

      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/${cat}`);
      const data = await response.json(); // Data is lowercase for convention
      console.log(data);
      loading.classList.add('d-none');
      detailHome(data.categories);

      document.querySelectorAll(".headInfo").forEach((head)=>{
        head.addEventListener("click",()=>{
            $(".details").css("display","block")
            detailinfo(head.dataset.id);

        })

        }
    )}
      
      api("categories.php"); 

      
     
  $(".icon2").on("click" ,()=>{
    $(".black").css("left","-15rem")
    $(".icon2").css("display","none")
    $(".icon1").css("display","block")
    $(".white").css("left","0")
  })
  $(".icon1").on("click" ,()=>{
    $(".black").css("left","0")
    $(".icon1").css("display","none")
    $(".icon2").css("display","block")
    $(".white").css("left","15rem")
  })