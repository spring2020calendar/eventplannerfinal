// JavaScript Document
$.validator.addMethod("timeTestMonthly", function (value, element) {
  var startDate = $('input[name=dateAlphaMonthly]').val();
  var endDate = $('input[name=dateOmegaMonthly]').val();
  var startTime = $('input[name=timeAlphaMonthly]').val();
  var endTime = $('input[name=timeOmegaMonthly]').val();
	if (startDate == null) {
		return true;
	} if (endDate == null) {
		return true;
	} else if (startTime < endTime) {
		return true;
	} else if (startTime == endTime) {
		return false;
	} else if (startTime > endTime) {
		return false;
	}
});

$.validator.addMethod("monthlyDateOmega", function (value, element) {
  var startDate = $('input[name=dateAlphaMonthly]').val();
  var endDate = $('input[name=dateOmegaMonthly]').val();
  var startTime = $('input[name=timeAlphaMonthly]').val();
  var endTime = $('input[name=timeOmegaMonthly]').val();
	
	// start date is greater than end date
	// start date is less than end date
});

$.validator.addMethod("monthlyTimeAlpha", function (value, element) {
  var startDate = $('input[name=dateAlphaMonthly]').val();
  var endDate = $('input[name=dateOmegaMonthly]').val();
  var startTime = $('input[name=timeAlphaMonthly]').val();
  var endTime = $('input[name=timeOmegaMonthly]').val();
	
	// start time is greater than end time
	// start time is less than end time
});

$.validator.addMethod("monthlyTimeOmega", function (value, element) {
  var startDate = $('input[name=dateAlphaMonthly]').val();
  var endDate = $('input[name=dateOmegaMonthly]').val();
  var startTime = $('input[name=timeAlphaMonthly]').val();
  var endTime = $('input[name=timeOmegaMonthly]').val();
	
	// start time is greater than end time
	// start time is less than end time
});

$.validator.addMethod("monthlyCheck", function (value, element) {
  var startDate = new Date($('#dateAlphaMonthly').val());
  var endDate = new Date($('#dateOmegaMonthly').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  var difference = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);

  if ($('input[name=recurrMonthly]:checked').val() == 'chooseDayMonthly') {
    if (difference >= 28) {
      return true;
    } else {
      return false;
    }
  }
});

$.validator.addMethod("selectionMade", function (value, element, arg) {
  if ($('input[name=recurrMonthly]:checked').val() == 'chooseToMonthly') {
    return true;
  } else if ($('input[name=recurrMonthly]:checked').val() == 'toEveryMonth') {
    return true;
  } else if ($('input[name=endMonthly]:checked').val() == 'byMonthly') {
    return true;
  } else {
    return false;
  }
});

$.validator.addMethod("emptySelectMonthMonthly", function (value, element, arg) {
  if ($('input[name=recurrMonthly]:checked').val() == 'chooseToMonthly') {
    if (document.getElementById('monthMonthly').value == "-1") {
      return false;
    } else {
      return true;
    }
  }
});

$.validator.addMethod("emptySelectWeekDayMonthly", function (value, element, arg) {
  if ($('input[name=recurrMonthly]:checked').val() == 'chooseToMonthly') {
    if (document.getElementById('weekDayMonthly').value == "-1") {
      return false;
    } else {
      return true;
    }
  }
});

$.validator.addMethod("integerCheckEveryMonth", function (value, element) {
  var x = document.forms["newics"]["toEveryMonth"].value;
  var num = document.getElementById('toEveryMonth');
  if (isNaN(x)) {
    return false;
  } else if (num.value > 0) {
    return true;
  }
});

$.validator.addMethod("integerCheckMonthlyCount", function (value, element) {
  var x = document.forms["newics"]["monthlyCount"].value;
  var num = document.getElementById('monthlyCount');
  if (isNaN(x)) {
    return false;
  } else if (num.value > 0) {
    return true;
  }
});

$.validator.addMethod("integerCheckDayMonthlyCount", function (value, element) {
  var x = document.forms["newics"]["dayMonthly"].value;
  var num = document.getElementById('dayMonthly');
  if (isNaN(x)) {
    return false;
  } else if (num.value > 0) {
    return true;
  }
});

$.validator.addMethod("integerCheckGreaterThan31", function (value, element) {
  var num = document.getElementById('dayMonthly');
  if (num.value <= 31) {
    return true;
  }
});

$.validator.addMethod("integerCheckEveryMonthCount", function (value, element) {
  var x = document.forms["newics"]["everyMonth"].value;
  var num = document.getElementById('everyMonth');
  if (isNaN(x)) {
    return false;
  } else if (num.value > 0) {
    return true;
  }
});

function postConfirm() {
  if (confirm("Some months have 28 days, for these months, your occurence will fall on the last day of the month")) {
    return true;
  }
}

function check() {
  var num = document.forms["newics"]["dayMonthly"].value;
  if (num == null) {
    return true;
  } else if (num > 28) {
    var result = postConfirm();
    if (result) {
      return true;
    } else {
      return false;
    }
  }
}

function yearsDiff(d1, d2) {
  var date1 = new Date(d1);
  var date2 = new Date(d2);
  var yearsDiff = date2.getFullYear() - date1.getFullYear();
  return yearsDiff;
}

function monthsDiff(d1, d2, year) {
  var date1 = new Date(d1);
  var date2 = new Date(d2);
  var years = yearsDiff(d1, d2);
  var months = (years * 12) + (date2.getMonth() - date1.getMonth());
  return months;
}

function getStartDate(startDate) {
  var newDate = new Date(startDate);
  var num = $('input[name=dayMonthly]').val();
  newDate.setDate(num);
  return newDate;
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

function getMessageByMonthlyDay() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();

  var to = getTo();
  var toEmail = getEmail();
	var resources = getResources();

  var startDate = new Date($('#dateAlphaMonthly').val());
  var endDate = new Date($('#dateOmegaMonthly').val());
  var year = yearsDiff(startDate, endDate);
  var count = monthsDiff(startDate, endDate, year);

  var tempDate = getStartDate(startDate);
  var tempDateAlpha = formatDate(tempDate);
  var tempDateAlpha2 = tempDateAlpha.toString();
  var dateAlpha = tempDateAlpha2.replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaMonthly').val().replace(/\D/g, '') + "00";
  var dateOmega = tempDateAlpha2.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaMonthly').val().replace(/\D/g, '') + "00";

  var dayOfMonth = $('input[name=dayMonthly]').val();

	var num = document.forms["newics"]["dayMonthly"].value;
	
  return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega +  "\nGEO:" + geo + "\nLOCATION:" + location +  "\nRRULE:FREQ=MONTHLY;COUNT=" + count + ";BYMONTHDAY=" + dayOfMonth + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources +  "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR" + "\n\nnum: " + num + "\nreturn check():" + check()];
}

function getMessageAfterMonthlyDay() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();

  var to = getTo();
  var toEmail = getEmail();
	var resources = getResources();

  var startDate = new Date($('#dateAlphaMonthly').val());
  var count = $('input[name=dayMonthly]').val();

  var tempDate = getStartDate(startDate);
  var tempDateAlpha = formatDate(tempDate);
  var tempDateAlpha2 = tempDateAlpha.toString();
  var dateAlpha = tempDateAlpha2.replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaMonthly').val().replace(/\D/g, '') + "00";
  var dateOmega = tempDateAlpha2.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaMonthly').val().replace(/\D/g, '') + "00";

  var dayOfMonth = $('input[name=dayMonthly]').val();
	if (dayOfMonth != '') {
		check();
	}

  return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nLOCATION:" + location + "\nRRULE:FREQ=MONTHLY;COUNT=" + count + ";BYMONTHDAY=" + dayOfMonth + "\nPRIORITY:5\n" + to + toEmail+ "\n" + resources + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
}

function getMessageNoEndMonthlyDay() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();

  var to = getTo();
  var toEmail = getEmail();
	var resources = getResources();

  var startDate = new Date($('#dateAlphaMonthly').val());

  var tempDate = getStartDate(startDate);
  var tempDateAlpha = formatDate(tempDate);
  var tempDateAlpha2 = tempDateAlpha.toString();
  var dateAlpha = tempDateAlpha2.replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaMonthly').val().replace(/\D/g, '') + "00";
  var dateOmega = tempDateAlpha2.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaMonthly').val().replace(/\D/g, '') + "00";

  var dayOfMonth = $('input[name=dayMonthly]').val();

  return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega +  "\nGEO:" + geo + "\nLOCATION:" + location +  "\nRRULE:FREQ=MONTHLY;BYMONTHDAY=" + dayOfMonth + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources +  "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
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
  if (dayNameVal == 1) {
    // monday
    // first
    result = getMondays(startDate);
    if (setPosVal == 1) {
      if (result[0] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getMondays(startDate);
        return result[0];
      } else {
        return result[0];
      }
    }
    // second
    if (setPosVal == 2) {
      if (result[1] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getMondays(startDate);
        return result[1];
      } else {
        return result[1];
      }
    }
    // third
    if (setPosVal == 3) {
      if (result[2] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getMondays(startDate);
        return result[2];
      } else {
        return result[2];
      }
    }
    // fourth
    if (setPosVal == 4) {
      if (result[3] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
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
          startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
          result = getMondays(startDate);
          return result[4];
        } else {
          return result[4];
        }
      } else {
        if (result[3] < startDate) {
          startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
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
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getTuesdays(startDate);
        return result[0];
      } else {
        return result[0];
      }
    }
    // second
    if (setPosVal == 2) {
      if (result[1] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getTuesdays(startDate);
        return result[1];
      } else {
        return result[1];
      }
    }
    // third
    if (setPosVal == 3) {
      if (result[2] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getTuesdays(startDate);
        return result[2];
      } else {
        return result[2];
      }
    }
    // fourth
    if (setPosVal == 4) {
      if (result[3] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
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
          startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
          result = getTuesdays(startDate);
          return result[4];
        } else {
          return result[4];
        }
      } else {
        if (result[3] < startDate) {
          startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
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
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getWednesdays(startDate);
        return result[0];
      } else {
        return result[0];
      }
    }
    // second
    if (setPosVal == 2) {
      if (result[1] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getWednesdays(startDate);
        return result[1];
      } else {
        return result[1];
      }
    }
    // third
    if (setPosVal == 3) {
      if (result[2] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getWednesdays(startDate);
        return result[2];
      } else {
        return result[2];
      }
    }
    // fourth
    if (setPosVal == 4) {
      if (result[3] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
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
          startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
          result = getWednesdays(startDate);
          return result[4];
        } else {
          return result[4];
        }
      } else {
        if (result[3] < startDate) {
          startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
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
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getThursdays(startDate);
        return result[0];
      } else {
        return result[0];
      }
    }
    // second
    if (setPosVal == 2) {
      if (result[1] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getThursdays(startDate);
        return result[1];
      } else {
        return result[1];
      }
    }
    // third
    if (setPosVal == 3) {
      if (result[2] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getThursdays(startDate);
        return result[2];
      } else {
        return result[2];
      }
    }
    // fourth
    if (setPosVal == 4) {
      if (result[3] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
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
          startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
          result = getThursdays(startDate);
          return result[4];
        } else {
          return result[4];
        }
      } else {
        if (result[3] < startDate) {
          startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
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
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getFridays(startDate);
        return result[0];
      } else {
        return result[0];
      }
    }
    // second
    if (setPosVal == 2) {
      if (result[1] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getFridays(startDate);
        return result[1];
      } else {
        return result[1];
      }
    }
    // third
    if (setPosVal == 3) {
      if (result[2] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getFridays(startDate);
        return result[2];
      } else {
        return result[2];
      }
    }
    // fourth
    if (setPosVal == 4) {
      if (result[3] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
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
          startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
          result = getFridays(startDate);
          return result[4];
        } else {
          return result[4];
        }
      } else {
        if (result[3] < startDate) {
          startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
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
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getSaturdays(startDate);
        return result[0];
      } else {
        return result[0];
      }
    }
    // second
    if (setPosVal == 2) {
      if (result[1] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getSaturdays(startDate);
        return result[1];
      } else {
        return result[1];
      }
    }
    // third
    if (setPosVal == 3) {
      if (result[2] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getSaturdays(startDate);
        return result[2];
      } else {
        return result[2];
      }
    }
    // fourth
    if (setPosVal == 4) {
      if (result[3] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
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
          startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
          result = getSaturdays(startDate);
          return result[4];
        } else {
          return result[4];
        }
      } else {
        if (result[3] < startDate) {
          startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
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
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getSundays(startDate);
        return result[0];
      } else {
        return result[0];
      }
    }
    // second
    if (setPosVal == 2) {
      if (result[1] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getSundays(startDate);
        return result[1];
      } else {
        return result[1];
      }
    }
    // third
    if (setPosVal == 3) {
      if (result[2] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        result = getSundays(startDate);
        return result[2];
      } else {
        return result[2];
      }
    }
    // fourth
    if (setPosVal == 4) {
      if (result[3] < startDate) {
        startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
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
          startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
          result = getSundays(startDate);
          return result[4];
        } else {
          return result[4];
        }
      } else {
        if (result[3] < startDate) {
          startDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
          result = getSundays(startDate);
          return result[3];
        } else {
          return result[3];
        }
      }
    }
  }
}

function getSetPos(pos) {
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

function getSetPosVal(pos) {
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

function getDayName(dayName) {
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

$.validator.addMethod("monthlyCheckChoose", function (value, element) {
  var x = document.getElementById("monthMonthly");
  var setPosTemp = x.options[x.selectedIndex].value;
  var y = document.getElementById("weekDayMonthly");
  var dayNameTemp = y.options[y.selectedIndex].value;
  var startDateTemp = new Date($('#dateAlphaMonthly').val());
  var startDate = new Date(startDateTemp.getTime() + startDateTemp.getTimezoneOffset() * 60000);
  var endDateTemp = new Date($('#dateOmegaMonthly').val());
  var dateOmega = new Date(endDateTemp.getTime() + endDateTemp.getTimezoneOffset() * 60000);

  var dayName = getDayName(dayNameTemp);
  var dayNameVal = getDayNameVal(dayName);
  var setPos = getSetPos(setPosTemp);
  var setPosVal = getSetPosVal(setPos);

  var dateAlpha = getStartDateChoose(startDate, dayNameVal, setPosVal);
  if (dateAlpha > dateOmega) {
    return false;
  } else {
    return true;
  }
});

function getMessageByMonthlyTo() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();

  var to = getTo();
  var toEmail = getEmail();
	var resources = getResources();

  var x = document.getElementById("monthMonthly");
  var setPosTemp = x.options[x.selectedIndex].value;
  var y = document.getElementById("weekDayMonthly");
  var dayNameTemp = y.options[y.selectedIndex].value;

  var startDateTemp = new Date($('#dateAlphaMonthly').val());
  var startDate = new Date(startDateTemp.getTime() + startDateTemp.getTimezoneOffset() * 60000);
  var endDateTemp = new Date($('#dateOmegaMonthly').val());
  var endDate = new Date(endDateTemp.getTime() + endDateTemp.getTimezoneOffset() * 60000);

  var year = yearsDiff(startDate, endDate);
  var countTemp = monthsDiff(startDate, endDate, year);
  var countTempInt = parseInt(countTemp);

  var dayName = getDayName(dayNameTemp);
  var dayNameVal = getDayNameVal(dayName);
  var setPos = getSetPos(setPosTemp);
  var setPosVal = getSetPosVal(setPos);

  var dateAlphaTemp = getStartDateChoose(startDate, dayNameVal, setPosVal);
  var dateAlphaFormat = formatDate(dateAlphaTemp);
  var dateAlphaString = dateAlphaFormat.toString();
  var dateAlpha = dateAlphaString.replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaMonthly').val().replace(/\D/g, '') + "00";

  var dateOmega = dateAlphaString.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaMonthly').val().replace(/\D/g, '') + "00";

  var interval = parseInt(document.getElementById('toEveryMonth').value, 10);

  if (interval == 1) {
    var count = countTempInt;
    return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega +  "\nGEO:" + geo + "\nLOCATION:" + location + "\nRRULE:FREQ=MONTHLY;COUNT=" + count + ";BYDAY=" + dayName + ";BYSETPOS=" + setPos + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources +  "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  } else {
    var count = Math.ceil(countTempInt / interval);
    return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega +  "\nGEO:" + geo + "\nLOCATION:" + location +  "\nRRULE:FREQ=MONTHLY;COUNT=" + count + ";INTERVAL=" + interval + ";BYDAY=" + dayName + ";BYSETPOS=" + setPos + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources +  "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  }
}

function getMessageAfterMonthlyTo() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();

  var to = getTo();
  var toEmail = getEmail();
	var resources = getResources();

  var x = document.getElementById("monthMonthly");
  var setPosTemp = x.options[x.selectedIndex].value;
  var y = document.getElementById("weekDayMonthly");
  var dayNameTemp = y.options[y.selectedIndex].value;

  var startDateTemp = new Date($('#dateAlphaMonthly').val());
  var startDate = new Date(startDateTemp.getTime() + startDateTemp.getTimezoneOffset() * 60000);
  var endDateTemp = new Date($('#dateOmegaMonthly').val());
  var endDate = new Date(endDateTemp.getTime() + endDateTemp.getTimezoneOffset() * 60000);

  var dayName = getDayName(dayNameTemp);
  var dayNameVal = getDayNameVal(dayName);
  var setPos = getSetPos(setPosTemp);
  var setPosVal = getSetPosVal(setPos);

  var dateAlphaTemp = getStartDateChoose(startDate, dayNameVal, setPosVal);
  var dateAlphaFormat = formatDate(dateAlphaTemp);
  var dateAlphaString = dateAlphaFormat.toString();
  var dateAlpha = dateAlphaString.replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaMonthly').val().replace(/\D/g, '') + "00";

  var dateOmega = dateAlphaString.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaMonthly').val().replace(/\D/g, '') + "00";

  var interval = parseInt(document.getElementById('toEveryMonth').value, 10);
  var count = parseInt(document.getElementById('monthlyCount').value, 10);

  if (interval == 1) {
    return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega +  "\nGEO:" + geo + "\nLOCATION:" + location + "\nRRULE:FREQ=MONTHLY;COUNT=" + count + ";BYDAY=" + dayName + ";BYSETPOS=" + setPos + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources +  "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  } else {
    return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega +  "\nGEO:" + geo + "\nLOCATION:" + location + "\nRRULE:FREQ=MONTHLY;COUNT=" + count + ";INTERVAL=" + interval + ";BYDAY=" + dayName + ";BYSETPOS=" + setPos + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources +  "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  }
}

function getMessageNoEndMonthlyTo() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();

  var to = getTo();
  var toEmail = getEmail();
	var resources = getResources();

  var x = document.getElementById("monthMonthly");
  var setPosTemp = x.options[x.selectedIndex].value;
  var y = document.getElementById("weekDayMonthly");
  var dayNameTemp = y.options[y.selectedIndex].value;

  var startDateTemp = new Date($('#dateAlphaMonthly').val());
  var startDate = new Date(startDateTemp.getTime() + startDateTemp.getTimezoneOffset() * 60000);
  var endDateTemp = new Date($('#dateOmegaMonthly').val());
  var endDate = new Date(endDateTemp.getTime() + endDateTemp.getTimezoneOffset() * 60000);

  var dayName = getDayName(dayNameTemp);
  var dayNameVal = getDayNameVal(dayName);
  var setPos = getSetPos(setPosTemp);
  var setPosVal = getSetPosVal(setPos);

  var dateAlphaTemp = getStartDateChoose(startDate, dayNameVal, setPosVal);
  var dateAlphaFormat = formatDate(dateAlphaTemp);
  var dateAlphaString = dateAlphaFormat.toString();
  var dateAlpha = dateAlphaString.replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaMonthly').val().replace(/\D/g, '') + "00";

  var dateOmega = dateAlphaString.replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaMonthly').val().replace(/\D/g, '') + "00";

  var interval = parseInt(document.getElementById('toEveryMonth').value, 10);

  if (interval == 1) {
    return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega +  "\nGEO:" + geo + "\nLOCATION:" + location +  "\nRRULE:FREQ=MONTHLY;BYDAY=" + dayName + ";BYSETPOS=" + setPos + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources +  "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  } else {
    return ["\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega +  "\nGEO:" + geo + "\nLOCATION:" + location +  "\nRRULE:FREQ=MONTHLY;INTERVAL=" + interval + ";BYDAY=" + dayName + ";BYSETPOS=" + setPos + "\nPRIORITY:5\n" + to + toEmail + "\n" + resources +  "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  }
}
