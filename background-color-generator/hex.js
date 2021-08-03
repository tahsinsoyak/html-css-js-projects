//random renk için değişkenler
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    let hexColor = '#'; //sürekli değişecek bir renk değişkeni ayarlıyoruz
    for(let i=0;i<6;i++){
        //sürekli artarken hastagten sonrasina 6 hane ekliyeceğiz
        hexColor += hex[getRandomNumber()];
    }

    //rengin textini hexcolora eşitledik 
    color.textContent = hexColor;
    //govdeye arka plan yaptık degiskeni
    document.body.style.backgroundColor=hexColor;
})

//raskele diziden eleman çekmek için fonksiyon
function getRandomNumber (){
    return Math.floor(Math.random() * hex.length);
}