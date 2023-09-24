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

        // Still need to add logic to generate days of the month here-----------------------


        const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        //----------------------------------------------------------------------------------

        // Add days of month to container
        container.appendChild(daysContainer);

        // Need to add highlight day of the month selected
        const day = fixedDate;

    };
}

