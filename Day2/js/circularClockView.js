function circularClockView(timeBinder){
    // Refactor to circularClock
    let secondsView = secondView();
    let minutesView = minuteView();
    let hoursView = hourView();
    let clock = {
        update: function(){
            this.rotateSecondsHandBy(timeBinder.bindSeconds());
            this.rotateMinutesHandBy(timeBinder.bindMinutes());
            this.rotateHoursHandBy(timeBinder.bindHours());
            console.log(`${timeBinder.bindHours()}:${timeBinder.bindMinutes()}:${timeBinder.bindSeconds()}`);
        },
        rotateSecondsHandBy: function(rotateInDeg){
            secondsView.rotateBy(this.rotateFromTwelveOClock(rotateInDeg));
        },
        rotateMinutesHandBy: function(rotateInDeg){
            minutesView.rotateBy(this.rotateFromTwelveOClock(rotateInDeg));
        },
        rotateHoursHandBy: function(rotateInDeg){
            hoursView.rotateBy(this.rotateFromTwelveOClock(rotateInDeg));
        },
        rotateFromTwelveOClock: function(rotateInDeg){
            return this.standardizeRotation(-rotateInDeg + 90);
        },
        standardizeRotation: function(rotateInDeg){
            return (360 - rotateInDeg);
        }
        
    }

    return Object.assign({}, clock);
}

var clock = circularClockView(timeBinder);
//clock.update();
//console.log(clock);
window.setInterval(clock.update.bind(clock), 1000);