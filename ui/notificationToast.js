const notificationToast = document.getElementById('notificationToast');
    const showNotificationBtn = document.getElementById('showNotificationBtn');

    showNotificationBtn.addEventListener('click', () => {
        // Show the notification
        notificationToast.classList.remove('hidden', 'opacity-0');
        notificationToast.classList.add('opacity-100');

        // Automatically hide the notification after 3 seconds
        setTimeout(() => {
            notificationToast.classList.add('opacity-0');
            setTimeout(() => {
                notificationToast.classList.add('hidden');
            }, 500); // Wait for fade-out animation
        }, 3000);
    });