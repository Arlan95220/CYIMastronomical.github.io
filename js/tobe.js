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

var imf = new Array
(
"../image/fly2.png",
"../image/fly.png",
)
var numf =0;
setInterval("flying()",1000);
function flying()
{
  fly.src = imf[numf];  
  numf++;
  if(numf==2)
	  numf=0;
}
