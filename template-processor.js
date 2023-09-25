"use strict";

function TemplateProcessor() {
    this.template = '';

    this.fillIn = function(dictionary) {

        let returnString = this.template;

        // Continue still end of string and find indexes
        while (returnString.indexOf("{{") !== -1) {
            const location = returnString.indexOf("{{");
            const endLocation = returnString.indexOf("}}");
            const key = returnString.substring(location + 2, endLocation);

            // If else to concatenate string
            if (typeof dictionary[key] !== "undefined") {
                const first = returnString.substring(0, location);
                const second = dictionary[key];
                const third = returnString.substring(endLocation + 2);
                returnString = first + second + third;
            } else {
                returnString = returnString.substring(0, location)
                    + returnString.substring(endLocation + 2);
            }
        }

        return returnString;
    };
}

const template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
const dateTemplate = new TemplateProcessor();
dateTemplate.template = template;

const dictionary = { month: 'July', day: '1', year: '2016' };
const str = dateTemplate.fillIn(dictionary);
console.log(str);
console.log(str === 'My favorite month is July but not the day 1 or the year 2016');

// Case: property doesn't exist in dictionary
const dictionary2 = { day: '1', year: '2016' };
const str2 = dateTemplate.fillIn(dictionary2);

console.log(str2);
console.log(str2 === 'My favorite month is  but not the day 1 or the year 2016');