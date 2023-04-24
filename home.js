let lastKnownScrollPosition = 0;
const header = document.getElementsByClassName('header')[0];
const toggleNav = document.getElementsByClassName('toggle-nav')[0];
const toggleNavIcon = document.querySelector('.toggle-nav i');
const navMain = document.getElementsByClassName('nav main')[0];

function makeHeaderActive(scrollPos) {
    if (scrollPos > header.offsetHeight) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

document.addEventListener('scroll', (event) => {
    lastKnownScrollPosition = window.scrollY;

    window.requestAnimationFrame(() => {
        makeHeaderActive(lastKnownScrollPosition);
    });
});

toggleNav.addEventListener('click', (event) => {
    navMain.classList.toggle('show');

    if (navMain.classList.contains('show')) {
        toggleNavIcon.classList.add('fa-close');
        return;
    }

    toggleNavIcon.classList.remove('fa-close');
});
