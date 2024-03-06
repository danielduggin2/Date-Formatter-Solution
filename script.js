const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

// in JS, built-in constructors create objexts
const date = new Date();
const day = date.getDate(); //getDate returns a number 1-31 that represents day
const month = date.getMonth() + 1; // returns number 0-11. Bc it is zero based, we need to add 1 to ger the expected month number
const year = date.getFullYear(); //returns a number which represents the year for the provided date
const hours = date.getHours(); //returns 0-23 
const minutes = date.getMinutes(); //returns 0-59
const formattedDate = `${day}-${month}-${year}`;
// console.log(formattedDate); prints date to console
currentDateParagraph.textContent = formattedDate;

// user makes selection from dropdown, function get the uesr's value and display date in their chosen format
dateOptionsSelectElement.addEventListener("change", () =>{
    switch(dateOptionsSelectElement.value){
       case  "yyyy-mm-dd":
        currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
        // console.log(currentDateParagraph.textContent);
        break;

        case "mm-dd-yyyy-h-mm":
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
            break;
        default:
            currentDateParagraph.textContent = formattedDate;
    }
});