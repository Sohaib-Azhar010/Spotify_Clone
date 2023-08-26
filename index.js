console.log("My website");

//initializing variables

let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let SN=document.getElementById('SN');
let songItems = Array.from(document.getElementsByClassName('songItem'));

//making an array of songs
let songs = [
    {songName:"See You Again" , filePath:"Songs/1.mp3", coverPath:"Imgs/cover1.jpg" },
    {songName:"Wavin' Flag" , filePath:"Songs/2.mp3", coverPath:"Imgs/wavin.jpg" },
    {songName:"Despacito" , filePath:"Songs/3.mp3", coverPath:"Imgs/despacito.jpg" },
    {songName:"Cheques" , filePath:"Songs/4.mp3", coverPath:"Imgs/Cheques.jpg" },
    {songName:"Dior" , filePath:"Songs/5.mp3", coverPath:"Imgs/Dior.jpg" },
    {songName:"Offshore" , filePath:"Songs/6.mp3", coverPath:"Imgs/offshore.jpg" }, 
    
];

songItems.forEach((element,i)=>{

    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;


})




//play button function
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        SN.style.opacity=1;
        
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
        SN.style.opacity=0;

    }

});


audioElement.addEventListener('timeupdate',()=>{
    //getting play time
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

});

myProgressBar.addEventListener('change',()=>{

    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
});

const makeAllPlays= ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src =`Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        SN.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
});

document.getElementById('next').addEventListener('click',()=>{

    if(songIndex>=6){
        songIndex=0;
    }
    else{

        songIndex +=1;

    }
    audioElement.src =`Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    SN.style.opacity=1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{

    if(songIndex<=0){
        songIndex=0;
    }
    else{

        songIndex -=1;

    }
    audioElement.src =`Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    SN.style.opacity=1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
