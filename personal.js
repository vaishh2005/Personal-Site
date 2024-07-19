function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

function showContent(contentId) {
    // Hide all content items
    document.querySelectorAll('.content-item').forEach(item => {
        item.style.display = 'none';
    });

    // Show the selected content item
    document.getElementById(contentId).style.display = 'block';
}

function changeAboutMeText() {
    const aboutMeTexts = ["Writer...", "Poet...", "Dreamer..."];
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 1500;
    const aboutMeElement = document.querySelector('.about-me');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = aboutMeTexts[textIndex];
        if (!isDeleting && charIndex < currentText.length) {
            aboutMeElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % aboutMeTexts.length;
            }
            setTimeout(type, pauseTime);
        }
    }
    type();
}

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const currentMode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
        darkModeToggle.querySelector('i').classList.toggle('fa-sun');
        darkModeToggle.querySelector('i').classList.toggle('fa-moon');
    });
});

// Initially show the Songs section
showSection('songs');
changeAboutMeText();
