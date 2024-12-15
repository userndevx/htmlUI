const notificationBar = document.getElementById('notificationBar');
    const closeBtn = document.getElementById('closeBtn');
    const showNotificationBtn = document.getElementById('showNotificationBtn');

    // Show the notification
    showNotificationBtn.addEventListener('click', () => {
        notificationBar.classList.remove('-translate-y-full');
        notificationBar.classList.add('translate-y-0');
    });

    // Close the notification
    closeBtn.addEventListener('click', () => {
        notificationBar.classList.remove('translate-y-0');
        notificationBar.classList.add('-translate-y-full');
    });