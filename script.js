console.log("Welcome to Spotify");
// Variables initialization
let songIndex=0;
let audioElement=new Audio("/songs/1.mp3");
let masterPlay=document.getElementById("masterPlay");
let progressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
let gif=document.getElementById("gif");
let songsItem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Let me wanna this",
    filePath: "/songs/1.mp3",
    coverPath: "/covers/1.jpg"
  },
  {
    songName: "Ashiqi Tum he ho",
    filePath: "/songs/2.mp3",
    coverPath: "/covers/2.jpg"
  },
  {
    songName: "Wanna fall in love",
    filePath: "/songs/3.mp3",
    coverPath: "/covers/3.jpg"
  },
  {
    songName: "Shinning in th sky",
    filePath: "/songs/4.mp3",
    coverPath: "/covers/4.jpg"
  },
  {
    songName: "What you want to do",
    filePath: "/songs/5.mp3",
    coverPath: "/covers/5.jpg"
  },
  {
    songName: "Blue eyes",
    filePath: "/songs/6.mp3",
    coverPath: "/covers/6.jpg"
  },
  {
    songName: "Goory Goory Mukhry per kaala....",
    filePath: "/songs/7.mp3",
    coverPath: "/covers/7.jpg"
  }
];

songsItem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }   
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
});

// Progress update
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration) * 100);
    progressBar.value = progress;
});
// Events list

progressBar.addEventListener('change',()=>{
    audioElement.currentTime=(progressBar.value * audioElement.duration/100);  
})

const makeAllPlay=()=>{
 Array.from(document.getElementsByClassName("songItemsPlay")).forEach((element)=>{
  element.classList.remove("fa-pause-circle");
  element.classList.add("fa-play-circle");
 });
};

Array.from(document.getElementsByClassName("songItemsPlay")).forEach((element)=>{
  element.addEventListener("click",(e)=>{
    makeAllPlay();
    index=parseInt(e.target.id);
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
    masterSongName.innerHTML=songs[songIndex].songName;
    audioElement.src= `songs/${index + 1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");  
  });
});

document.getElementById('next').addEventListener("click",()=>{
  if(songIndex >= 6){
    songIndex=0;
  }
  else{
    songIndex+=1;
  }
    audioElement.src = `songs/${index + 1}.mp3`;
    masterSongName.innerHTML=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");  
});

document.getElementById('previous').addEventListener("click",()=>{
  if(songIndex<=0){
    songIndex=0;
  }
  else{
    songIndex-=1;
  }
  audioElement.src=`songs/${songIndex + 1}.mp3`;
  masterSongName.innerText=songs[songIndex].songName;
  audioElement.currentTime=0;
  audioElement.play();
  gif.style.opacity=1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  
});