const testUpdater = {
    getCurrentSeconds: function(){
        return 43;
    },
    getCurrentMinutes: function(){
        return 35;
    },
    getCurrentHour: function(){
        return 9;
    }
}

const localTimeUpdater = {
    getCurrentSeconds: function(){
        return new Date().getSeconds();
    },
    getCurrentMinutes: function(){
        return new Date().getMinutes();
    },
    getCurrentHour: function(){
        return new Date().getHours();
    }
}

const newYorkTimeUpdater = {
    //new Date().toLocaleString("en-US", {timeZone: "America/New_York"})
    time: new Date().toLocaleString("en-US", {timeZone: "America/New_York"}),
    getCurrentSeconds: function(){
        return new Date().toLocaleString("en-US", {timeZone: "America/New_York"}).getSeconds();
    },
    getCurrentMinutes: function(){
        return new Date().toLocaleString("en-US", {timeZone: "America/New_York"}).getMinutes();
    },
    getCurrentHour: function(){
        return new Date().toLocaleString("en-US", {timeZone: "America/New_York"}).getHours();
    }
}