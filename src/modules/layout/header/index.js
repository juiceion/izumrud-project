import './style.less';

const desktopTime = document.getElementById('desktop-time');
const desktopSchedule = document.getElementById('schedule-desktop-container');

desktopTime.addEventListener('click', () => {
    desktopSchedule.classList.toggle('visible')
})

const mobileButton = document.getElementById('schedule-mobile-button');
const mobileOverlay = document.getElementById('schedule-mobile-container-overlay');
const mobuleSchedule = document.getElementById('schedule-mobile-container');

mobileButton.addEventListener('click', () => {
    mobuleSchedule.classList.toggle('visible');
})

mobileOverlay.addEventListener('click', () => {
    mobuleSchedule.classList.remove('visible')
})