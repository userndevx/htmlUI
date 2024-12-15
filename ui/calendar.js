let currentDate = new Date();
    
    // Function to update the calendar
    function updateCalendar() {
      // Get the month and year for the current date
      const month = currentDate.getMonth(); // 0 - 11 (January is 0)
      const year = currentDate.getFullYear();
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      // Set the month and year display
      document.getElementById("monthYear").innerText = `${monthNames[month]} ${year}`;

      // Get the first day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
      const firstDay = new Date(year, month, 1).getDay();
      
      // Get the total number of days in the month
      const totalDays = new Date(year, month + 1, 0).getDate();
      
      // Clear previous days
      const calendarDays = document.getElementById("calendarDays");
      calendarDays.innerHTML = '';

      // Add empty divs for the days before the first day of the month
      for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        calendarDays.appendChild(emptyCell);
      }

      // Add day numbers to the calendar
      for (let day = 1; day <= totalDays; day++) {
        const dayCell = document.createElement("div");
        dayCell.classList.add("text-center", "text-gray-600", "p-2", "cursor-pointer", "hover:bg-gray-200", "rounded");
        dayCell.innerText = day;
        calendarDays.appendChild(dayCell);
      }
    }

    // Event listeners for navigating between months
    document.getElementById("prevMonth").addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      updateCalendar();
    });

    document.getElementById("nextMonth").addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      updateCalendar();
    });

    // Initial calendar load
    updateCalendar();