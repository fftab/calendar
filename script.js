// $(document).ready(function() {

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


    /*
            LATER
        //if you are trying to access data from arr
            //arr[i].time or arr[i].time task/toDo
    
    */
    






    // Functions
    // =================================

    // Function to Initialize the Calendar
    function initCalendar() {

        // Grab local storage
        // toDos  = localstorage("tasks",JSON.parse()); // grabs the string and turns it into object

        // Grab toDoList From The Local Storage
        // toDos = JSON.parse(localStorage.getItem("tasks"));
            //if todos is null
                // todos = [];  

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
            newTimeLabel.attr("class", "hour");
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
            // create data-index attr = workhours[i]
            newInput.attr("data-index", workHours[i]);
            // Append New Input Element to Input Column
            newInputRow.append(newInput);
            // append new input row to to do input column
            toDoInputColumn.append(newInputRow);

            // Create Save Buttons

            // Create New Save Button
            let newSaveButton = $("<button>");
            // Assign a Class for Styling
            newSaveButton.attr("class", "row saveBtn");
            // create data-index attr = workhours[i]
            newSaveButton.attr("data-index", workHours[i]);
            // Appending New Save Button to Save Button Column
            saveButtonColumn.append(newSaveButton);

        }

    }

    // setWorkHoursClass() <
    // setWorkHoursClass(INDEX) <
    function setWorkHoursClass(i) {

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

    // setWorkHoursClass();


    // function printThis(){
    //     console.log("this");
    // }

    // function printMe(i){
    //     console.log(i);
    // }

    // printThis();
    // printMe("this");

    // // Create Click Event Listener for Save Button
    $(".saveBtn").click(function () {
        // Grab info here

            // declare local variable to hold to do input
            let inputVal;

            console.log($(".to-do-input"));
            //for loop i < $(".to-do-input").length search for your dataindex
            for (let i = 0; i < $(".to-do-input").length; i++) {
                // console.log($(".to-do-input")[i].data("index"));

                let currentInputBox = $(".to-do-input")[i];//Good
                
                //look for a dataindex equal to your button
                //if(this.data("index") === $(".to-do-input")[i].attr("data-index"))
                if ($(this).data("index") == currentInputBox.dataset.index) {
                    
                    // Defining inputVal 
                    //inputVal = $(".to-do-input")[i].val();
                    inputVal = currentInputBox.value;
                    
                    break;

                }
                    

                    //grab that value and assign to your local variabnls

            }
            
        //Creat an object with the time value and the task for the time
            
            //obj
            let toDoObject = {

                // time: $(this).data("index")
                time: $(this).data("index"),
                // toDo/Task: inputValue
                task: inputVal

            };

            console.log(toDoObject);
        //for to check current array if there is already an object for current task
            //if it is already in arr
                //update that object
            //else
                //add to your array
                //arr.push(obj)
        // let newArr = [];
        // newArr.push(toDoObject);
        toDos.push(toDoObject);

            //stringify 

        //Update Local Storage with toDoList
        localStorage.setItem("tasks", JSON.stringify(toDos));
        
    });

// });
