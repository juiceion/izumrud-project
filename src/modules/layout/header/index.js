import './style.less';
import '../schedule';
import '../search';
import '../menu';

const desktopTime = document.getElementById('desktop-time');
const desktopSchedule = document.getElementById('schedule-desktop-container');

desktopTime.addEventListener('click', () => {
    if (!desktopSchedule.classList.contains('visible')) {
        menu.classList.remove('visible');
        search.classList.remove('visible');
        searchButton.classList.add('visible');
        closeSearchButton.classList.remove('visible');
        menuButton.classList.remove('visible');
        closeMenuButton.classList.remove('visible');
    }
    desktopSchedule.classList.toggle('visible')
})

const mobileButton = document.getElementById('schedule-mobile-button');
const mobileOverlay = document.getElementById('schedule-mobile-container-overlay');
const mobileSchedule = document.getElementById('schedule-mobile-container');

mobileButton.addEventListener('click', () => {
    if (!mobileSchedule.classList.contains('visible')) {
        menu.classList.remove('visible');
        search.classList.remove('visible');
        searchButton.classList.add('visible');
        closeSearchButton.classList.remove('visible');
        menuButton.classList.add('visible');
        closeMenuButton.classList.remove('visible');
    }
    mobileSchedule.classList.toggle('visible');
})

mobileOverlay.addEventListener('click', () => {
    mobileSchedule.classList.remove('visible')
})

const searchButton = document.getElementById('search-button');
const search = document.getElementById('global-search');
const closeSearchButton = document.getElementById('close-search-button');
const desktopCloseSearchButton = document.getElementById('desktop-close-search-button');
searchButton.addEventListener('click', () => {
    if (window.innerWidth > 1280) {
        if (!search.classList.contains('visible')) {
            menu.classList.remove('visible');
            desktopSchedule.classList.remove('visible');
            menuButton.classList.add('visible');
            closeMenuButton.classList.remove('visible');
        }
        search.classList.toggle('visible');
        searchButton.classList.remove('visible');
        return;
    }
    if (!search.classList.contains('visible')) {
        menu.classList.remove('visible');
        desktopSchedule.classList.remove('visible');
        menuButton.classList.add('visible');
        closeMenuButton.classList.remove('visible');
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

const menuButton = document.getElementById('menu-button');
const closeMenuButton = document.getElementById('close-menu-button');
const menu = document.getElementById('menu');
const menuMobileOverlay = document.getElementById('menu-mobile-overlay');

menuButton.addEventListener('click', () => {
    if (!menu.classList.contains('visible')) {
        search.classList.remove('visible');
        mobileSchedule.classList.remove('visible');
        desktopSchedule.classList.remove('visible');
        searchButton.classList.add('visible');
        closeSearchButton.classList.remove('visible');
    }
    menu.classList.toggle('visible');
    menuButton.classList.toggle('visible');
    closeMenuButton.classList.toggle('visible');
});

closeMenuButton.addEventListener('click', () => {
    menu.classList.remove('visible');
    menuButton.classList.add('visible');
    closeMenuButton.classList.remove('visible');
})

menuMobileOverlay.addEventListener('click', () => {
    menu.classList.remove('visible');
    menuButton.classList.add('visible');
    closeMenuButton.classList.remove('visible');
})