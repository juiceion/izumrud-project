import './style.less';

const desktopTime = document.getElementById('desktop-time');
const desktopSchedule = document.getElementById('schedule-desktop-container');

desktopTime.addEventListener('mouseover', () => {
    desktopSchedule.classList.add('visible')
    console.log('mouseover', desktopSchedule.classList)
})

desktopTime.addEventListener('mouseout', () => {
    desktopSchedule.classList.remove('visible')
    console.log('mouseout', desktopSchedule.classList)
})

const mobileButton = document.getElementById('schedule-mobile-button');
const mobileOverlay = document.getElementById('schedule-mobile-container-overlay');
const mobuleSchedule = document.getElementById('schedule-mobile-container');
const mobuleCloseButton = document.getElementById('schedule-mobile-close');

mobileButton.addEventListener('click', () => {
    if (!mobuleSchedule.classList.contains('visible')) {
        mobuleCloseButton.classList.add('visible');
    } else {
        mobuleCloseButton.classList.remove('visible');
    }
    mobuleSchedule.classList.toggle('visible');
})

mobileOverlay.addEventListener('click', () => {
    mobuleSchedule.classList.remove('visible')
    mobuleCloseButton.classList.remove('visible');
})

mobuleCloseButton.addEventListener('click', () => {
    mobuleSchedule.classList.remove('visible')
    mobuleCloseButton.classList.remove('visible');
})