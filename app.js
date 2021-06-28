// Write your JS in here
var pics = [
	"imgs/1-chick.jpg",
	"imgs/2-chick.jpg", 
	"imgs/3-chick.jpg",
	"imgs/4-chick.jpg",
	"imgs/5-chick.jpg",
	"imgs/6-chick.jpg",
	"imgs/7-chick.jpg",
	"imgs/8-chick.jpg", 
	"imgs/9-chick.jpg",
	"imgs/10-chick.jpg",
	"imgs/11-chick.jpg",
	"imgs/12-chick.jpg",
	"imgs/13-chick.jpg",
	"imgs/14-chick.jpg",
	"imgs/15-chick.jpg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	if(counter === 15){
		counter = 0
	}
	img.src = pics[counter]
	counter = counter + 1;
});
