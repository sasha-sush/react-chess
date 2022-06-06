import React from "react";

class Timer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			timerSec : 0,
			timerMin : 0
		};
	}
	
	timerInterval = NaN;
	timerStarted = false;

	render(){
		return (
			<div id="timer-div">
				<div>
					<div id="timer-numbers-div">
						<span id="timer-span-background">88 88</span>
						<span id="timer-span">00:00</span>
					</div>	
					<div id="timer-buttons-div"> 
						<button onClick={() => this.timerStart()}  id="timer-button-start">Start</button>
						<button onClick={() => this.timerStop()}   id="timer-button-stop" hidden>Stop</button>
						<button onClick={() => this.timerPause()}  id="timer-button-pause" >Pause</button>
						<button onClick={() => this.timerResume()} id="timer-button-resume" hidden>Resume</button>
					</div>
				</div>
			</div>
		);
	}

	timerStart(){
		this.setState({
			timerSec : 0,
			timerMin : 0
		});

		this.timerStarted = true;
		this.timerInterval = setInterval(() => this.timerUpdate(), 1000);

		document.getElementById('timer-button-stop').hidden = false;
		document.getElementById('timer-button-start').hidden = true;
		
		//document.getElementById('timer-button-pause').disabled = false;
	}
	
	timerPause(){
		if(!this.timerStarted) return;
		document.getElementById('timer-button-pause').hidden = true;
		document.getElementById('timer-button-resume').hidden = false;
		clearInterval(this.timerInterval);
	}
	
	timerResume(){
		document.getElementById('timer-button-pause').hidden = false;
		document.getElementById('timer-button-resume').hidden = true;
		this.timerInterval = setInterval(() => this.timerUpdate(), 1000);
	}
	
	timerStop(){
		this.timerStarted = false;
	
		clearInterval(this.timerInterval);
	
		document.getElementById('timer-button-pause').hidden = false;
		document.getElementById('timer-button-resume').hidden = true;
	
		//document.getElementById('timer-button-pause').disabled = true;
	
		document.getElementById('timer-button-stop').hidden = true;
		document.getElementById('timer-button-start').hidden = false;
	
		document.getElementById('timer-span').innerHTML = '00:00';
	}
	
	timerUpdate(){
		let newTimerSec = this.state.timerSec + 1;
		let newTimerMin = this.state.timerMin;
		if(newTimerSec > 59){
			newTimerSec = 0;
			newTimerMin += 1;
			if(newTimerMin > 59){
				this.timerStop();
			}
		}
		this.setState({timerSec : newTimerSec, timerMin : newTimerMin});
		
		let str = (newTimerMin < 10 ? '0' : '') + newTimerMin + ':' + (newTimerSec < 10 ? '0' : '') + newTimerSec;
		document.getElementById('timer-span').innerHTML = str;
	}

    
}

export default Timer;