console.log("Welcome to Spotify");
// Initializing the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');

let songs=[
    {songName:"Bitch I'm Back - By Moosewala",filepath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Bitch I'm Back - By Moosewala",filepath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Bitch I'm Back - By Moosewala",filepath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Bitch I'm Back - By Moosewala",filepath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Bitch I'm Back - By Moosewala",filepath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Bitch I'm Back - By Moosewala",filepath:"songs/1.mp3", coverPath:"covers/1.jpg"}

]

// audioElement.play(); 
// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');;
    }
})
// Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // Update Seekbar
})