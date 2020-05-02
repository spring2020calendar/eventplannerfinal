// JavaScript Document
$.validator.addMethod("timeTestWeekly", function (value, element) {
  var startDate = $('input[name=dateAlphaWeekly]').val();
  var endDate = $('input[name=dateOmegaWeekly]').val();
  var startTime = $('input[name=timeAlphaWeekly]').val();
  var endTime = $('input[name=timeOmegaWeekly]').val();
  if (startDate == null) {
    return true;
  }
  if (endDate == null) {
    return true;
  } else if (startTime < endTime) {
    return true;
  } else if (startTime == endTime) {
    return false;
  } else if (startTime > endTime) {
    return false;
  }
});

$.validator.addMethod("weeklyDateOmega", function (value, element) {
  var startDate = $('input[name=dateAlphaWeekly]').val();
  var endDate = $('input[name=dateOmegaWeekly]').val();
  var startTime = $('input[name=timeAlphaWeekly]').val();
  var endTime = $('input[name=timeOmegaWeekly]').val();

  // start date is greater than end date
  // start date is less than end date
});

$.validator.addMethod("weeklyTimeAlpha", function (value, element) {
  var startDate = $('input[name=dateAlphaWeekly]').val();
  var endDate = $('input[name=dateOmegaWeekly]').val();
  var startTime = $('input[name=timeAlphaWeekly]').val();
  var endTime = $('input[name=timeOmegaWeekly]').val();

  // start time is greater than end time
  // start time is less than end time
});

$.validator.addMethod("weeklyTimeOmega", function (value, element) {
  var startDate = $('input[name=dateAlphaWeekly]').val();
  var endDate = $('input[name=dateOmegaWeekly]').val();
  var startTime = $('input[name=timeAlphaWeekly]').val();
  var endTime = $('input[name=timeOmegaWeekly]').val();

  // start time is greater than end time
  // start time is less than end time
});
$.validator.addMethod("weeklyCheck", function (value, element) {
  var startDate = new Date($('#dateAlphaWeekly').val());
  var endDate = new Date($('#dateOmegaWeekly').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  var difference = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  if (difference >= 7) {
    return true;
  } else {
    return false;
  }
});


$.validator.addMethod("integerCheckEveryWeek", function (value, element) {
  var x = document.forms["newics"]["everyWeek"].value;
  var num = document.getElementById('everyWeek');
  if (isNaN(x)) {
    return false;
  } else if (num.value > 0) {
    return true;
  }
});

$.validator.addMethod("integerCheckWeeklyCount", function (value, element) {
  var x = document.forms["newics"]["weeklyCount"].value;
  var num = document.getElementById('weeklyCount');
  if (isNaN(x)) {
    return false;
  } else if (num.value > 0) {
    return true;
  }
});

function countCertainDays(days, d0, d1) {
  var ndays = 1 + Math.round((d1 - d0) / (24 * 3600 * 1000));
  var sum = function (a, b) {
    return a + Math.floor((ndays + (d0.getDay() + 6 - b) % 7) / 7);
  };
  return days.reduce(sum, 0);
}

function getDaysOfWeekIntArray() {
  var checked = []
  $("input[name='dayName']:checked").each(function () {
    checked.push(parseInt($(this).val()));
  });
  return checked.sort((a, b) => a - b);
}

function getDaysOfWeekNameArray() {
  var checked = []
  $("input[name='dayName']:checked").each(function () {
    checked.push($(this).attr("id"));
  });
  return checked;
}

function countCertainDays(days, startDate, endDate) {
  var ndays = 1 + Math.round((endDate - startDate) / (24 * 3600 * 1000));
  var sum = function (a, b) {
    return a + Math.floor((ndays + (startDate.getDay() + 6 - b) % 7) / 7);
  };
  return days.reduce(sum, 0);
}


function getDayNameVal(dayName) {
  if (dayName == "MO") {
    return 1;
  }
  if (dayName == "TU") {
    return 2;
  }
  if (dayName == "WE") {
    return 3;
  }
  if (dayName == "TH") {
    return 4;
  }
  if (dayName == "FR") {
    return 5;
  }
  if (dayName == "SA") {
    return 6;
  }
  if (dayName == "SU") {
    return 0;
  }
}

function getNextDayOfWeek(date, dayOfWeek) {
  // Code to check that date and dayOfWeek are valid left as an exercise ;)

  var resultDate = new Date(date.getTime());

  resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);

  return resultDate;
}

function getMessageByWeekly() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();

  var to = getTo();
  var toEmail = getEmail();
  var resources = getResources();

  var daysInt = getDaysOfWeekIntArray();
  var daysName = getDaysOfWeekNameArray();
  var dayName = daysName[0];
  var dayNameVal = getDayNameVal(dayName);
  var interval = parseInt(document.getElementById('everyWeek').value, 10);

  var startDate = new Date($('#dateAlphaWeekly').val());
  var endDate = new Date($('#dateOmegaWeekly').val());
  var newStartDate = getNextDayOfWeek(startDate, dayNameVal);
	
  var dateAlphaFormat = formatDate(newStartDate);
  var dateAlphaString = dateAlphaFormat.toString();
  var dateAlpha = dateAlphaString.replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaWeekly').val().replace(/\D/g, '') + "00";
  var dateOmega = dateAlphaString.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaWeekly').val().replace(/\D/g, '') + "00";
	
  var count;
    if (interval == 1) {
      count = countCertainDays(daysInt, startDate, endDate);
      return ["CALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nGEO:" + geo + "\nLOCATION:" + location +  "\nRRULE:FREQ=WEEKLY;COUNT=" + count + ";BYDAY=" + daysName + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];


    } else {
      count = Math.ceil(countCertainDays(daysInt, startDate, endDate) / interval);
      return ["CALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nGEO:" + geo + "\nLOCATION:" + location +  "\nRRULE:FREQ=WEEKLY;COUNT=" + count + ";INTERVAL=" + interval + ";BYDAY=" + daysName + "\nPRIORITY:5\n" + to  + toEmail + "\n" + resources + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
    }
}

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day];
}

function setSecondDate() {
  var currentDate = new Date($("#dateAlphaWeekly").val());
  var daysInt = getDaysOfWeekIntArray();
  var a = daysInt.concat();
  var days = document.getElementById("weeklyCount").value;
  days = parseInt(days);
  var daysToCount = 0;
  daysToCount = parseInt(daysToCount);

  while (daysToCount < days) {
    for (var i = 0; i < a.length; i++) {
      currentDateDay = currentDate.getDay();
      if (currentDateDay === a[i]) {
        daysToCount++;
      }
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return currentDate;
}

function setSecondDateIntervals() {
  var interval = parseInt(document.getElementById('everyWeek').value, 10);
  var currentDate = new Date($("#dateAlphaWeekly").val());
  var daysInt = getDaysOfWeekIntArray();
  var a = daysInt.concat();
  var days = document.getElementById("weeklyCount").value;
  days = parseInt(days);
  var daysToCount = 0;
  daysToCount = parseInt(daysToCount);

  while (daysToCount < days) {
    for (var i = 0; i < a.length; i++) {
      currentDateDay = currentDate.getDay();
      if (currentDateDay === a[i]) {
        daysToCount++;
      }
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return currentDate;
}

function getMessageAfterWeekly() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();

  var to = getTo();
  var toEmail = getEmail();
  var resources = getResources();


  var interval = parseInt(document.getElementById('everyWeek').value, 10);
  if (interval == 1) {

  var daysInt = getDaysOfWeekIntArray();
  var daysName = getDaysOfWeekNameArray();
  var dayName = daysName[0];
  var dayNameVal = getDayNameVal(dayName);
  var interval = parseInt(document.getElementById('everyWeek').value, 10);

  var startDate = new Date($('#dateAlphaWeekly').val());
  var endDate = new Date($('#dateOmegaWeekly').val());
  var newStartDate = getNextDayOfWeek(startDate, dayNameVal);
	
  var dateAlphaFormat = formatDate(newStartDate);
  var dateAlphaString = dateAlphaFormat.toString();
  var dateAlpha = dateAlphaString.replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaWeekly').val().replace(/\D/g, '') + "00";
  var dateOmega = dateAlphaString.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaWeekly').val().replace(/\D/g, '') + "00";
	
    var count = parseInt(document.getElementById('weeklyCount').value, 10);
    /*var dateAlpha = $('#dateAlphaWeekly').val().replace(/[^0-9]+/g, '');
    var count = parseInt(document.getElementById('weeklyCount').value, 10);
    var daysName = getDaysOfWeekNameArray();
    var tempDate = setSecondDate();
    var tempDateOmega = formatDate(tempDate);
    var tempDateOmega2 = tempDateOmega.toString();
    var dateAlpha = $('#dateAlphaWeekly').val().replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaWeekly').val().replace(/\D/g, '') + "00";
    var dateOmega = tempDateOmega2.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaWeekly').val().replace(/\D/g, '') + "00";
    var tempDate = setSecondDate();
    var tempDateOmega = formatDate(tempDate);
    var tempDateOmega2 = tempDateOmega.toString();
*/
    return ["CALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nGEO:" + geo + "\nLOCATION:" + location + "\nRRULE:FREQ=WEEKLY;COUNT=" + count + ";BYDAY=" + daysName + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  } else {
    var count = parseInt(document.getElementById('weeklyCount').value, 10);

    return ["CALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nGEO:" + geo + "\nLOCATION:" + location + "\nRRULE:FREQ=WEEKLY;COUNT=" + count + ";INTERVAL=" + interval + ";BYDAY=" + daysName + ";WKST=SU\nPRIORITY:5\n" + to  + toEmail + "\n" + resources +  "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  }
}

function getMessageNoEndWeekly() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();

  var to = getTo();
  var toEmail = getEmail();
  var resources = getResources();

  var daysInt = getDaysOfWeekIntArray();
  var daysName = getDaysOfWeekNameArray();
  var dayName = daysName[0];
  var dayNameVal = getDayNameVal(dayName);
  var interval = parseInt(document.getElementById('everyWeek').value, 10);

  var startDate = new Date($('#dateAlphaWeekly').val());
  var endDate = new Date($('#dateOmegaWeekly').val());
  var newStartDate = getNextDayOfWeek(startDate, dayNameVal);
	
  var dateAlphaFormat = formatDate(newStartDate);
  var dateAlphaString = dateAlphaFormat.toString();
  var dateAlpha = dateAlphaString.replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaWeekly').val().replace(/\D/g, '') + "00";
  var dateOmega = dateAlphaString.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaWeekly').val().replace(/\D/g, '') + "00";
	

  var interval = parseInt(document.getElementById('everyWeek').value, 10);
  if (interval == 1) {

    return ["CALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nGEO:" + geo + "\nLOCATION:" + location + "\nRRULE:FREQ=WEEKLY;BYDAY=" + daysName + "\nPRIORITY:5\n" + to  + toEmail + "\n" + resources +  "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  } else {

    return ["CALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nGEO:" + geo + "\nLOCATION:" + location + "\nRRULE:FREQ=WEEKLY;INTERVAL=" + interval + ";BYDAY=" + daysName + ";WKST=SU\nPRIORITY:5\n" + to + toEmail + "\n" + resources +  "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  }
}
