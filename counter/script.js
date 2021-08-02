// set initial count
let count =0;

// select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
//arraye atti [button.btn.decrease] diyerek

//item olarak erişiyoruz
btns.forEach(function(btn) {
    //event nesnesini kullanarak giriyoruz içeri
    btn.addEventListener('click',function(e){
        //şimdi hangi butona tıkladığımızı kontrol edicez
        //tıkladığımız butondan class ismini alıcaz
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        //sadece 3 butonumuz olduğu için bu else kaldı
        else{
            count=0;
        }
        //renk değişimi için
        if(count>0){
            value.style.color='green';
        }
        if(count<0){
            value.style.color='red';
        }
        if(count==0){
            value.style.color='#333';
        }
        //value spanında belirttiğimizi şuanki js kodunu
        //htmlde eşitliyor
        value.textContent=count;
    })
});

