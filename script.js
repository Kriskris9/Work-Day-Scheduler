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
      var eventText = $(this).siblings('.description').val();
      localStorage.setItem('event-' + hour, eventText);
    });
  });
});

