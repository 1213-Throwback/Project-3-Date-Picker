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
    this.render = function (initialDate) {

    };
}

