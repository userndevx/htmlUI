 // JavaScript to handle drawer open and close
        const openDrawerBtn = document.getElementById('openDrawerBtn');
        const closeDrawerBtn = document.getElementById('closeDrawerBtn');
        const drawer = document.getElementById('drawer');

        openDrawerBtn.addEventListener('click', () => {
            drawer.classList.remove('-translate-x-full');
            drawer.classList.add('translate-x-0');
        });

        closeDrawerBtn.addEventListener('click', () => {
            drawer.classList.remove('translate-x-0');
            drawer.classList.add('-translate-x-full');
        });