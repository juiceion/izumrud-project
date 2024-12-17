import './style.less';
import '../schedule';
import '../search';

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

const searchButton = document.getElementById('search-button');
const search = document.getElementById('global-search');
const closeSearchButton = document.getElementById('close-search-button');
const desktopCloseSearchButton = document.getElementById('desktop-close-search-button');
searchButton.addEventListener('click', () => {
    if (window.innerWidth > 1280) {
        search.classList.toggle('visible');
        searchButton.classList.remove('visible');
        return;
    }
    search.classList.add('visible');
    searchButton.classList.remove('visible');
    closeSearchButton.classList.add('visible');
})

closeSearchButton.addEventListener('click', () => {
    search.classList.remove('visible');
    searchButton.classList.add('visible');
    closeSearchButton.classList.remove('visible');
})

desktopCloseSearchButton.addEventListener('click', () => {
    search.classList.remove('visible');
    searchButton.classList.add('visible');
})