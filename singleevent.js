// JavaScript Document
$.validator.addMethod("currentAlpha", function (value, element) {
  var curDate = new Date();
  var startDate = new Date($('#dateAlpha').val());
  if (startDate < curDate) {
    return false;
  } else {
    return true;
  }
});

$.validator.addMethod("currentOmega", function (value, element) {
  var curDate = new Date();
  var endDate = new Date($('#dateOmega').val());
  if (endDate < curDate) {
    return false;
  } else {
    return true;
  }
});
$.validator.addMethod("minAlpha", function (value, element) {
  var startDate = new Date($('#dateAlpha').val());
  var endDate = new Date($('#dateOmega').val());
  if (endDate < startDate) {
    return false;
  } else {
    return true;
  }

});
$.validator.addMethod("minOmega", function (value, element) {
  var startDate = new Date($('#dateAlpha').val());
  var endDate = new Date($('#dateOmega').val());
  if (startDate > endDate) {
    return false;
  } else {
    return true;
  }
});

$.validator.addMethod("timeTest", function (value, element) {
  var startDate = $('input[name=dateAlpha]').val();
  var endDate = $('input[name=dateOmega]').val();
  var startTime = $('input[name=timeAlpha]').val();
  var endTime = $('input[name=timeOmega]').val();

  // if the start date is after the end date
  if (startDate > endDate) {
    return false;
  }
  if (startDate < endDate) {
    return true;
  }
  if (startDate == null) {
    return true;
  }
  if (endDate == null) {
    return true;
  }
  // if the start date and end date are the same -- and end time is before the start time
  else if (startDate == endDate && endTime < startTime) {
    return false;
  } else if (startDate == endDate && endTime > startTime) {
    return true;
  } 
});

$(function () {
  $("form[name='newics']").validate({
    groups: {
      date: "dateAlpha dateOmega",
      time: "timeAlpha timeOmega",
    },
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      title: {
        required: true,
        minlength: 1, // <- here
        maxlength: 50
      },
      location: {
        required: true,
        minlength: 1, // <- here
        maxlength: 50
      },
      dateAlpha: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentAlpha: true,
        minAlpha: true
      },
      dateOmega: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentOmega: true,
        minOmega: true
      },
      timeAlpha: {
        required: true,
        timeTest: true,
        minAlpha: true
      },
      timeOmega: {
        required: true,
        timeTest: true,
        minOmega: true
      },
    },
    // Specify validation error messages
    messages: {
      title: "Title is required.",
      location: "Location is required.",
      dateAlpha: {
        required: "Start and end date is required.",
        currentAlpha: "Start date occurs in the past.",
        minAlpha: "Start date occurs after end date."
      },
      dateOmega: {
        required: "Start and end date is required.",
        currentOmega: "End date occurs in the past.",
        minOmega: "End date occurs before start date."
      },
      timeAlpha: {
        required: "Start and end time required.",
        timeTest: "Start time occurs at or after end time.",
        minAlpha: "Start time occurs after end time."
      },
      timeOmega: {
        required: "Start and end time required.",
        timeTest: "Start time occurs at or after end time.",
        minOmega: "End time occurs before start time."
      },
    },
  });
});

$(function () {
  $("form[name='newics']").submit(function () {
    if ($(this).valid()) {
      var title = $('#title').val();
      var location = $('#location').val();
      var description = $('#description').val();
      var dateAlpha = $('#dateAlpha').val().replace(/[^0-9]+/g, '') + "T" + $('#timeAlpha').val().replace(/\D/g,'') + "00";
      var dateOmega = $('#dateOmega').val().replace(/[^0-9]+/g, '') + "T" + $('#timeOmega').val().replace(/\D/g,'') + "00";

    var to = "Test to";
    var toEmail = "testemail@gmail.com";
		
		
      var message = [   "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:${uuid()}\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nLOCATION:" + location + "\nORGANIZER;CN=" + to + ":MAILTO::" + toEmail + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
		
      window.open("data:text/calendar;charset=utf8," + escape(message));
    }
  });
});
