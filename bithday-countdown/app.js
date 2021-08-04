const countdown = () => {
    //belirlediğimiz tarihten zamani aldik [milisaniye]
    const countDate = new Date('Jan 11,2022 00:00:00').getTime();
    //şimdiki zamanı alıyoruz
    const now = new Date().getTime();
    //birbirinden çıkarıp kalan sürenin milisaniyesini buluyoruz
    const gap = countDate - now;


    //zamanı çevireceğiz
    const second = 1000;
    const minute = second *60;
    const hour = minute * 60;
    const day = hour * 24;

    // gün için hesaplama [küsüratı attık]
    const textDay = Math.floor(gap / day);
    //gün modu alarak günleri çıkarıyoruz kalanıda saate bölüyoruz
    //saat elimize geliyor
    const textHour = Math.floor((gap % day)/hour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textSecond = Math.floor((gap % minute)/second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;

};

//js içinde olan fonksiyonu tekrarlama fonksiyonu
//ilk paremetre fonksiyon ikinci paremetre kaç milisaniyede bir değişmesi gerektiği
setInterval(countdown, 1000);


