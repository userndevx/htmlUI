 const sidebar = document.getElementById("sidebar");
    const toggleSidebar = document.getElementById("toggleSidebar");

    toggleSidebar.addEventListener("click", () => {
        sidebar.classList.toggle("-translate-x-full");
    });