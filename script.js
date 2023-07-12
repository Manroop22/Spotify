console.log("Welcome to Spotify");
// Initializing the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems= Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Bitch I'm Back - By Moosewala",filePath:"songs/1.mp3", coverPath:"covers/1.jpeg"},
    {songName:"Mera Na - By Moosewala",filePath:"songs/2.mp3", coverPath:"covers/2.jpeg"},
    {songName:"Vaar - By Moosewala",filePath:"songs/3.mp3", coverPath:"covers/3.jpeg"},
    {songName:"Celebrity Killer - By Moosewala",filePath:"songs/4.mp3", coverPath:"covers/4.jpeg"},
    {songName:"295 - By Moosewala",filePath:"songs/5.mp3", coverPath:"covers/5.jpeg"},
    {songName:"G-Shit - By Moosewala",filePath:"songs/6.mp3", coverPath:"covers/6.jpeg"},
    {songName:"Signed to God - By Moosewala",filePath:"songs/7.mp3", coverPath:"covers/7.jpeg"},
    {songName:"Me and my Girlfriend - By Moosewala",filePath:"songs/8.mp3", coverPath:"covers/8.jpeg"},
    {songName:"Panjab - By Moosewala",filePath:"songs/9.mp3", coverPath:"covers/9.jpeg"},
    {songName:"Dear Mama - By Moosewala",filePath:"songs/10.mp3", coverPath:"covers/10.jpeg"}
]

songs.forEach((element, i)=>{
    document.getElementsByTagName("img")[i+1].src= songs[i].coverPath;
    document.getElementsByClassName("songName")[i].innerText = songs[i].songName;
})
// audioElement.play(); 
// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // Update Seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/ 100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${index+1}.mp3`;
        audioElement.currentTime= 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
