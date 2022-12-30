let bulbimg =document.getElementById("bulb");
let bulbflag =true;
let  bublbBtn =document.getElementById("bublbBtn")
function turnOnorOff(){
  if(bulbflag){
    bulbimg.setAttribute('src', 'assets/bulbon.gif')
    bulbflag =false;
    bublbBtn.innerHTML =" turn off"
    bublbBtn.style.background ="rgb(132, 23, 23)";
  }else{
    bulbimg.setAttribute('src', 'assets/bulboff.gif')
    bulbflag =true;
    bublbBtn.innerHTML =" turn on";
    bublbBtn.style.background ="rgb(43, 160, 19)";
  }
}
// --------------------------------------------------------------------------------------------------
// form login---------------------------------------------------------------------------------
let  username =document.querySelector(".username");
let  password =document.querySelector(".password");
let modal =document.querySelector(".modal");

function dataValidation(){
let usernameValue =username.value;
let passwordValue =password.value;
  if (usernameValue.length <12 || passwordValue.length <8){
   modal.style.display ="flex ";
   modal.style.background ="red";
   modal.innerHTML ="رمز یا نام کاربری درست نیست";
  }else{
    modal.style.background ="green ";
    modal.innerHTML ="افرین درست بود"; 
    modal.style.display ="flex ";
  }
  setTimeout(()=>{
    modal.style.display ="none ";
   },3000)
}
// ------------------------------
 let usernameMassge =document.querySelector(".username-valedition");
 let passwordMassge =document.querySelector(".password-valedition");

 function usenameval(){
 if(username.value.length < 12){
  usernameMassge.style.display ="block";  
  usernameMassge.style.color ="brown";
  usernameMassge.innerHTML="must contain 12char(min)";
 }else{ 
  usernameMassge.style.color ="green";
  usernameMassge.innerHTML="correct username Value";
 }
 } 
 function passwordval(){
  if(password.value.length < 8){
    passwordMassge.style.display ="block";  
    passwordMassge.style.color ="brown";
    passwordMassge.innerHTML="must contain 8char(min)";
   }else{ 
    passwordMassge.style.color ="green";
    passwordMassge.innerHTML="correct password Value";
   }
 }




 


