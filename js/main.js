let bulbimg =document.getElementById("bulb");
let bulbflag =true;
let  bublbBtn =document.getElementById("bublbBtn")
function turnOnorOff(){
  if(bulbflag){
    bulbimg.setAttribute('src', 'assets/bulbon.gif')
    bulbflag =false;
    bublbBtn.innerHTML =" turn off"
  }else{
    bulbimg.setAttribute('src', 'assets/bulboff.gif')
    bulbflag =true;
    bublbBtn.innerHTML =" turn on"
  }
  console.log(bulbflag);
}
