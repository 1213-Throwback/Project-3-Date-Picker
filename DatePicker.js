/*
This file implements a JavaScript class named DatePicker that can be used as in the following example:

    var datePicker = new DatePicker("div1", function (id, fixedDate) {
        console.log("DatePicker with id", id,
            "selected date:", fixedDate.month + "/" + fixedDate.day + "/" + fixedDate.year);
    });
datePicker.render(new Date("July 4, 1776"));
 */

class DatePicker {
    // Constructor for initializing the DatePicker
    // Parameters "div1" and function(id,fixedDate) from example in problem #1 on readMe
    // Documentation for reference of constructor method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
    constructor(id, callback) {
        this.id = id; // Store the provided id
        this.callback = callback; // Store the provided callback function
        this.currentDate = null; // Initialize currentDate to null
    }

    // Render method to display the calendar in the specified container
    render(selectedDate) {

    }

}