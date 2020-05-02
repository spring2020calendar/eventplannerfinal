// JavaScript Document
$.validator.addMethod("timeTestDaily", function (value, element) {
  var startDate = $('input[name=dateAlphaDaily]').val();
  var endDate = $('input[name=dateOmegaDaily]').val();
  var startTime = $('input[name=timeAlphaDaily]').val();
  var endTime = $('input[name=timeOmegaDaily]').val();
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

$.validator.addMethod("dailyCheck", function (value, element) {
  var startDate = new Date($('#dateAlphaDaily').val());
  var endDate = new Date($('#dateOmegaDaily').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  var difference = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  if (difference >= 1) {
    return true;
  } else {
    return false;
  }
});

$.validator.addMethod("integerCheckEveryDay", function (value, element) {
  var x = document.forms["newics"]["everyDay"].value;
  var num = document.getElementById('everyDay');
  if (isNaN(x)) {
    return false;
  } else if (num.value > 0) {
    return true;
  }
});

$.validator.addMethod("integerCheckDailyCount", function (value, element) {
  var x = document.forms["newics"]["dailyCount"].value;
  var num = document.getElementById('dailyCount');
  if (isNaN(x)) {
    return false;
  } else if (num.value > 0) {
    return true;
  }
});

function getMessageByDaily() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();
  var dateAlpha = $('#dateAlphaDaily').val().replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaDaily').val().replace(/\D/g, '') + "00";
  var dateOmega = $('#dateAlphaDaily').val().replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaDaily').val().replace(/\D/g, '') + "00";

  var startDate = new Date($('#dateAlphaDaily').val());
  var endDate = new Date($('#dateOmegaDaily').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

  var to = getTo();
  var toEmail = getEmail();
  var resources = getResources();

  var count;
  var interval = parseInt(document.getElementById('everyDay').value, 10);

  if (interval == 1) {
    count = Math.ceil(timeDiff / MILLISECONDS_PER_DAY) + 1;
    return ["CALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nGEO:" + geo + "\nLOCATION:" + location + "\nRRULE:FREQ=DAILY;COUNT=" + count + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources +  "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];

  } else {
    var tempCount = Math.ceil(timeDiff / MILLISECONDS_PER_DAY) + 1;
    if (interval % 2 == 0) {
      count = Math.ceil(Math.ceil(timeDiff / MILLISECONDS_PER_DAY) / interval) + 1;
    }
    if (interval % 2 == 1) {
      count = Math.ceil(Math.ceil(timeDiff / MILLISECONDS_PER_DAY) / interval);
    }
    return ["CALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nGEO:" + geo + "\nLOCATION:" + location + "\nRRULE:FREQ=DAILY;COUNT=" + count + ";INTERVAL=" + interval + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  }
}

function getMessageAfterDaily() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();
  var dateAlpha = $('#dateAlphaDaily').val().replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaDaily').val().replace(/\D/g, '') + "00";
  var dateOmega = $('#dateAlphaDaily').val().replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaDaily').val().replace(/\D/g, '') + "00";

  var to = getTo();
  var toEmail = getEmail();
  var resources = getResources();

  var count = parseInt(document.getElementById('dailyCount').value, 10);
  var interval = parseInt(document.getElementById('everyDay').value, 10);

  return ["CALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nGEO:" + geo + "\nLOCATION:" + location + "\nRRULE:FREQ=DAILY;COUNT=" + count + ";INTERVAL=" + interval + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
}

function getMessageNoEndDaily() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();
  var dateAlpha = $('#dateAlphaDaily').val().replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaDaily').val().replace(/\D/g, '') + "00";
  var dateOmega = $('#dateAlphaDaily').val().replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaDaily').val().replace(/\D/g, '') + "00";

  var startDate = new Date($('#dateAlphaDaily').val());
  var endDate = new Date($('#dateOmegaDaily').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

  var to = getTo();
  var toEmail = getEmail();
  var resources = getResources();

  var interval = parseInt(document.getElementById('everyDay').value, 10);

  return ["CALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nGEO:" + geo + "\nLOCATION:" + location + "\nRRULE:FREQ=DAILY;INTERVAL=" + interval + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
}

function weekdaysBetween(startDate, endDate) {
  var s = startDate;
  var e = endDate;

  var diffDays = Math.floor((e - s) / 86400000);
  var weeksBetween = Math.floor(diffDays / 7);
  if (s.getDay() == e.getDay()) {
    var adjust = 0;
  } else if (s.getDay() == 0 && e.getDay() == 6) {
    var adjust = 5;
  } else if (s.getDay() == 6 && e.getDay() == 0) {
    var adjust = 0;
  } else if (e.getDay() == 6 || e.getDay() == 0) {
    var adjust = 5 - s.getDay();
  } else if (s.getDay() == 0 || s.getDay() == 6) {
    var adjust = e.getDay();
  } else if (e.getDay() > s.getDay()) {
    var adjust = e.getDay() - s.getDay();
  } else {
    var adjust = 5 + e.getDay() - s.getDay();
  }
  return (weeksBetween * 5) + adjust;
}

function getNextDayOfWeek(date, dayOfWeek) {
  // Code to check that date and dayOfWeek are valid left as an exercise ;)

  var resultDate = new Date(date.getTime());
  resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
  return resultDate;
}

function getMessageWeekdayByDaily() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();

  var startDateTemp = new Date($('#dateAlphaDaily').val());
  var startDate = new Date(startDateTemp.getTime() + startDateTemp.getTimezoneOffset() * 60000);
  var newStartDate;
  if (startDate.getDay == 0) {
    newStartDate = getNextDayOfWeek(startDate, 1);
  } else if (startDate.getDay() == 6) {
    newStartDate = getNextDayOfWeek(startDate, 1);
  } else {
    newStartDate = startDate;
  }
  var dayVal = startDate.getDay();
  var endDate = new Date($('#dateOmegaDaily').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  var dateAlphaFormat = formatDate(newStartDate);
  var dateAlphaString = dateAlphaFormat.toString();
  var dateAlpha = dateAlphaString.replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaDaily').val().replace(/\D/g, '') + "00";
  var dateOmega = dateAlphaString.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaDaily').val().replace(/\D/g, '') + "00";

  var to = getTo();
  var toEmail = getEmail();
  var resources = getResources();

  var tempCount = Math.ceil(timeDiff / MILLISECONDS_PER_DAY) + 1;
  var count = weekdaysBetween(startDate, endDate);

  return ["CALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nGEO:" + geo + "\nLOCATION:" + location + "\nRRULE:FREQ=WEEKLY;COUNT=" + count + ";BYDAY=MO,TU,WE,TH,FR\nPRIORITY:5\n" + to + toEmail + "\n" + resources + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
}

function getMessageWeekdayAfterDaily() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();

  var startDateTemp = new Date($('#dateAlphaDaily').val());
  var startDate = new Date(startDateTemp.getTime() + startDateTemp.getTimezoneOffset() * 60000);
  var newStartDate;
  if (startDate.getDay == 0) {
    newStartDate = getNextDayOfWeek(startDate, 1);
  } else if (startDate.getDay() == 6) {
    newStartDate = getNextDayOfWeek(startDate, 1);
  } else {
    newStartDate = startDate;
  }
  var dayVal = startDate.getDay();
  var endDate = new Date($('#dateOmegaDaily').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  var dateAlphaFormat = formatDate(newStartDate);
  var dateAlphaString = dateAlphaFormat.toString();
  var dateAlpha = dateAlphaString.replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaDaily').val().replace(/\D/g, '') + "00";
  var dateOmega = dateAlphaString.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaDaily').val().replace(/\D/g, '') + "00";

  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

  var to = getTo();
  var toEmail = getEmail();
  var resources = getResources();

  var tempCount = Math.ceil(timeDiff / MILLISECONDS_PER_DAY) + 1;
  var count = parseInt(document.getElementById('dailyCount').value, 10);

  return ["CALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nGEO:" + geo + "\nLOCATION:" + location + "\nRRULE:FREQ=WEEKLY;COUNT=" + count + ";BYDAY=MO,TU,WE,TH,FR\nPRIORITY:5\n" + to + toEmail + "\n" + resources + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
}

function getMessageWeekdayNoEndDaily() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();

  var startDateTemp = new Date($('#dateAlphaDaily').val());
  var startDate = new Date(startDateTemp.getTime() + startDateTemp.getTimezoneOffset() * 60000);
  var newStartDate;
  if (startDate.getDay == 0) {
    newStartDate = getNextDayOfWeek(startDate, 1);
  } else if (startDate.getDay() == 6) {
    newStartDate = getNextDayOfWeek(startDate, 1);
  } else {
    newStartDate = startDate;
  }
  var dayVal = startDate.getDay();
  var endDate = new Date($('#dateOmegaDaily').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  var dateAlphaFormat = formatDate(newStartDate);
  var dateAlphaString = dateAlphaFormat.toString();
  var dateAlpha = dateAlphaString.replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaDaily').val().replace(/\D/g, '') + "00";
  var dateOmega = dateAlphaString.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaDaily').val().replace(/\D/g, '') + "00";

  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

  var to = getTo();
  var toEmail = getEmail();
  var resources = getResources();

  var interval = parseInt(document.getElementById('everyDay').value, 10);

  return ["CALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nGEO:" + geo + "\nLOCATION:" + location + "\nRRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR\nPRIORITY:5\n" + to + toEmail + "\n" + resources + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
}
