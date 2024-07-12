const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
const bodyBg = document.querySelector('body');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});

function redirectToSection(sectionId) {
    // Redirect to the content page with a hash for the section
    window.location.href = `content/index.html#${sectionId}`;
}

// Typing animation

document.addEventListener("DOMContentLoaded", function() {
    const phrases = [
        "Hi, I'm TANISHA ALI",
        "I'm a Front-end Developer",
        "I'm a UI/UX Designer",
        "I'm a Poster Designer",
        "I'm a Programming Enthusiast"
    ];
    let currentPhraseIndex = 0;
    let currentLetterIndex = 0;
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenPhrases = 2000;

    const typingElement = document.getElementById("typing");

    function type() {
        if (currentLetterIndex < phrases[currentPhraseIndex].length) {
            typingElement.innerHTML += phrases[currentPhraseIndex].charAt(currentLetterIndex);
            currentLetterIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenPhrases);
        }
    }

    function erase() {
        if (currentLetterIndex > 0) {
            typingElement.innerHTML = phrases[currentPhraseIndex].substring(0, currentLetterIndex - 1);
            currentLetterIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});