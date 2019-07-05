var video = document.getElementById('video');
video.autoplay = true;
video.loop = true;

video.addEventListener('play', function() {
});
video.addEventListener('pause', function() {
});

var progressTime = document.getElementById('progressTime');

var currentTime = document.getElementById('currentTime');
video.addEventListener('timeupdate', function() {
    currentTime.textContent = Math.floor(video.currentTime);
});

var totalTime = document.getElementById('totalTime');
video.addEventListener('loadedmetadata', function() {
    totalTime.textContent = Math.floor(video.duration);
});

var playImg = document.getElementById('play_img');
var playing = false;
var play = document.getElementById('play');
play.addEventListener('click', function () {
    if(playing == false){
        video.play();
        playing = true;
        playImg.src = "image/AGL_MediaPlayer_Player_Pause.svg";
    }else {
        video.pause();
        playing = false;
        playImg.src = "image/AGL_MediaPlayer_Player_Play.svg";
    }
});

var ShuffleImg = document.getElementById('loopimg');
var Looping = document.getElementById('Looping');
Looping.addEventListener('click', function () {
    if(video.loop){
    	video.loop = false;
        ShuffleImg.src = "image/AGL_MediaPlayer_Loop_Inactive.svg"
        console.log('loop off');
    }else{
    	video.loop = true;
        ShuffleImg.src = "image/AGL_MediaPlayer_Loop_Active.svg"
        console.log('loop on');
    }
});

var MAX = 3;

var mp4_name = [MAX];
mp4_name[0] = "./test.mp4"
mp4_name[1] = "./testB.mp4"
mp4_name[2] = "./NycTraffic.mp4"
var index = 0;

var back = document.getElementById('previous');
back.addEventListener('click', function () {
    if (index <= 0)
        index = MAX;
    video.src = mp4_name[--index];
        playing = true;
        playImg.src = "image/AGL_MediaPlayer_Player_Pause.svg";

});

var next  = document.getElementById('next');
next.addEventListener('click', function () {

    if ( index == MAX-1)
        index=-1;
      video.src = mp4_name[++index];
if (playing ==true ){
    video.play();
}
        playing = true;
        playImg.src = "image/AGL_MediaPlayer_Player_Pause.svg";

});

var seeking=false, seekto ;
var slider= document.getElementById("seekslider")
seekslider.addEventListener("mousedown", function(event){ seeking=true; seek(event); });
seekslider.addEventListener("mousemove", function(event){ seek(event); });
seekslider.addEventListener("mouseup",function(){ seeking=false; });

function seek(event){
    if(seeking){
        seekto = video.duration * ((event.clientX - seekslider.offsetLeft )/ slider.getBoundingClientRect().width);
        video.currentTime = seekto;
	}
}

    var sliderposition = function(){
        seekslider.value = (  video.currentTime )/ video.duration * 100 ;
    }

    setInterval(sliderposition, 250);

