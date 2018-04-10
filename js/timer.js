		function startTime() {
		    var today = new Date();
		    var h = today.getHours();
		    var m = today.getMinutes();
		    var s = today.getSeconds();
		    h = checkTime(h);
		    m = checkTime(m);
		    s = checkTime(s);
		    document.getElementById('txt').innerHTML =
		    h + ":" + m + ":" + s;
		    var t = setTimeout(startTime, 500);
		}
		function checkTime(i) {
		    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
		    return i;
		}
				//test function

		function test() {

			document.getElementById("test1").innerHTML=timeDisplay(getTotaltime ()-10) ;
			// document.getElementById("test1").innerHTML=getTotaltime ();


		}

		//function to calculate total time and return total time in seconds
		function getTotaltime () {
			// get the countDownTime from user setup
			var displayedMin=Number(document.getElementById('minutes').innerHTML) ;
			var displayedSec=Number(document.getElementById('seconds').innerHTML) ;
			var displayedhours=Number(document.getElementById('hour').innerHTML) ;
			// calulate total time in seconds
			var totalTimeInSec=Math.abs (60*60*displayedhours)+Math.abs (60*displayedMin)+Math.abs (displayedSec);
			
			if (document.getElementById('hour').innerHTML.charAt(0)==="-") {
				return totalTimeInSec*(-1);
			}
			
			
			return totalTimeInSec;
		}

		function timeDisplay(totalSec) {
			if (totalSec >=0) {
				var sec= totalSec%60;
				var remainder=Math.floor(totalSec/60);
				var min=remainder%60;
				hour=Math.floor (remainder/60);
				hour = checkTime(hour);
				min = checkTime(min);
				sec = checkTime(sec);
				
				document.getElementById('minutes').innerHTML=min;
				document.getElementById('seconds').innerHTML=sec;
				document.getElementById('hour').innerHTML=hour;
			} else {
				totalSec=Math.abs(totalSec);
				var sec= totalSec%60;
				var remainder=Math.floor(totalSec/60);
				var min=remainder%60;
				hour=Math.floor (remainder/60);
				hour = checkTime(hour);
				min = checkTime(min);
				sec = checkTime(sec);
				document.getElementById('hour').innerHTML="-"+hour;
				document.getElementById('minutes').innerHTML=min;
				document.getElementById('seconds').innerHTML=sec;
				
			}
			
		}
		clearTime=function() {
			document.getElementById('minutes').innerHTML="00";
			document.getElementById('seconds').innerHTML='00';
			document.getElementById('hour').innerHTML="00";
		}

		// a global var to allow timer countdown function stop
		var TimerRuningControl = 1;
		// a global varible to track if start botton has been clicked
		// in another word, to track if countDown function is running or not
		var startBottonOn= false;
		function countDown () {
			if (TimerRuningControl ===0) return;

			timeDisplay(getTotaltime ()-1);
			setTimeout(countDown, 1000);
		}
		
		// when click invoke this function to start timmer
		 function startTimerFun(x) { 
		 	switch (x) {
		 		case 0:
		 			if (!startBottonOn) {
		 				TimerRuningControl =1;
		 				startBottonOn=true;
		 				countDown ();
		 			}
		 			
		 						
		 			
		 			
		 			break;
		 		case 1:
		 			//document.getElementById("test1").innerHTML=document.getElementById('hour').innerHTML;
		 			TimerRuningControl=0;
		 			startBottonOn=false;
		 			break;
		 		case 2:
		 			//
		 			clearTime();
		 			TimerRuningControl=0;
		 			startBottonOn=false;
		 			break;
		 		default:
		 			// do nothing 
		 	}
		}

		setTimer =function () {
			// stop timmer
			TimerRuningControl=0;
		 	startBottonOn=false;
		 	//document.getElementById("warning").innerHTML="warning message";

		 	// update each field in the timer
		 	/*old code
		 	document.getElementById('minutes').innerHTML=document.getElementById('setMin').value;
			document.getElementById('seconds').innerHTML=document.getElementById('setSec').value;
			document.getElementById('hour').innerHTML=document.getElementById("setHour").value;
			*/
			var displayedMin=Number(document.getElementById('setMin').value);
			var displayedSec=Number(document.getElementById('setSec').value)  ;
			var displayedhours=Number(document.getElementById("setHour").value)  ;
			// calulate total time in seconds

			var totalTimeInSec=60*60*Math.abs (decimalToInt(displayedhours))+60*Math.abs ( decimalToInt (displayedMin)) +Math.abs (decimalToInt (displayedSec));
			
			if (document.getElementById("setHour").value.charAt(0)==="-") {
				timeDisplay(totalTimeInSec*-1) ;
			} else {
				timeDisplay(totalTimeInSec) ;
			}
			
			
			


		}

		// convert decimal to int eg. -1.3 is 3
		decimalToInt = function (x) {
			if (x >=0) return Math.floor(x);
			if (x <0) return Math.ceil (x);
		}
		
		//click function to increase or decreae correspding digits of h m s by 1
		hourUp = function () {
			TimerRuningControl=0;
		 	startBottonOn=false;
			
			document.getElementById('hour').innerHTML=checkTime(Number(document.getElementById('hour').innerHTML)+1);
				
			
		}
		minUp = function () {
			TimerRuningControl=0;
		 	startBottonOn=false;
			if(document.getElementById('minutes').innerHTML<59){
				document.getElementById('minutes').innerHTML=checkTime(Number(document.getElementById('minutes').innerHTML)+1);
				}
			
		}
		secUp = function () {
			TimerRuningControl=0;
		 	startBottonOn=false;
			if(document.getElementById('seconds').innerHTML<59){
				document.getElementById('seconds').innerHTML=checkTime(Number(document.getElementById('seconds').innerHTML)+1);
				}
			
		}
		
		hourDown = function () {
			TimerRuningControl=0;
		 	startBottonOn=false;
			
			document.getElementById('hour').innerHTML=Number(document.getElementById('hour').innerHTML)-1;
				
			
		}
		minDown = function () {
			TimerRuningControl=0;
		 	startBottonOn=false;
			if(document.getElementById('minutes').innerHTML>0){
				document.getElementById('minutes').innerHTML=checkTime(Number(document.getElementById('minutes').innerHTML)-1);
				}
			
		}
		secDown = function () {
			TimerRuningControl=0;
		 	startBottonOn=false;
			if(document.getElementById('seconds').innerHTML>0){
				document.getElementById('seconds').innerHTML=checkTime(Number(document.getElementById('seconds').innerHTML)-1);
				}
			
		}
		
		
		
		
		


