console.log('Welcome to Psotify');

//initialize the variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:'Main Hoon Hero Tera', filePath:'songs/1.mp3', coverPath:'covers/cover1.jpg'},
    {songName:'Baby', filePath:'songs/2.mp3', coverPath:'covers/cover2.jpg'},
    {songName:'Love the way you lie', filePath:'songs/3.mp3', coverPath:'covers/cover3.jpg'},
    {songName:'Kuch is Tarah', filePath:'songs/4.mp3', coverPath:'covers/cover4.jpg'},
    {songName:'Pehli Nazar Me', filePath:'songs/5.mp3', coverPath:'covers/cover5.jpg'},
    {songName:'Main Rahoon Ya Na Rahoon', filePath:'songs/6.mp3', coverPath:'covers/cover6.jpg'},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
    }
})

//listen to events
myProgressBar.addEventListener('timeupdate',()=>{
    
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value;
})