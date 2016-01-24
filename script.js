// targetDateFromConfig - coming from the config.php file
var targetDate = new Date(targetDateFromConfig).getTime();

var days, hours, minutes, seconds;
var countdown = document.getElementById('countdown');

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

// Translations
var availableLanguages = {
    bg: {
        day: {
            single: 'ден',
            plural: 'дни'
        },
        hour: {
            single: 'час',
            plural: 'часа'
        },
        minute: {
            single: 'минута',
            plural: 'минути'
        },
        second: {
            single: 'секунда',
            plural: 'секунди'
        },
        deadline: '0! Крайният срок премина :)'
    },
    en: {
        day: {
            single: 'day',
            plural: 'days'
        },
        hour: {
            single: 'hour',
            plural: 'hours'
        },
        minute: {
            single: 'minute',
            plural: 'minutes'
        },
        second: {
            single: 'second',
            plural: 'seconds'
        },
        deadline: '0! The deadline has passed :)'
    },
};
if (typeof defaultLang === 'undefined'){
    var defaultLang = 'en';
}
var lang = availableLanguages[defaultLang];

// Update the countdown element every 1 second
setInterval(function(){
    // find the amount of 'seconds' between now and target
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
    var message = formatCountdownString(days, lang.day.single, lang.day.plural);
    message += formatCountdownString(hours, lang.hour.single, lang.hour.plural);
    message += formatCountdownString(minutes, lang.minute.single, lang.minute.plural);
    message += formatCountdownString(seconds, lang.second.single, lang.second.plural);

    if (message === '') {
        countdown.innerHTML = lang.deadline;
    } else {
        countdown.innerHTML = message;
    }

}, 1000);
