let lastKnownScrollPosition = 0;

const header = document.getElementsByClassName('header')[0];
const toggleNav = document.getElementsByClassName('toggle-nav')[0];
const toggleNavIcon = document.querySelector('.toggle-nav i');
const navMain = document.getElementsByClassName('nav main')[0];
const hero = document.querySelector('.hero .inner');
const heroBackground = document.querySelector('.hero .background');
const heroTitle = document.querySelector('.hero .title');
const heroButton = document.querySelector('.hero .button');

function makeHeaderActive(scrollPos) {
    if (scrollPos > header.offsetHeight) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

function addParallaxEffect(scrollY) {
    hero.style.top = 0.5 * scrollY + 'px';
    heroBackground.style.transform = 'scale('+ (0.001 * scrollY + 1) +')';
    heroTitle.style.top = -1 * scrollY + 'px';
    heroButton.style.top = -.9 * scrollY + 'px';
}

document.addEventListener('scroll', (event) => {
    lastKnownScrollPosition = window.scrollY;

    window.requestAnimationFrame(() => {
        makeHeaderActive(lastKnownScrollPosition);
    });

    addParallaxEffect(lastKnownScrollPosition);
});

toggleNav.addEventListener('click', (event) => {
    navMain.classList.toggle('show');

    if (navMain.classList.contains('show')) {
        toggleNavIcon.classList.add('fa-close');
        return;
    }

    toggleNavIcon.classList.remove('fa-close');
});
