var Bulb = document.querySelector("#bulb img");
var Button = document.querySelector("button");
var Box = document.querySelector("#box");
var flag =0;

Button.addEventListener("click", function(){
      if(flag == 0){
            Button.innerHTML = "Off";
            Button.style.backgroundColor = "#000";
            Button.style.color = "#fff";
            Bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif"
            Box.style.backgroundColor = "#ffffb3"
            flag = 1;
      }else{
            Button.innerHTML = "On";
            Button.style.backgroundColor = "yellow";
            Button.style.color = "#000";
            Bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif"
            Box.style.backgroundColor = "#00000058"
            flag = 0;
      }
})

