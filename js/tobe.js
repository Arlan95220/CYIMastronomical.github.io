	<!--下拉表單-->
	function showdiv(id) {
  try {
      var sbtitle = document.getElementById(id);
      if (sbtitle) {
          if (sbtitle.style.display == 'block') {
              sbtitle.style.display = 'none';
          } else {
              sbtitle.style.display = 'block';
          }
      }
  }
  catch (e) { }
} 
	<!--音樂播放器-->
	function playPause() {
	   var music = document.getElementById('music');
	   var music_btn = document.getElementById('musicop');
	   if (music.paused){
	       music.play();
	       music_btn.src = '../image/open.png';
	   }
	   else{
	       music.pause();
	       music_btn.src = '../image/close.png'; 
	   }
	}   