// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //

$(document).ready(function() {

  const currentDay = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(currentDay);


  var currentHour = dayjs().format('H');

  $('.time-block').each(function () {
    var hour = parseInt($(this).attr('id').split('-')[1]);


    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour > currentHour) {
      $(this).addClass('future');
    } else {
      $(this).addClass('present');
    }

    // create a function that saves to local storage.

    var event = localStorage.getItem('event-' + hour);
    $(this).find('.description').val(event);

    $(this).find(".saveBtn").click(function () {
      var eventText = $(this).siblings('.descritpion').val();
      localStorage.setItem('event-' + hour, eventText);
    });
  });
});