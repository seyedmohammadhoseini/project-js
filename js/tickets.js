let  countirySelectBox =document.querySelector('.countirySelect');
let  citySelect =document.querySelector('.citySelect');

let countris ={
    iran :["Tehran","Mashhad","	Isfahan","Karaj","Shiraz","Tabriz"],
    usa :["New York","Los Angeles","	Chicago","Phoenix","Austin","Columbus"],
    canada :["Toronto","	Montreal","Calgary","Ottawa","Edmonton","Winnipeg"]
}

countirySelectBox.addEventListener("change",()=>{
    if(countirySelectBox.value==="Please select"){
        citySelect.innerHTML ="";
        citySelect.innerHTML +=`  <option >Please city , ...</option>`;
    }else{
    let maincountryName =countirySelectBox.value;
    let maincountryCity =countris[maincountryName];
    citySelect.innerHTML ="";
    maincountryCity.forEach( (city) => {
    citySelect.innerHTML +=`  <option >${city}</option>`;
    });}
})
