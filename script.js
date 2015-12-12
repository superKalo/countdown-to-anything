// targetDateFromConfig - coming from the config.php file
var targetDate = new Date(targetDateFromConfig).getTime();

var days, hours, minutes, seconds;
var countdown = document.getElementById("countdown");

// Helper function to wrap up the final string
function formatCountdownString(unit, single, plural){
    if (unit === 1) {
        return unit + ' ' + single + ' ';
    } else if (unit > 1) {
        return unit + ' ' + plural + ' ';
    } else {
        return '';
    }
}

// Update the countdown element every 1 second
setInterval(function(){
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (targetDate - current_date) / 1000;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    // format countdown string + set tag value
    var message = formatCountdownString(days, 'ден', 'дни');
    message += formatCountdownString(hours, 'час', 'часа');
    message += formatCountdownString(minutes, 'минута', 'минути');
    message += formatCountdownString(seconds, 'секунда', 'секунди');

    if (message === '') {
        countdown.innerHTML = 'Свърши! Крайният срок премина :)';
    } else {
        countdown.innerHTML = message;
    }

}, 1000);
