// Inject the updater
function circularClockViewTimeBinder(timeUpdater){
    // 0deg = 12 o'clock
    // 90deg = 3 o'clock
    // 180deg = 6 o'clock
    // 270deg = 9 o'clock
    // seconds cycle = [0,59]
    // minutes cycle = [0,59]
    // hour cycle = [0.11]

    let binder = {
        bindSeconds: function(){
            // 0 -> 0deg
            // 14 -> 90deg
            // 29 -> 180deg
            // 44 -> 270deg
            let mapping = (90/15)*timeUpdater.getCurrentSeconds();
            return mapping;
        },
        bindMinutes: function(){
            // 0 -> 0deg
            // 14 -> 90deg
            // 29 -> 180deg
            // 44 -> 270deg
            let mapping = (90/15)*timeUpdater.getCurrentMinutes();
            return mapping;
        },
        bindHours: function(){
            // 0 -> 0deg
            // 3 -> 90deg
            // 6 -> 180deg
            // 9 -> 270deg
            // 12 -> 0deg
            let mapping = (90/3)*timeUpdater.getCurrentHour();
            return mapping;
        }
    }

    return Object.assign({}, binder);
}

const timeBinder = circularClockViewTimeBinder(localTimeUpdater);