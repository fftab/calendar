// Gloabal Variables
// ========================

    // initializing workHours array containing the hours of the work day
    let workHours = [ 09, 10, 11, 12, 13, 14, 15, 16, 17 ];

    // initializing the current tasks stored in the input fields
    let currentTasks = [ ];

    // initializing the timeColumn variable (will append time to this column)
    let timeColumn = $("#time-column").html();

    // initializing the input-column variable (will append input boxes to this column)
    let toDoInputColumn = $("#to-do-input-cloumn").html();

    // initializing the submitButtonColumn variable (will append submit buttons to this column)
    let submitButtonColumn = $("#submit-button-column").html();

    // using the moment.js API to retrieve the month day and year in real time
    let currentDate = 'https://moment.js.com/moment().format("ll")'; // Month Day Year

    let currentTime = 'https://momentjs.com/moment().format("HH")'; // 24Hr Time Used to check time block

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
        // Creating Time Labels

            // Create New Time Label
            let newTimeLabel = $("<label>");
            // Assign a Class for Styling
            newTimeLabel.attr("class", "time-labels");
            // Assign a For Attribute with Respect to Input
            newTimeLabel.attr("for", "to-do-input" + JSON.stringify(i));
            // Assign New Time Label Text
            newTimeLabel.text = JSON.stringify(workHours[i]);
            // Appending New Time Label to Time Column
            timeColumn.append(newTimeLabel);

        // Creating Input Elements

            // Create New Input Element


        // Create Save Buttons

            // Create New Save Button
            let newSaveButton = $("<button>");
            // Assign a Class for Styling
            newSaveButton.attr("class", "saveBtn");
            // Assign an ID
            newSaveButton.attr("id", "save-button");
            // Appending New Save Button to Save Button Column
            saveButtonColumn.append(newSaveButton);

    }

}

// Populate
initCalendar();

// Create Click Event Listener for Save Button
$("#save-button").onclick(function() {

    //grab info herre

        //ipnut
    
    //Update Local Storage
        //Update Local Storage with toDoList
        // localStorage.setItem("toDo", JSON.stringify(toDoList));
        //    localStorage = go to local storage
        //     setItem = putting something/updating inside local storage
        //     "toDo" - Variable For Local Storage item
        //      JSON.stringify(toDoList) = turning your list into a string for the local storage

});

    
    
