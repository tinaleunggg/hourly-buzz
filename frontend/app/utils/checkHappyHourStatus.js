// static render to prioritizr fast loading instead of accurate status

export default function checkHappyHourStatus(happyHours) {
    var available = false;
    var isHappyHour = false;
    var startSoon = false;
    var today = new Date();
    var dayName = today.toLocaleDateString("en-US", { weekday: "long" }); // e.g. "Monday"

    if (!happyHours){
        return ({available, isHappyHour, dayName})
    }
    available = true;


    var hour = today.getHours();
    var minute = today.getMinutes();
    if(hour<10){hour='0'+hour;}
    if(minute<10){minute='0'+minute;}
    var currentTime = hour+':'+minute;

    for (let day in happyHours[0]){
        if (dayName == day){
            let startTime = happyHours[0][day][0].startTime;
            let endTime = happyHours[0][day][0].endTime;
            if (startTime < currentTime < endTime){
                isHappyHour = true;
            }
        }       
    }

    // check if happy hour is starting soon

    return (
        {available, isHappyHour, dayName}
    )
}
