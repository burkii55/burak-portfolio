alert('JavaScript Çalışıyor!');
let isim='BURAK';
alert('MERHABA  '+isim);

console.log('MERHABA DÜNYA');


let bolum='YBS';
console.log(isim);
console.log(bolum);

function temaDegistir(){
    document.body.classList.toggle('dark-mode');
}
function renkDegistir() {
    document.body.style.backgroundColor='lightblue';
}
 let renkAcikmi=false;
 function renkDegistir() {
    if(renkAcikmi===false){
        document.body.style.backgroundColor='lightblue';
        renkAcikmi=true;
    } else{
        document.body.style.backgroundColor='white';
        renkAcikmi=false;
    } 
 }
 function saatiGoster() {
    let saatAlani=document.getElementById('saat');

    if (saatAlani===null) {
        console.log('saat id bulunamadı');
        return;
    }

    let şimdi =new Date();
    let saat=şimdi.getHours();
    let dakika=şimdi.getMinutes();
    let saniye=şimdi.getSeconds();
    saatAlani.innerText=saat + ':' + dakika + ':' + saniye + ':';
 }    
setInterval(saatiGoster,1000);
saatiGoster();

function fotoToggle() {
    let foto=document.getElementById('profilFoto');
    let buton=document.getElementById('fotoBtn'); 

    if(foto.style.display==='none') {
        foto.style.display='block';
        buton.innerText='Fotoğrafı Gizle';

    } else{
        foto.style.display='none';
        buton.innerText='Fotoğrafı Göster';
    }
}