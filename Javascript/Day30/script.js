const player = document.querySelector('.player');
const video = document.querySelector('.video');
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const speed = document.querySelector('.player-speed');
const currentTime = document.querySelector('.time-elapsed');
const duration = document.querySelector('.time-duration');
const fullscreenBtn = document.querySelector('.fullscreen');


//play and pause feature


function togglePlayPause(){
  if(video.paused){
    video.play()
    playBtn.classList.replace("fa-play","fa-pause")
    playBtn.setAttribute("title","pause")
  }
  else{
    video.pause()
    playBtn.classList.replace('fa-pause','fa-play')
  playBtn.setAttribute("title","play")
    
  }
}

//progress bar

function displayTime(time){
  const minutes=Math.floor(time/60)
  const seconds=Math.floor(time%60)
  return `${minutes}:${seconds}`
}

function updatePogressBar(){
  progressBar.style.width=`${(video.currentTime/video.duration)*100}%`
  currentTime.textContent=`${displayTime(video.currentTime)}`
  duration.textContent=`${displayTime(video.duration)}`

}

function seekProgress(e){
  const seekTime=e.offsetX/progressRange.clientWidth
  progressBar.style.width=`${seekTime*100}%`
  video.currentTime=seekTime * video.duration

}


function audioSeeker(event){

  let volume=event.offsetX/volumeRange.offsetWidth
   if(volume<0.1){
    volume=0
   }
   if(volume>0.9){
    volume=1
   }

  volumeBar.style.width=`${volume*100}%`
  video.volume=volume

}


playBtn.addEventListener("click",togglePlayPause)
video.addEventListener("click",togglePlayPause)
video.addEventListener("timeupdate",updatePogressBar)
progressRange.addEventListener("click",seekProgress)

volumeRange.addEventListener("click",audioSeeker)








