let userHour;
let userSecond;

function getSecond (a) {
    do {
        userHour = +prompt('Enter amount of hours', '2');
    } while (isNaN(userHour) || !userHour);
    userSecond = userHour * 3600;
    alert(`Get amount of seconds: ${userSecond}`);
}

getSecond(userHour);