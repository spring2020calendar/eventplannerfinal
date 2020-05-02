// JavaScript Document
$.validator.addMethod("timeTestYearly", function (value, element) {
  var startDate = $('input[name=dateAlphaYearly]').val();
  var endDate = $('input[name=dateOmegaYearly]').val();
  var startTime = $('input[name=timeAlphaYearly]').val();
  var endTime = $('input[name=timeOmegaYearly]').val();
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

$.validator.addMethod("yearlyDateOmega", function (value, element) {
  var startDate = $('input[name=dateAlphaYearly]').val();
  var endDate = $('input[name=dateOmegaYearly]').val();
  var startTime = $('input[name=timeAlphaYearly]').val();
  var endTime = $('input[name=timeOmegaYearly]').val();

  // start date is greater than end date
  // start date is less than end date
});

$.validator.addMethod("yearlyTimeAlpha", function (value, element) {
  var startDate = $('input[name=dateAlphaYearly]').val();
  var endDate = $('input[name=dateOmegaYearly]').val();
  var startTime = $('input[name=timeAlphaYearly]').val();
  var endTime = $('input[name=timeOmegaYearly]').val();

  // start time is greater than end time
  // start time is less than end time
});

$.validator.addMethod("yearlyTimeOmega", function (value, element) {
  var startDate = $('input[name=dateAlphaYearly]').val();
  var endDate = $('input[name=dateOmegaYearly]').val();
  var startTime = $('input[name=timeAlphaYearly]').val();
  var endTime = $('input[name=timeOmegaYearly]').val();

  // start time is greater than end time
  // start time is less than end time
});

$.validator.addMethod("integerCheckNumYears", function (value, element) {
  var x = document.forms["newics"]["numYears"].value;
  var num = document.getElementById('numYears');
  if (isNaN(x)) {
    return false;
  } else if (num.value > 0) {
    return true;
  }
});

$.validator.addMethod("emptySelectYearChooseMonthName", function (value, element, arg) {
  if (document.getElementById('monthNameYearly').value == "-1") {
    return false;
  } else {
    return true;
  }
});

$.validator.addMethod("emptySelectYearChooseWeekYearly", function (value, element, arg) {
  if (document.getElementById('weekYearly').value == "-1") {
    return false;
  } else {
    return true;
  }
});

$.validator.addMethod("emptySelectYearChooseWeekDayYearly", function (value, element, arg) {
  if (document.getElementById('weekDayYearly').value == "-1") {
    return false;
  } else {
    return true;
  }
});

$.validator.addMethod("emptySelectYearChooseMonthName2", function (value, element, arg) {
  if (document.getElementById('monthNameYearly2').value == "-1") {
    return false;
  } else {
    return true;
  }
});


$.validator.addMethod("integerCheckDayOfMonth", function (value, element) {
  var x = document.forms["newics"]["everyDayOfMonthYear"].value;
  var num = document.getElementById('everyDayOfMonthYear');
  if (isNaN(x)) {
    return false;
  } else if (num.value > 0) {
    return true;
  }
});


$.validator.addMethod("integerCheckYearlyCount", function (value, element) {
  var x = document.forms["newics"]["yearlyCount"].value;
  var num = document.getElementById('yearlyCount');
  if (isNaN(x)) {
    return false;
  } else if (num.value > 0) {
    return true;
  }
});


$.validator.addMethod("yearlyCheck", function (value, element) {
  var startDate = new Date($('#dateAlphaYearly').val());
  var endDate = new Date($('#dateOmegaYearly').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  var difference = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);

  if ($('input[name=endYearly]:checked').val() == 'byYearly') {
    if (difference < 365) {
      return false;
    } else {
      return true;
    }
  }
});

function getMonthVal(monthName) {
  if (monthName == "jan") {
    return 0;
  }
  if (monthName == "feb") {
    return 1;
  }
  if (monthName == "mar") {
    return 2;
  }
  if (monthName == "apr") {
    return 3;
  }
  if (monthName == "may") {
    return 4;
  }
  if (monthName == "jun") {
    return 5;
  }
  if (monthName == "jul") {
    return 6;
  }
  if (monthName == "aug") {
    return 7;
  }
  if (monthName == "sep") {
    return 8;
  }
  if (monthName == "oct") {
    return 9;
  }
  if (monthName == "nov") {
    return 10;
  }
  if (monthName == "dec") {
    return 11;
  }
}

function getNewStartDate(start, month, day) {
  var newStartDate = new Date(start);
  newStartDate.setFullYear(newStartDate.getFullYear(), month, day);
  return newStartDate;
}

function getDatesYears(startDate, endDate) {
  var currentDate = startDate;
  var dateArray = [];
  var newDate;
  var i = 0;

  while (currentDate <= endDate) {
    newDate = new Date(currentDate.setFullYear(currentDate.getFullYear()));
    dateArray.push(newDate);
    newDate = new Date(currentDate.setFullYear(currentDate.getFullYear() + 1));
    i++;
  }
  return dateArray.join('\n');
}

function yearsDiff2(d1, d2) {
  var date1 = new Date(d1);
  var date2 = new Date(d2);
  var yearsDiff = date2.getFullYear() - date1.getFullYear();
  return yearsDiff;
}


function checkDateValid() {
  var dateAlphaTemp = new Date($('#dateAlphaYearly').val());

  var dateOmega = new Date($('#dateOmegaYearly').val());
  var startDate = new Date($('#dateAlphaYearly').val());
  var endDate = new Date($('#dateOmegaYearly').val());

  var monthNameTemp = document.forms["newics"]["monthNameYearly"].value;
  var monthName = getMonthVal(monthNameTemp);
  var monthDay = $('input[name=everyDayOfMonthYear]').val();

  var dateAlphaTemp2 = getNewStartDate(dateAlphaTemp, monthName, monthDay);
  var startDate = getNewStartDate(dateAlphaTemp, monthName, monthDay);
  var dateAlpha = new Date(dateAlphaTemp2);
  var dates = getDatesYears(dateAlpha, endDate);

  if (dates) {
    return true;
  } else {
    alert("The recurrence pattern is not valid.");
    return false;
  }
};

function check() {
  var num = $('input[name=everyDayOfMonthYear]').val();
  if (num == null) {
    return true;
  } else if (num > 28) {
    var result = checkDateValid();
    if (result) {
      return true;
    } else {
      return false;
    }
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

function getMessageByYearlyDay() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();

  var to = getTo();
  var toEmail = getEmail();
	var resources = getResources();
  var dateAlphaTemp = new Date($('#dateAlphaYearly').val());

  var startDate = new Date($('#dateAlphaYearly').val());
  var endDate = new Date($('#dateOmegaYearly').val());

  var monthNameTemp = document.forms["newics"]["monthNameYearly"].value;
  var monthName = getMonthVal(monthNameTemp);
  var monthDay = $('input[name=everyDayOfMonthYear]').val();

  var dateAlphaTemp2 = getNewStartDate(dateAlphaTemp, monthName, monthDay);
  var startDate2 = getNewStartDate(dateAlphaTemp, monthName, monthDay);
  var dateAlphaTemp3 = new Date(dateAlphaTemp2);
  /*var dates = getDatesYears(dateAlphaTemp3, endDate);*/
  var count;

  var startDate2Format = formatDate(startDate2);
  var startDateToString = startDate2Format.toString();
  var dateAlpha = startDateToString.replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaYearly').val().replace(/\D/g, '') + "00";
  var dateOmega = startDateToString.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaYearly').val().replace(/\D/g, '') + "00";
  var years = yearsDiff2(startDate2, endDate);
  var monthNameVal = monthName + 1;
  var interval = parseInt(document.getElementById('numYears').value, 10);

  if (interval == 1) {
    count = years;
    return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega +  "\nGEO:" + geo + "\nLOCATION:" + location +  "\nRRULE:FREQ=YEARLY;COUNT=" + count + ";BYMONTHDAY=" + monthDay + ";BYMONTH=" + monthNameVal + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];

  } else {
    count = Math.ceil(years / interval);
    return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nGEO:" + geo + "\nLOCATION:" + location +  "\nRRULE:FREQ=YEARLY;COUNT=" + count + ";INTERVAL=" + interval + ";BYMONTHDAY=" + monthDay + ";BYMONTH=" + monthNameVal + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  }
}

function getMessageAfterYearlyDay() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();

  var to = getTo();
  var toEmail = getEmail();
	var resources = getResources();
  var dateAlphaTemp = new Date($('#dateAlphaYearly').val());

  var startDate = new Date($('#dateAlphaYearly').val());
  var endDate = new Date($('#dateOmegaYearly').val());

  var monthNameTemp = document.forms["newics"]["monthNameYearly"].value;
  var monthName = getMonthVal(monthNameTemp);
  var monthDay = $('input[name=everyDayOfMonthYear]').val();

  var dateAlphaTemp2 = getNewStartDate(dateAlphaTemp, monthName, monthDay);
  var startDate2 = getNewStartDate(dateAlphaTemp, monthName, monthDay);
  var dateAlphaTemp3 = new Date(dateAlphaTemp2);
  /*var dates = getDatesYears(dateAlphaTemp3, endDate);*/
  var count;

  var startDate2Format = formatDate(startDate2);
  var startDateToString = startDate2Format.toString();
  var dateAlpha = startDateToString.replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaYearly').val().replace(/\D/g, '') + "00";
  var dateOmega = startDateToString.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaYearly').val().replace(/\D/g, '') + "00";
  var monthNameVal = monthName + 1;
  var interval = parseInt(document.getElementById('numYears').value, 10);
  var years = parseInt(document.getElementById('yearlyCount').value, 10);

  if (interval == 1) {
    count = years;
    return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega +  "\nGEO:" + geo + "\nLOCATION:" + location +  "\nRRULE:FREQ=YEARLY;COUNT=" + count + ";BYMONTHDAY=" + monthDay + ";BYMONTH=" + monthNameVal + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources +  "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];

  } else {
    count = years;
    return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega +  "\nGEO:" + geo + "\nLOCATION:" + location +  "\nRRULE:FREQ=YEARLY;COUNT=" + count + ";INTERVAL=" + interval + ";BYMONTHDAY=" + monthDay + ";BYMONTH=" + monthNameVal + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources +  "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  }
}

function getMessageNoEndYearlyDay() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();

  var to = getTo();
  var toEmail = getEmail();
	var resources = getResources();
  var dateAlphaTemp = new Date($('#dateAlphaYearly').val());

  var startDate = new Date($('#dateAlphaYearly').val());
  var endDate = new Date($('#dateOmegaYearly').val());

  var monthNameTemp = document.forms["newics"]["monthNameYearly"].value;
  var monthName = getMonthVal(monthNameTemp);
  var monthDay = $('input[name=everyDayOfMonthYear]').val();

  var dateAlphaTemp2 = getNewStartDate(dateAlphaTemp, monthName, monthDay);
  var startDate2 = getNewStartDate(dateAlphaTemp, monthName, monthDay);
  var dateAlphaTemp3 = new Date(dateAlphaTemp2);
  /*var dates = getDatesYears(dateAlphaTemp3, endDate);*/
  var count;

  var startDate2Format = formatDate(startDate2);
  var startDateToString = startDate2Format.toString();
  var dateAlpha = startDateToString.replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaYearly').val().replace(/\D/g, '') + "00";
  var dateOmega = startDateToString.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaYearly').val().replace(/\D/g, '') + "00";
  var monthNameVal = monthName + 1;
  var interval = parseInt(document.getElementById('numYears').value, 10);

  if (interval == 1) {
    return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega +  "\nGEO:" + geo + "\nLOCATION:" + location +  "\nRRULE:FREQ=YEARLY;BYMONTHDAY=" + monthDay + ";BYMONTH=" + monthNameVal + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources +  "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];

  } else {
    return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega +  "\nGEO:" + geo + "\nLOCATION:" + location +  "\nRRULE:FREQ=YEARLY;INTERVAL=" + interval + ";BYMONTHDAY=" + monthDay + ";BYMONTH=" + monthNameVal + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources +  "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  }
}

function getSetPos2(pos) {
  if (pos == "firstWeek") {
    return "1";
  }
  if (pos == "secondWeek") {
    return "2";
  }
  if (pos == "thirdWeek") {
    return "3";
  }
  if (pos == "fourthWeek") {
    return "4";
  }
  if (pos == "lastWeek") {
    return "-1";
  }
}

function getSetPosVal2(pos) {
  if (pos == "1") {
    return 1;
  }
  if (pos == "2") {
    return 2;
  }
  if (pos == "3") {
    return 3;
  }
  if (pos == "4") {
    return 4;
  }
  if (pos == "-1") {
    return 5;
  }
}

function getDayName2(dayName) {
  if (dayName == "mondayChoose") {
    return "MO";
  }
  if (dayName == "tuesdayChoose") {
    return "TU";
  }
  if (dayName == "wednesdayChoose") {
    return "WE";
  }
  if (dayName == "thursdayChoose") {
    return "TH";
  }
  if (dayName == "fridayChoose") {
    return "FR";
  }
  if (dayName == "saturdayChoose") {
    return "SA";
  }
  if (dayName == "sundayChoose") {
    return "SU";
  }
}

function getDayNameVal2(dayName) {
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

function getMondays(startDate) {
  var d = new Date(startDate),
    month = d.getMonth(),
    mondays = [];

  d.setDate(1);

  // Get the first Monday in the month
  while (d.getDay() !== 1) {
    d.setDate(d.getDate() + 1);
  }

  // Get all the other Mondays in the month
  while (d.getMonth() === month) {
    mondays.push(new Date(d.getTime()));
    d.setDate(d.getDate() + 7);
  }
  return mondays;
}

function getTuesdays(startDate) {
  var d = new Date(startDate),
    month = d.getMonth(),
    tuesdays = [];

  d.setDate(1);

  // Get the first Monday in the month
  while (d.getDay() !== 2) {
    d.setDate(d.getDate() + 1);
  }

  // Get all the other Mondays in the month
  while (d.getMonth() === month) {
    tuesdays.push(new Date(d.getTime()));
    d.setDate(d.getDate() + 7);
  }
  return tuesdays;
}

function getWednesdays(startDate) {
  var d = new Date(startDate),
    month = d.getMonth(),
    wednesdays = [];

  d.setDate(1);

  // Get the first Monday in the month
  while (d.getDay() !== 3) {
    d.setDate(d.getDate() + 1);
  }

  // Get all the other Mondays in the month
  while (d.getMonth() === month) {
    wednesdays.push(new Date(d.getTime()));
    d.setDate(d.getDate() + 7);
  }
  return wednesdays;
}

function getThursdays(startDate) {
  var d = new Date(startDate),
    month = d.getMonth(),
    thursdays = [];

  d.setDate(1);

  // Get the first Monday in the month
  while (d.getDay() !== 4) {
    d.setDate(d.getDate() + 1);
  }

  // Get all the other Mondays in the month
  while (d.getMonth() === month) {
    thursdays.push(new Date(d.getTime()));
    d.setDate(d.getDate() + 7);
  }
  return thursdays;
}

function getFridays(startDate) {
  var d = new Date(startDate),
    month = d.getMonth(),
    fridays = [];

  d.setDate(1);

  // Get the first Monday in the month
  while (d.getDay() !== 5) {
    d.setDate(d.getDate() + 1);
  }

  // Get all the other Mondays in the month
  while (d.getMonth() === month) {
    fridays.push(new Date(d.getTime()));
    d.setDate(d.getDate() + 7);
  }
  return fridays;
}

function getSaturdays(startDate) {
  var d = new Date(startDate),
    month = d.getMonth(),
    saturdays = [];

  d.setDate(1);

  // Get the first Monday in the month
  while (d.getDay() !== 6) {
    d.setDate(d.getDate() + 1);
  }

  // Get all the other Mondays in the month
  while (d.getMonth() === month) {
    saturdays.push(new Date(d.getTime()));
    d.setDate(d.getDate() + 7);
  }
  return saturdays;
}

function getSundays(startDate) {
  var d = new Date(startDate),
    month = d.getMonth(),
    sundays = [];

  d.setDate(1);

  // Get the first Monday in the month
  while (d.getDay() !== 0) {
    d.setDate(d.getDate() + 1);
  }

  // Get all the other Mondays in the month
  while (d.getMonth() === month) {
    sundays.push(new Date(d.getTime()));
    d.setDate(d.getDate() + 7);
  }
  return sundays;
}


function getStartDateChoose(startDate, dayNameVal, setPosVal) {
  var result;
  if (dayNameVal == 1) {
    // monday
    // first
    result = getMondays(startDate);
    if (setPosVal == 1) {
      if (result[0] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getMondays(startDate);
        return result[0];
      } else {
        return result[0];
      }
    }
    // second
    if (setPosVal == 2) {
      if (result[1] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getMondays(startDate);
        return result[1];
      } else {
        return result[1];
      }
    }
    // third
    if (setPosVal == 3) {
      if (result[2] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getMondays(startDate);
        return result[2];
      } else {
        return result[2];
      }
    }
    // fourth
    if (setPosVal == 4) {
      if (result[3] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getMondays(startDate);
        return result[3];
      } else {
        return result[3];
      }
    }
    // last
    if (setPosVal == 5) {
      if (result[4]) {
        if (result[4] < startDate) {
          startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
          result = getMondays(startDate);
          return result[4];
        } else {
          return result[4];
        }
      } else {
        if (result[3] < startDate) {
          startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
          result = getMondays(startDate);
          return result[3];
        } else {
          return result[3];
        }
      }
    }
  }
  if (dayNameVal == 2) {
    // tueday
    // first
    result = getTuesdays(startDate);
    if (setPosVal == 1) {
      if (result[0] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getTuesdays(startDate);
        return result[0];
      } else {
        return result[0];
      }
    }
    // second
    if (setPosVal == 2) {
      if (result[1] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getTuesdays(startDate);
        return result[1];
      } else {
        return result[1];
      }
    }
    // third
    if (setPosVal == 3) {
      if (result[2] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getTuesdays(startDate);
        return result[2];
      } else {
        return result[2];
      }
    }
    // fourth
    if (setPosVal == 4) {
      if (result[3] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getTuesdays(startDate);
        return result[3];
      } else {
        return result[3];
      }
    }
    // last
    if (setPosVal == 5) {
      if (result[4]) {
        if (result[4] < startDate) {
          startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
          result = getTuesdays(startDate);
          return result[4];
        } else {
          return result[4];
        }
      } else {
        if (result[3] < startDate) {
          startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
          result = getTuesdays(startDate);
          return result[3];
        } else {
          return result[3];
        }
      }
    }
  }
  if (dayNameVal == 3) {
    // wednesday
    // first
    result = getWednesdays(startDate);
    if (setPosVal == 1) {
      if (result[0] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getWednesdays(startDate);
        return result[0];
      } else {
        return result[0];
      }
    }
    // second
    if (setPosVal == 2) {
      if (result[1] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getWednesdays(startDate);
        return result[1];
      } else {
        return result[1];
      }
    }
    // third
    if (setPosVal == 3) {
      if (result[2] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getWednesdays(startDate);
        return result[2];
      } else {
        return result[2];
      }
    }
    // fourth
    if (setPosVal == 4) {
      if (result[3] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getWednesdays(startDate);
        return result[3];
      } else {
        return result[3];
      }
    }
    // last
    if (setPosVal == 5) {
      if (result[4]) {
        if (result[4] < startDate) {
          startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
          result = getWednesdays(startDate);
          return result[4];
        } else {
          return result[4];
        }
      } else {
        if (result[3] < startDate) {
          startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
          result = getWednesdays(startDate);
          return result[3];
        } else {
          return result[3];
        }
      }
    }
  }
  if (dayNameVal == 4) {
    // tueday
    // first
    result = getThursdays(startDate);
    if (setPosVal == 1) {
      if (result[0] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getThursdays(startDate);
        return result[0];
      } else {
        return result[0];
      }
    }
    // second
    if (setPosVal == 2) {
      if (result[1] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getThursdays(startDate);
        return result[1];
      } else {
        return result[1];
      }
    }
    // third
    if (setPosVal == 3) {
      if (result[2] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getThursdays(startDate);
        return result[2];
      } else {
        return result[2];
      }
    }
    // fourth
    if (setPosVal == 4) {
      if (result[3] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getThursdays(startDate);
        return result[3];
      } else {
        return result[3];
      }
    }
    // last
    if (setPosVal == 5) {
      if (result[4]) {
        if (result[4] < startDate) {
          startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
          result = getThursdays(startDate);
          return result[4];
        } else {
          return result[4];
        }
      } else {
        if (result[3] < startDate) {
          startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
          result = getThursdays(startDate);
          return result[3];
        } else {
          return result[3];
        }
      }
    }
  }
  if (dayNameVal == 5) {
    // tueday
    // first
    result = getFridays(startDate);
    if (setPosVal == 1) {
      if (result[0] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getFridays(startDate);
        return result[0];
      } else {
        return result[0];
      }
    }
    // second
    if (setPosVal == 2) {
      if (result[1] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getFridays(startDate);
        return result[1];
      } else {
        return result[1];
      }
    }
    // third
    if (setPosVal == 3) {
      if (result[2] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getFridays(startDate);
        return result[2];
      } else {
        return result[2];
      }
    }
    // fourth
    if (setPosVal == 4) {
      if (result[3] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getFridays(startDate);
        return result[3];
      } else {
        return result[3];
      }
    }
    // last
    if (setPosVal == 5) {
      if (result[4]) {
        if (result[4] < startDate) {
          startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
          result = getFridays(startDate);
          return result[4];
        } else {
          return result[4];
        }
      } else {
        if (result[3] < startDate) {
          startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
          result = getFridays(startDate);
          return result[3];
        } else {
          return result[3];
        }
      }
    }
  }
  if (dayNameVal == 6) {
    // tueday
    // first
    result = getSaturdays(startDate);
    if (setPosVal == 1) {
      if (result[0] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getSaturdays(startDate);
        return result[0];
      } else {
        return result[0];
      }
    }
    // second
    if (setPosVal == 2) {
      if (result[1] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getSaturdays(startDate);
        return result[1];
      } else {
        return result[1];
      }
    }
    // third
    if (setPosVal == 3) {
      if (result[2] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getSaturdays(startDate);
        return result[2];
      } else {
        return result[2];
      }
    }
    // fourth
    if (setPosVal == 4) {
      if (result[3] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getSaturdays(startDate);
        return result[3];
      } else {
        return result[3];
      }
    }
    // last
    if (setPosVal == 5) {
      if (result[4]) {
        if (result[4] < startDate) {
          startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
          result = getSaturdays(startDate);
          return result[4];
        } else {
          return result[4];
        }
      } else {
        if (result[3] < startDate) {
          startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
          result = getSaturdays(startDate);
          return result[3];
        } else {
          return result[3];
        }
      }
    }
  }
  if (dayNameVal == 0) {
    // tueday
    // first
    result = getSundays(startDate);
    if (setPosVal == 1) {
      if (result[0] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getSundays(startDate);
        return result[0];
      } else {
        return result[0];
      }
    }
    // second
    if (setPosVal == 2) {
      if (result[1] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getSundays(startDate);
        return result[1];
      } else {
        return result[1];
      }
    }
    // third
    if (setPosVal == 3) {
      if (result[2] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getSundays(startDate);
        return result[2];
      } else {
        return result[2];
      }
    }
    // fourth
    if (setPosVal == 4) {
      if (result[3] < startDate) {
        startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        result = getSundays(startDate);
        return result[3];
      } else {
        return result[3];
      }
    }
    // last
    if (setPosVal == 5) {
      if (result[4]) {
        if (result[4] < startDate) {
          startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
          result = getSundays(startDate);
          return result[4];
        } else {
          return result[4];
        }
      } else {
        if (result[3] < startDate) {
          startDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
          result = getSundays(startDate);
          return result[3];
        } else {
          return result[3];
        }
      }
    }
  }
}

function getNewStartDate2(startDateTemp, monthName, dayNameVal, setPosVal) {
  var startDate = new Date(startDateTemp);
  startDate.setMonth(monthName);
  startDate.setFullYear(startDateTemp.getFullYear());
  startDate.setDate(1);
  var dateAlphaTemp = getStartDateChoose(startDate, dayNameVal, setPosVal);
  if (dateAlphaTemp < startDateTemp) {
    startDate.setFullYear(startDate.getFullYear() + 1);
    dateAlphaTemp = getStartDateChoose(startDate, dayNameVal, setPosVal);
    return dateAlphaTemp;
  } else {
    return dateAlphaTemp;
  }
}

function getNewEndDate2(endDateTemp, monthName, dayNameVal, setPosVal) {
  var endDate = new Date(endDateTemp);
  endDate.setMonth(monthName);
  endDate.setFullYear(endDateTemp.getFullYear());
  endDate.setDate(1);
  var dateOmegaTemp = getStartDateChoose(endDate, dayNameVal, setPosVal);
  if (dateOmegaTemp > endDateTemp) {
    endDate.setFullYear(endDate.getFullYear() - 1);
    dateOmegaTemp = getStartDateChoose(endDate, dayNameVal, setPosVal);
    return dateOmegaTemp;
  }
  return dateOmegaTemp;
}

function getCount(d1, d2) {
  var start = new Date(d1);
  var end = new Date(d2);
  var count = 0;
  if (start < end) {
    while (start < end) {
      start.setFullYear(start.getFullYear() + 1);
      count++;
    }
  } else {
    count = 1;
  }
  return count;
}


function getMessageByYearlyTo() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();

  var to = getTo();
  var toEmail = getEmail();
	var resources = getResources();

  var x = document.getElementById("weekYearly");
  var setPosTemp = x.options[x.selectedIndex].value;
  var y = document.getElementById("weekDayYearly");
  var dayNameTemp = y.options[y.selectedIndex].value;
  var monthNameTemp = document.forms["newics"]["monthNameYearly2"].value;

  var startDateTemp = new Date($('#dateAlphaYearly').val()); // start date input by user
  var endDateTemp = new Date($('#dateOmegaYearly').val()); // end date input by user

  var setPos = getSetPos2(setPosTemp);
  var setPosVal = getSetPosVal2(setPos);
  var dayName = getDayName2(dayNameTemp);
  var dayNameVal = getDayNameVal2(dayName);
  var monthName = getMonthVal(monthNameTemp);

  var startDate = getNewStartDate2(startDateTemp, monthName, dayNameVal, setPosVal);
  var endDate = getNewEndDate2(endDateTemp, monthName, dayNameVal, setPosVal);

  var startDateFormat = formatDate(startDate);
  var startDateToString = startDateFormat.toString();

  var dateAlpha = startDateToString.replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaYearly').val().replace(/\D/g, '') + "00";
  var dateOmega = startDateToString.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaYearly').val().replace(/\D/g, '') + "00";

  var countTemp = getCount(startDate, endDate);
  var interval = parseInt(document.getElementById('numYears').value, 10);
  var month = monthName + 1;
  var count;
  if (interval == 1) {
    count = countTemp;
    return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega +  "\nGEO:" + geo + "\nLOCATION:" + location +  "\nRRULE:FREQ=YEARLY;COUNT=" + count + ";BYDAY=" + dayName + ";BYMONTH=" + month + ";BYSETPOS=" + setPosVal + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];

  } else {
    count = Math.ceil(countTemp / interval);
    return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nGEO:" + geo + "\nLOCATION:" + location +  "\nRRULE:FREQ=YEARLY;COUNT=" + count + ";INTERVAL=" + interval + ";BYDAY=" + dayName + ";BYMONTH=" + month + ";BYSETPOS=" + setPosVal + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  }
}

function getMessageAfterYearlyTo() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();

  var to = getTo();
  var toEmail = getEmail();
	var resources = getResources();

  var x = document.getElementById("weekYearly");
  var setPosTemp = x.options[x.selectedIndex].value;
  var y = document.getElementById("weekDayYearly");
  var dayNameTemp = y.options[y.selectedIndex].value;
  var monthNameTemp = document.forms["newics"]["monthNameYearly2"].value;

  var startDateTemp = new Date($('#dateAlphaYearly').val()); // start date input by user

  var setPos = getSetPos2(setPosTemp);
  var setPosVal = getSetPosVal2(setPos);
  var dayName = getDayName2(dayNameTemp);
  var dayNameVal = getDayNameVal2(dayName);
  var monthName = getMonthVal(monthNameTemp);

  var startDate = getNewStartDate2(startDateTemp, monthName, dayNameVal, setPosVal);

  var startDateFormat = formatDate(startDate);
  var startDateToString = startDateFormat.toString();

  var dateAlpha = startDateToString.replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaYearly').val().replace(/\D/g, '') + "00";
  var dateOmega = startDateToString.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaYearly').val().replace(/\D/g, '') + "00";

  var interval = parseInt(document.getElementById('numYears').value, 10);
  var countTemp = parseInt(document.getElementById('yearlyCount').value, 10);
  var count;
  var month = monthName + 1;

  if (interval == 1) {
    count = countTemp;
    return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega +  "\nGEO:" + geo + "\nLOCATION:" + location + "\nRRULE:FREQ=YEARLY;COUNT=" + count + ";BYDAY=" + dayName + ";BYMONTH=" + month + ";BYSETPOS=" + setPosVal + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];

  } else {
    count = Math.ceil(countTemp / interval);
    return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega +  "\nGEO:" + geo + "\nLOCATION:" + location + "\nRRULE:FREQ=YEARLY;COUNT=" + count + ";INTERVAL=" + interval + ";BYDAY=" + dayName + ";BYMONTH=" + month + ";BYSETPOS=" + setPosVal + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  }
}

function getMessageNoEndYearlyTo() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();

  var to = getTo();
  var toEmail = getEmail();
	var resources = getResources();

  var x = document.getElementById("weekYearly");
  var setPosTemp = x.options[x.selectedIndex].value;
  var y = document.getElementById("weekDayYearly");
  var dayNameTemp = y.options[y.selectedIndex].value;
  var monthNameTemp = document.forms["newics"]["monthNameYearly2"].value;

  var startDateTemp = new Date($('#dateAlphaYearly').val()); // start date input by user

  var setPos = getSetPos2(setPosTemp);
  var setPosVal = getSetPosVal2(setPos);
  var dayName = getDayName2(dayNameTemp);
  var dayNameVal = getDayNameVal2(dayName);
  var monthName = getMonthVal(monthNameTemp);

  var startDate = getNewStartDate2(startDateTemp, monthName, dayNameVal, setPosVal);

  var startDateFormat = formatDate(startDate);
  var startDateToString = startDateFormat.toString();

  var dateAlpha = startDateToString.replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaYearly').val().replace(/\D/g, '') + "00";
  var dateOmega = startDateToString.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaYearly').val().replace(/\D/g, '') + "00";

  var interval = parseInt(document.getElementById('numYears').value, 10);
  var month = monthName + 1;

  if (interval == 1) {
    return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega +  "\nGEO:" + geo + "\nLOCATION:" + location +  "\nRRULE:FREQ=YEARLY;BYDAY=" + dayName + ";BYMONTH=" + month + ";BYSETPOS=" + setPosVal + "\nPRIORITY:5\n" + to + toEmail+ "\n" + resources +  "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];

  } else {
    return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega +  "\nGEO:" + geo + "\nLOCATION:" + location + "\nRRULE:FREQ=YEARLY;INTERVAL=" + interval + ";BYDAY=" + dayName + ";BYMONTH=" + month + ";BYSETPOS=" + setPosVal + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  }
}
