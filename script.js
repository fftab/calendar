$(document).ready(function() {

    // Gloabal Variables
    // ===============================

    // initializing workHours array containing the hours of the work day
    let workHours = [09, 10, 11, 12, 13, 14, 15, 16, 17];

    // initializing the current tasks stored in the input fields
    let currentToDos = [];

    // initializing the timeColumn variable (will append time to this column)
    let timeColumn = $("#time-column"); // ERROR - $ not defined?

    // initializing the input-column variable (will append input boxes to this column)
    let toDoInputColumn = $("#to-do-input-cloumn");

    // initializing the submitButtonColumn variable (will append submit buttons to this column)
    let saveButtonColumn = $("#save-button-column");

    // initializing the display date paragraph (will display info from moment.js as paragraph text)
    let displayDate = $("#currentDay");

    // using the moment.js API to retrieve the month day and year in real time
    // let currentDate = 'https://moment.js.com/moment().format("ll")'; // Month Day Year

    // let currentTime = 'https://momentjs.com/moment().format("HH")'; // 24Hr Time Used to check time block

    // Displaying Month Day and Year from Moment
    // displayDate.text(JSON.stringify(currentDate));

    // current hour moment()

    // Functions
    // =================================

    // Function to Initialize the Calendar
    function initCalendar() {

        //Grab local storage
        //arr  = localstorage("",JSON.parse()); // grabs the string and turns it into object
        // 
        // Grab toDoList From The Local Storage
        // toDoList = JSON.parse(localStorage.getItem("tasks"));

        //Changed the date
        //JQ to grab the ID for the date

        // display page
        //for loop to for arry
        for (i = 0; i < workHours.length; i++) {

            // Dynamically Create HTML Elements
            // =================================
            // Create Rows for Time Labels
            let newTimeRow = $("<div>");
            // Assign Class of Row to New Time Row
            newTimeRow.attr("class", "row");
            // Create New Time Label
            let newTimeLabel = $("<label>");
            // Assign a Class for Styling
            newTimeLabel.attr("class", "hour time-labels");
            // Assign a For Attribute with Respect to Input
            newTimeLabel.attr("for", "to-do-input");
            // Assign New Time Label Text
            newTimeLabel.text(workHours[i]);
            // Append New Time Label to New Time Row
            newTimeRow.append(newTimeLabel);
            // Append New Time Row to Time Column
            timeColumn.append(newTimeRow);

            // Creating Input Elements

            // Create New Input Element
            let newInput = $("<textarea>");
            // Assign an ID to newInput elements
            newInput.attr("class", "row to-do-input");
            // Append New Input Element to Input Column
            toDoInputColumn.append(newInput);

            // Create Save Buttons

            // Create New Save Button
            let newSaveButton = $("<button>");
            // Assign a Class for Styling
            newSaveButton.attr("class", "row saveBtn");
            // Assign an ID
            newSaveButton.attr("id", "save-button");
            // Appending New Save Button to Save Button Column
            saveButtonColumn.append(newSaveButton);

        }

    }

    // function setWorkHoursClass() {

    // if ( < currentTime) {

    //     newTimeLabel.attr("class", "past");

    // }
    // else if ( == currentTime) {

    // newTimeLabel.attr("class", "future");

    // }

    // }
    

    // Populate
    initCalendar();

    // // Create Click Event Listener for Save Button
    // $("#save-button").onclick(function () {

    //     //grab info herre

    //     //ipnut

    //     //Update Local Storage
    //     //Update Local Storage with toDoList
    //     // localStorage.setItem("toDo", JSON.stringify(toDoList));
    //     //    localStorage = go to local storage
    //     //     setItem = putting something/updating inside local storage
    //     //     "toDo" - Variable For Local Storage item
    //     //      JSON.stringify(toDoList) = turning your list into a string for the local storage

    // });

});
