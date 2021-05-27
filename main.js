const music = document.querySelector("audio");
const play= document.getElementById("play");
const img= document.getElementById("img");
const artist= document.getElementById("artist");
const title= document.getElementById("title");
const prev= document.getElementById("prev");
const next= document.getElementById("next");

const songs=[{
    name: "1",
    title:"Acoustic",
    artist: "Acoustic royalty",
},
{
    name: "2",
    title:"Cute",
    artist: "soft and mellow ",
},
{
    name: "3",
    title: "Memories",
    artist: "piano, synths, drum",
}
];
let isPlaying = false;
const playMusic = ()=>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
};
const pauseMusic = ()=>{
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};
play.addEventListener('click',()=>{
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
});
const loadsong = (songs)=>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "Music/" + songs.name + ".mp3";
    
}
let songindex=0;


const nextsong=()=>{
    songindex = (songindex +1)% songs.length;
    loadsong(songs[songindex]);
    playMusic();
}
const prevsong=()=>{
    songindex = (songindex - 1 +  songs.length) % songs.length;
    loadsong(songs[songindex]);
    playMusic();
}
next.addEventListener("click",nextsong);
prev.addEventListener("click",prevsong);
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
document.body.classList.toggle('dark');
});