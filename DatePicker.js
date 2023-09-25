/*
This file implements a JavaScript class named DatePicker that can be used as in the following example:

    var datePicker = new DatePicker("div1", function (id, fixedDate) {
        console.log("DatePicker with id", id,
            "selected date:", fixedDate.month + "/" + fixedDate.day + "/" + fixedDate.year);
    });
datePicker.render(new Date("July 4, 1776"));
 */

function DatePicker(id, fixedDate) {
    this.id = id; // Store the provided id
    this.fixedDate = fixedDate; // Store the provided fixedDate
    // Render method to display the calendar
    this.render = function (fixedDate) {
        // Utility function to create elements with class
        // Including text is optional
        function createElement(tag, className, text) {
            const element = document.createElement(tag);
            element.classList.add(className);
            // Text present, include
            if (text) {
                element.innerText = text;
            }
            return element;
        }

        // Create container element to hold the rest of the calendar elements
        const container = document.getElementById(this.id);
        // The add() method of the DOMTokenList interface adds the given tokens to
        // the list, omitting any that are already present.
        container.classList.add('calendar');

        // Create elements from datepicker.css file
        const header = createElement('div', 'header');
        const prevButton = createElement('button', 'prev-button', '<<');
        const nextButton = createElement('button', 'next-button', '>>');
        const monthLabel = createElement('div', 'month-year');

        // The appendChild() method of the Node interface adds a node to the
        // end of the list of children of a specified parent node.
        // Parent node: container
        // Child & Parent node: header
        // Child nodes: prevButton, MonthLabel, nextButton
        header.appendChild(prevButton);
        header.appendChild(monthLabel);
        header.appendChild(nextButton);
        container.appendChild(header);

        // String array holding days of the week
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        // Element for dayNames
        const dayNames = createElement('div', 'day-names');

        // The forEach() method executes a provided function once for each array element.
        // Pull day names from daysOfWeek string array
        daysOfWeek.forEach(function (dayName) {
            const day = createElement('div', 'day', dayName);
            dayNames.appendChild(day);
        });

        // Add to day names to 'calendar' container
        container.appendChild(dayNames);

        // Create element for days of month
        const daysContainer = createElement('div', 'days');

        // Sting Array holding all 12 month of the year
        const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];

        // Function to generate days of the month
        function generateDays(year, month, selectedDay) {
            daysContainer.innerHTML = ''; // Clear previous content

            // The getDate() method of Date instances returns the day of the month for this
            // date according to local time.
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            // Create days to populate calendar
            for (let i = 1; i <= daysInMonth; i++) {
                const dayElement = createElement('div', 'day', i);

                // This should initialize the selected date from the
                // function call

                // NOT WORKING!!!!**********************************************
                // ***********************
                if (selectedDay === i) {
                    dayElement.classList.add('selected');
                }

                // If user clicks on a day to highlight that day and remove the last highlighted day
                dayElement.addEventListener('click', function () {
                    // Remove previously selected day
                    const selectedDay = document.querySelector('.day.selected');
                    if (selectedDay) {
                        selectedDay.classList.remove('selected');
                    }

                    // Add selected day
                    this.classList.add('selected');

                    // Log for console (maybe needed for testing?)
                    console.log(`Selected date: ${monthsOfYear[month]} ${i}, ${year}`);
                });
                // Add element to parent
                daysContainer.appendChild(dayElement);
            }
        }

        // Add days of month to container
        container.appendChild(daysContainer);

        // Set initial month label and render days
        monthLabel.innerText = monthsOfYear[fixedDate.getMonth()] + ' ' + fixedDate.getFullYear();
        generateDays(fixedDate.getFullYear(), fixedDate.getMonth(), fixedDate.getDate());

        // Add event listeners for rotation buttons
        // Left arrow function
        prevButton.addEventListener('click', function () {
            fixedDate.setMonth(fixedDate.getMonth() - 1);
            generateDays(fixedDate.getFullYear(), fixedDate.getMonth());
            monthLabel.innerText = monthsOfYear[fixedDate.getMonth()] + ' ' + fixedDate.getFullYear();
        });

        // Right arrow function
        nextButton.addEventListener('click', function () {
            fixedDate.setMonth(fixedDate.getMonth() + 1);
            generateDays(fixedDate.getFullYear(), fixedDate.getMonth());
            monthLabel.innerText = monthsOfYear[fixedDate.getMonth()] + ' ' + fixedDate.getFullYear();
        });

        // Initial render of year and month when website starts
        generateDays(fixedDate.getFullYear(), fixedDate.getMonth(), fixedDate);

    };
}

