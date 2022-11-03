console.log("Welcomw to Shadow");
let songIndex=0;
let audioElement = new Audio('/songs/Aashiq Tera _ Full Audio Song _ Happy Bhag Jayegi(MP3_160K).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from( document.getElementsByClassName('songItem'));
let songs =[
    {songName:"Aashiq Tera", filePath:"/songs/Aashiq Tera _ Full Audio Song _ Happy Bhag Jayegi(MP3_160K).mp3", coverPath:"images/covers/1.jpg"},
    {songName:"Ab Na Phir Se", filePath:"/songs/Ab Na Phir Se - Lyrical _ Hacked _ Hina Khan _ Rohan Shah _ Yasser Desai _ Amjad Nadeem Aamir(M4A_128K).mp3", coverPath:"images/covers/2.jpg"},
    {songName:"Bachalo Ji", filePath:"/songs/Bachalo Ji _ Akhil _ Bachalo Ji Mainu In Do Akhiyan To _ Bachalo Ji Menu Ena 2 Akhiya Ton _ New Song(MP3_160K).mp3", coverPath:"images/covers/3.jpg"},
    {songName:"Badaami Rang", filePath:"/songs/Badaami Rang (Official HD Video) Nikk Ft Avneet Kaur _ Ikky _ Bang Music _ Latest Punjabi Songs 2020(MP3_160K).mp3", coverPath:"images/covers/4.jpg"},
    {songName:"Dil Sambhal Ja Zara Phir Mohabbat", filePath:"/songs/Dil Sambhal Ja Zara Phir Mohabbat _ Murder 2  Song _ Emraan Hashmi(MP3_160K).mp3", coverPath:"images/covers/5.jpg"},
    {songName:"Ek Mulaqat Zaruri Hai Sanam", filePath:"/songs/Ek Mulaqat Zaruri Hai Sanam _ Zinda Rehne Ke Liye _ Manan Bhardwaj _ New Sad Song 2019(MP3_160K).mp3", coverPath:"images/covers/6.jpg"},
    {songName:"Hum Teri Mohabbat Mein", filePath:"/songs/Hum Teri Mohabbat Mein _ Keshab Dey _ Extended Version _ New Trending Hindi Song _ KD _ 2020(M4A_128K).mp3", coverPath:"images/covers/7.jpg"},
    {songName:"In The End", filePath:"/songs/In The End _Chris Hemsworth _Extraction_WhatsApp Status(MP3_128K).mp3", coverPath:"images/covers/8.jpg"},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName
})


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0
    }
})

audioElement.addEventListener('timeupdate', ()=> {
    console.log('timeupdate')

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index = e.target.id
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })
})