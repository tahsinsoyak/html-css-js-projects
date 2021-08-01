//sabit olarak tanımladığımız değişkenlere html üzerindeki bölgeleri aktarıyoruz
const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')


//şarki isimleri
const songs = ['rahatBirakbeni','zurafa', 'tutmayankuponlar']

//şarkı sirasini takip etmek için
let songIndex = 1

//sarki yüklemek için
loadSong(songs[songIndex])

//sarkilari güncellemek için
//şarkıyı yüklerken şarkı ismi geliyor 
function loadSong(song){
    title.innerText = song //title kısmına şarkı ismi yükleniyor
    audio.src = `music/${song}.mp3` //audio kısımına müzik yükleniyor
    cover.src = `images/${song}.jpg` //cover kısmına resim yükleniyor
}

//şarkıyı oynatmak için
function playSong(){
    musicContainer.classList.add('play') //play oynatma kısmına ekleniyor
    playBtn.querySelector('i.fas').classList.remove('fa-play') //play butonu playı kaldırıyor
    playBtn.querySelector('i.fas').classList.add('fa-pause') //kaldırılan play butonu yerine pause konuluyor

    audio.play() //audio kendi fonksiyonunu kullanarak şarkıyı çalıyor
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

//bir önceki şarkıya atlama
function prevSong(){
    songIndex-- //şarkı indexi azaltılıyor
    if(songIndex<0){ //sınıra gelirsek şarkı liste uzunluğunun en sonuna gidiyor
        songIndex=songs.length -1
    }

    loadSong(songs[songIndex]) //şarkı indexi yollanarak şarkı yükleniyor 

    playSong() //ve sonda şarkıyı çaldırıyoruz
}

function nextSong(){
    songIndex++
    if(songIndex>songs.length -1){
        songIndex=0
    }

    loadSong(songs[songIndex])
  
    playSong()
}

//progress barını ilerletmek için
function updateProgress(e) {
    //click eventinden src dosyasının [duration,currenttime] fonksiyonlarıyla
    //sabit olarak veriyi alıyor
    const {duration,currentTime}=e.srcElement
    //veriyüzdesi değişkeni oluşturulup [zaman/toplam*100] hesabıyla 100'de alınıyor
    const progressPercent=(currentTime/duration)*100
    //100desi alınan değer js kullanılarak html üzerinde değişikliğe ugruyor
    progress.style.width=`${progressPercent}%`
}

//istediğimiz yere tıkladığımızda ilerlesin diye
function setProgress(e) {
    //genisliği tıklanıldığı anda client tarafından alacağım
    const width=this.clientWidth
    //tam olarak nereye tıkladığımızı veriyor offset
    //x exsenini veriyor
    const clickX = e.offsetX
    //müziğin o andaki saniyesini veriyor
    const duration = audio.duration
    //audionun o andaki kısımına [x ekseni / genisliği * toplam müzik]
    audio.currentTime = (clickX/width)*duration

}

//event listeners [BUTONLARA OLAY EKLEME]
//play butonuna click eventi ekliyoruz (bir fonksiyonu işaret ettik)
playBtn.addEventListener('click',() => {
    //çalıyor değişkeni oluşturuyoruz
    //değişkene html kısmındaki play geldiği anda fonksiyonun içi true oluyor
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying){ //çalıyor haldeyse bastığımız halde duruyor
        pauseSong()
    } else{ //duruyor haldeyse çalıyor
        playSong()
    }
})

//müzik değiştirme eventleri
//prev butonunda click eventi olduğunda prevSong fonksiyonuna gönderiyor
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

//audio eventinde zaman değiştiği anda updateprogress çalışıyor
audio.addEventListener('timeupdate',updateProgress)

//progres bara tikloayarak ilerleme
progressContainer.addEventListener('click',setProgress)


//şarkı bittikten sonra ilerleme
audio.addEventListener('ended',nextSong)