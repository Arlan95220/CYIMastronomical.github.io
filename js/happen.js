var imgs = new Array
(
"../image/ima1.jpg",
"../image/2.jpg",
"../image/ima3.jpg",
"../image/activity1.jpg",
)
var nums =0;
setInterval("fort()",4000);
function fort()
{
  ima.src = imgs[nums];  
  nums++;
  if(nums==4)
	  nums=0;
}
