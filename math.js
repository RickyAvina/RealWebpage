var myWindow;
var total = 0;
var arr = [];

function openWin() {
    myWindow = window.open("https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif", "", "width=400 ,height=200");
	
}
function openWin2() {
    myWindow = window.open("http://www.netanimations.net/rooster_doing_crazy_dance.gif", "", "width=400 ,height=200");
	
}
function openWin3() {
    myWindow = window.open("https://media.giphy.com/media/pg3D0DkUGxBug/giphy.gif", "", "width=400 ,height=200");
	
}
function openWin4() {
    myWindow = window.open("http://www.animatedimages.org/data/media/636/animated-star-wars-image-0038.gif", "", "width=400 ,height=200");
	
}

function closeWin() {
    if (myWindow) {
        myWindow.close();
    }
}

function getVals() {
	arr = prompt("Enter your numbers").split(",");
	for(var i = 0; i < arr.length; i++){
		arr[i] = parseInt(arr[i]);
	}
	arr.sort(function(a,b){return a - b});
	
}

function getMedian(){
	
	alert(median());
}
function median() {
    var half = Math.floor(arr.length/2);

    if(arr.length % 2)
        return arr[half];
    else
        return (arr[half-1] + arr[half]) / 2.0;
}

function getMode(){
			alert(setMode())
	}

function setMode(){
	  var numMapping = {};
    for(var i = 0; i < arr.length; i++){
        if(numMapping[arr[i]] === undefined){
            numMapping[arr[i]] = 0;
        }        
            numMapping[arr[i]] += 1;
    }
    var greatestFreq = 0;
    var mode;
    for(var prop in numMapping){
        if(numMapping[prop] > greatestFreq){
            greatestFreq = numMapping[prop];
            mode = prop;
        }
    }
	return mode;
}

function setMean(){
	
	for(var i = 0; i < arr.length; i++){
		total += (arr[i])
	}
	total = total / arr.length;
	return total;
}
function getMean(){
	alert(setMean());
}