function TemplateProcessor() {
    this.template = '';
    this.fillIn = function(dictionary) {
        let returnString = this.template;

        while (returnString.indexOf("{{") !== -1) {
            let location = returnString.indexOf("{{");
            let endLocation = returnString.indexOf("}}");
            let key = returnString.substring(location + 2, endLocation);

            if (typeof dictionary[key] !== "undefined") {
                let first = returnString.substring(0, location);
                let second = dictionary[key];
                let third = returnString.substring(endLocation + 2);
                returnString = first + second + third;
            } else {
                returnString = returnString.substring(0, location) + returnString.substring(endLocation + 2);
            }
        }

        return returnString;
    }
}

let template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
let dateTemplate = new TemplateProcessor();
dateTemplate.template = template;

let dictionary = { month: 'July', day: '1', year: '2016' };
let str = dateTemplate.fillIn(dictionary);
console.log(str);
console.log(str === 'My favorite month is July but not the day 1 or the year 2016');

// Case: property doesn't exist in dictionary
let dictionary2 = { day: '1', year: '2016' };
let str2 = dateTemplate.fillIn(dictionary2);

console.log(str2);
console.log(str2 === 'My favorite month is  but not the day 1 or the year 2016');