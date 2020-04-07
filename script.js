$(document).ready(function() {

    // Gloabal Variables
    // ===============================

    // initializing workHours array containing the hours of the work day
    let workHours = [09, 10, 11, 12, 13, 14, 15, 16, 17];

    // initializing the current tasks stored in the input fields
    let toDos = [];

    // initializing the timeColumn variable (will append time to this column)
    let timeColumn = $("#time-column"); // ERROR - $ not defined?

    // Testing with Console
    console.log(timeColumn);

    // initializing the input-column variable (will append input boxes to this column)
    let toDoInputColumn = $("#input-column");

    // Testing with Console
    console.log(toDoInputColumn);

    // initializing the saveButtonColumn variable (will append submit buttons to this column)
    let saveButtonColumn = $("#save-button-column");

    console.log(saveButtonColumn)

    // initializing the display date paragraph (will display info from moment.js as paragraph text)
    let displayDate = $("#currentDay");

    // using the moment.js API to retrieve the month day and year in real time
    let currentDate = moment().format("ll"); // Month Day Year

    let currentHour = moment().format("HH"); // 24Hr Time Used to check time block

    // Displaying Month Day and Year from Moment
    displayDate.text(JSON.stringify(currentDate));

    // Functions
    // =================================

    // Function to Initialize the Calendar
    function initCalendar() {

        // Grab local storage
        // arr  = localstorage("",JSON.parse()); // grabs the string and turns it into object

        // Grab toDoList From The Local Storage
        // toDos = JSON.parse(localStorage.getItem("tasks"));

        //Changed the date
        //JQ to grab the ID for the date

        // display page

        // For Loop to Populate
        for (i = 0; i < workHours.length; i++) {

            // Dynamically Create HTML Elements
            // =================================

            // Create Time Label Elements

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

            // Create New Input Row
            let newInputRow = $("<div>");
            // Assigning Attribute
            newInputRow.attr("class", "row");
            // Create New Input Element
            let newInput = $("<textarea>");
            // Assign an ID to newInput elements
            newInput.attr("class", "to-do-input");
            // Append New Input Element to Input Column
            newInputRow.append(newInput);
            // append new input row to to do input column
            toDoInputColumn.append(newInputRow);

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

    function setWorkHoursClass() {

    if (worksHours[i] < currentHour) {

        newTimeLabel.attr("class", "past");

    }
    else if (workHours[i] == currentHour) {

        newTimeLabel.attr("class", "present");

    }
    else if (workHours[i] > currentHour){

        newTimeLabel.attr("class", "present");

    }

    }
    
    // Populate
    initCalendar();

    setWorkHoursClass();

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
