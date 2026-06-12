const doorContainer = document.getElementById('door-container');
const centerUI = document.querySelector('.door-center-ui');
const leftDoor = document.querySelector('.left-door');
const rightDoor = document.querySelector('.right-door');
const mainContent = document.getElementById('main-website');

doorContainer.addEventListener('click', () => {
  // 1. Center symbol aur text ko smoothly fade-out (gayab) karo
  centerUI.style.opacity = '0';
  centerUI.style.pointerEvents = 'none'; // Click disable karne ke liye
  
  // 2. Doors par open wali CSS classes add karo (Isse style.css ka animation trigger hoga)
  leftDoor.classList.add('open-left');
  rightDoor.classList.add('open-right');
  
  // 3. Main website ko smoothly show karo
  mainContent.classList.remove('hidden');
  
  // 4. Jab 1.5 seconds me animation poori ho jaye, toh door screen ko display none kar do
  setTimeout(() => {
    doorContainer.style.display = 'none';
  }, 1500); 
});

