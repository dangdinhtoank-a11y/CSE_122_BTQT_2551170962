const IMAGE_PATH = 'Anh/Bai13/';

function formatNumberToDigits(num) {
    const str = num < 10 ? '0' + num : '' + num;
    return [str.charAt(0), str.charAt(1)];
}

function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const [h1, h2] = formatNumberToDigits(hours);
    const [m1, m2] = formatNumberToDigits(minutes);
    const [s1, s2] = formatNumberToDigits(seconds);

    document.getElementById('h1').src = `${IMAGE_PATH}0${h1}.gif`;
    document.getElementById('h2').src = `${IMAGE_PATH}0${h2}.gif`;

    document.getElementById('m1').src = `${IMAGE_PATH}0${m1}.gif`;
    document.getElementById('m2').src = `${IMAGE_PATH}0${m2}.gif`;

    document.getElementById('s1').src = `${IMAGE_PATH}0${s1}.gif`;
    document.getElementById('s2').src = `${IMAGE_PATH}0${s2}.gif`;

    const greetingBox = document.getElementById('greeting');
    if (hours >= 5 && hours < 12) {
        greetingBox.innerText = 'Chào buổi sáng!';
    } else if (hours >= 12 && hours < 18) {
        greetingBox.innerText = 'Chào buổi chiều!';
    } else {
        greetingBox.innerText = 'Chào buổi tối!';
    }
}

updateClock();

setInterval(updateClock, 1000);