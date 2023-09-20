class DatePicker {
  constructor(id, callback) {
    this.id = id;
    this.callback = callback;
    this.selectedDate = null;
    this.monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  }

  render(date) {
    const container = document.getElementById(this.id);
    container.innerHTML = "";

    const currentDate = new Date(date);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();

    // Create header row with day abbreviations
    const headerRow = document.createElement("div");
    headerRow.classList.add("header-row");
    for (let i = 0; i < 7; i++) {
      const dayAbbreviation = document.createElement("div");
      dayAbbreviation.classList.add("day-abbreviation");
      dayAbbreviation.textContent = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"][i];
      headerRow.appendChild(dayAbbreviation);
    }

    container.appendChild(headerRow);

    // Create calendar grid
    let currentDay = 1;
    for (let week = 0; currentDay <= daysInMonth; week++) {
      const weekRow = document.createElement("div");
      weekRow.classList.add("week-row");

      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        const dayCell = document.createElement("div");
        dayCell.classList.add("day-cell");

        if ((week === 0 && dayOfWeek < firstDayOfWeek) || currentDay > daysInMonth) {
          dayCell.classList.add("other-month");
        } else {
          dayCell.textContent = currentDay;

          dayCell.addEventListener("click", () => {
            if (!dayCell.classList.contains("other-month")) {
              this.selectedDate = {
                year: currentYear,
                month: currentMonth + 1,
                day: parseInt(dayCell.textContent)
              };
              this.callback(this.id, this.selectedDate);
            }
          });

          if (
            currentYear === date.getFullYear() &&
            currentMonth === date.getMonth() &&
            currentDay === date.getDate()
          ) {
            dayCell.classList.add("selected");
          }
          currentDay++;
        }

        weekRow.appendChild(dayCell);
      }
      container.appendChild(weekRow);
    }

    // Create month and year header with navigation controls
    const header = document.createElement("div");
    header.classList.add("calendar-header");

    const prevMonthButton = document.createElement("span");
    prevMonthButton.classList.add("nav-button");
    prevMonthButton.textContent = "<";
    prevMonthButton.addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      this.render(currentDate);
    });

    const monthYearLabel = document.createElement("span");
    monthYearLabel.textContent =
      this.monthNames[currentMonth] + " " + currentYear;

    const nextMonthButton = document.createElement("span");
    nextMonthButton.classList.add("nav-button");
    nextMonthButton.textContent = ">";
    nextMonthButton.addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      this.render(currentDate);
    });

    header.appendChild(prevMonthButton);
    header.appendChild(monthYearLabel);
    header.appendChild(nextMonthButton);
    container.appendChild(header);
  }
}

// Example usage:
const datePicker1 = new DatePicker("div1", function (id, fixedDate) {
  console.log("DatePicker with id", id, "selected date:", fixedDate.month + "/" + fixedDate.day + "/" + fixedDate.year);
});
datePicker1.render(new Date());

const datePicker2 = new DatePicker("div2", function (id, fixedDate) {
  console.log("DatePicker with id", id, "selected date:", fixedDate.month + "/" + fixedDate.day + "/" + fixedDate.year);
});
datePicker2.render(new Date("January 1, 2009"));

