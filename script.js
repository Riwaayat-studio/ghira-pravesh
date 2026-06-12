document.addEventListener('DOMContentLoaded', () => {
    const doorContainer = document.getElementById('door-container');
    const centerUI = document.querySelector('.door-center-ui');
    const leftDoor = document.querySelector('.left-door');
    const rightDoor = document.querySelector('.right-door');
    const mainContent = document.getElementById('main-website');

    if (doorContainer && centerUI && leftDoor && rightDoor && mainContent) {
        doorContainer.addEventListener('click', () => {
            // Fade out the center UI elements seamlessly
            centerUI.style.opacity = '0';
            
            // Trigger 3D door opening animation via CSS classes
            leftDoor.classList.add('open-left');
            rightDoor.classList.add('open-right');
            
            // Reveal main invitation content
            mainContent.classList.remove('hidden');
            
            // Terminate preloader element from DOM tree after transition completes
            setTimeout(() => {
                doorContainer.style.display = 'none';
            }, 1600);
        });
    }
});

