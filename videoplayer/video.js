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
    progressTime.textContent = (100*Math.floor(video.currentTime)/Math.floor(video.duration)).toFixed(1);
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
//        play.textContent = "pause";
    }else {
        video.pause();
        playing = false;
        playImg.src = "image/AGL_MediaPlayer_Player_Play.svg";
 //       play.textContent = "play";
    }
});

//var stop = document.getElementById('stop');
//stop.addEventListener('click', function () {
//    video.pause();
//    video.currentTime = 0;
//});

//var pause = document.getElementById('pause');
//pause.addEventListener('click', function () {
//    video.pause();
//});

var ShuffleImg = document.getElementById('loopimg');
var Looping = document.getElementById('Looping');
Looping.addEventListener('click', function () {
    if(video.loop){
    	video.loop = false;
//    Looping.textContent = "Loop Off"
        ShuffleImg.src = "image/AGL_MediaPlayer_Loop_Inactive.svg"
        console.log('loop off');
    }else{
    	video.loop = true;
//	Looping.textContent = "Loop On"
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

    if ( index >= 2)
        index=-1;
      video.src = mp4_name[++index];
//  if (index == 0 ){
//    video.src = mp4_name[1];
//    index = 1;
//  } else {
//    video.src = mp4_name[0];
//    index = 0;
//  }
//  if (index >= 2) index = 0;
if (playing ==true ){
//    video.load();
    video.play();
}
        playing = true;
        playImg.src = "image/AGL_MediaPlayer_Player_Pause.svg";

});

var seeking=false, seekto ;
	seekslider.addEventListener("mousedown", function(event){ seeking=true; seek(event); });
	seekslider.addEventListener("mousemove", function(event){ seek(event); });
    seekslider.addEventListener("mouseup",function(){ seeking=false; });

    	function seek(event){
	    if(seeking){
		    seekslider.value = event.clientX - seekslider.offsetLeft;
	        seekto = video.duration * (seekslider.value / 100);
	        video.currentTime = seekto;
	    }
    }

//<meta name="viewport" content="width=device-width,initial-scale=1">
