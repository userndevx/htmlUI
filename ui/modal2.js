 const openModal = document.getElementById('openModal');
        const closeModal = document.getElementById('closeModal');
        const cancelButton = document.getElementById('cancelButton');
        const confirmButton = document.getElementById('confirmButton');
        const modalBackdrop = document.getElementById('modalBackdrop');
        const modalContent = document.getElementById('modalContent');

        function showModal() {
            modalBackdrop.classList.remove('hidden');
            modalBackdrop.classList.add('flex');
            setTimeout(() => {
                modalContent.classList.remove('scale-90', 'opacity-0');
                modalContent.classList.add('scale-100', 'opacity-100');
            }, 10);
        }

        function hideModal() {
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-90', 'opacity-0');
            setTimeout(() => {
                modalBackdrop.classList.remove('flex');
                modalBackdrop.classList.add('hidden');
            }, 300);
        }

        openModal.addEventListener('click', showModal);
        closeModal.addEventListener('click', hideModal);
        cancelButton.addEventListener('click', hideModal);
        confirmButton.addEventListener('click', hideModal);
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                hideModal();
            }
        });