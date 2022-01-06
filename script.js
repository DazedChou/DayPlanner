var today = $("#currentDay");
var planner = $(".container-fluid");
var hours = ["9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00",
"19:00","20:00",];

today.text(moment().format('MMMM Do YYYY'));
var timeSlots = [];

for (let i = 0 ; i < hours.length ; i++){
    var rowEl = $('<div class = "row">');
    planner.append(rowEl);

    timeEl = $('<div class ="col-md-1 time-block">');
    timeEl.text(hours[i]);
    timeEl.attr("data-hour",i+9);

    rowEl.append(timeEl);

    noteEl = $('<div class = "col-md-10 description">');
    textEl = $('<textarea>');
    noteEl.append(textEl);

    rowEl.append(noteEl);

    saveEl = $('<div class = "col-md-1">');
    buttonEl = $('<button class = "saveBtn" >');
    buttonEl.attr('data-index',i)
    saveEl.append(buttonEl);
    buttonEl.text("Save");
    rowEl.append(saveEl);
    timeSlots.push(rowEl);
}
console.log(timeSlots);

planner.on('click','.saveBtn',function(){
    var element = $(this);

    localStorage.setItem(element.attr('data-index'),$('.container-fluid').children().eq(element.attr('data-index')).children().value);
    // console.log(element.closest(".time-block").value);
    console.log(element.attr('data-index'));
    // if (element.matches(".saveBtn")){

    //     localStorage.setItem();
    // }
})

//Color code past, present, future
var currentTime = parseInt(moment().format("H"));


for (let i = 0 ; i < timeSlots.length ; i++){
    let timeblock = timeSlots[i].children().eq(0).attr("data-hour");
    if (timeblock < currentTime){
        timeSlots[i].children().eq(1).children().addClass("past");
    }
    if(timeblock == currentTime){
        timeSlots[i].children().eq(1).children().addClass("present");
    }
    if (timeblock > currentTime){
        timeSlots[i].children().eq(1).children().addClass("future");
    }

}

