// JavaScript Document
function encode(address) {
  var ns = address;
  // Just remove commas and periods - regex can do any chars
  ns = ns.replace(/(["ʻ"])+/g, "'");
  ns = ns.replace(/(["ā"])+/g, 'a');
  $('.location').text(ns)
  return ns;

}

// start date cannot occur in past
$.validator.addMethod("currentAlpha", function (value, element) {
  var curDate = new Date();
  var startDate;
  if ($('input[name=recurrence]:checked').val() == 'none') {
    startDate = new Date($('#dateAlpha').val());
    startDate = new Date($('#dateAlpha').val());
    if (startDate < curDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'daily') {
    startDate = new Date($('#dateAlphaDaily').val());
    if (startDate < curDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'weekly') {
    startDate = new Date($('#dateAlphaWeekly').val());
    if (startDate < curDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'monthly') {
    startDate = new Date($('#dateAlphaMonthly').val());
    if (startDate < curDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'yearly') {
    startDate = new Date($('#dateAlphaYearly').val());
    if (startDate < curDate) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
});

// end date cannot occur in past
$.validator.addMethod("currentOmega", function (value, element) {
  var curDate = new Date();
  var endDate;
  if ($('input[name=recurrence]:checked').val() == 'none') {
    endDate = new Date($('#dateOmega').val());
    if (endDate < curDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'daily') {
    endDate = new Date($('#dateOmegaDaily').val());
    if (endDate < curDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'weekly') {
    endDate = new Date($('#dateOmegaWeekly').val());
    if (endDate < curDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'monthly') {
    endDate = new Date($('#dateOmegaMonthly').val());
    if (endDate < curDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'yearly') {
    endDate = new Date($('#dateOmegaYearly').val());
    if (endDate < curDate) {
      return false;
    } else {
      return true;
    }
  }
});

// start date cannot occur after end date
$.validator.addMethod("minAlpha", function (value, element) {
  var startDate;
  var endDate;
  if ($('input[name=recurrence]:checked').val() == 'none') {
    startDate = new Date($('#dateAlpha').val());
    endDate = new Date($('#dateOmega').val());
    if (endDate < startDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'daily') {
    startDate = new Date($('#dateAlphaDaily').val());
    endDate = new Date($('#dateOmegaDaily').val());
    if (endDate < startDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'weekly') {
    startDate = new Date($('#dateAlphaWeekly').val());
    endDate = new Date($('#dateOmegaWeekly').val());
    if (endDate < startDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'monthly') {
    startDate = new Date($('#dateAlphaMonthly').val());
    endDate = new Date($('#dateOmegaMonthly').val());
    if (endDate < startDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'yearly') {
    startDate = new Date($('#dateAlphaYearly').val());
    endDate = new Date($('#dateOmegaYearly').val());
    if (endDate < startDate) {
      return false;
    } else {
      return true;
    }
  }
});

//end date cannot occur before start date
$.validator.addMethod("minOmega", function (value, element) {
  var startDate;
  var endDate;
  if ($('input[name=recurrence]:checked').val() == 'none') {
    startDate = new Date($('#dateAlpha').val());
    endDate = new Date($('#dateOmega').val());
    if (endDate < startDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'daily') {
    startDate = new Date($('#dateAlphaDaily').val());
    endDate = new Date($('#dateOmegaDaily').val());
    if (endDate < startDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'weekly') {
    startDate = new Date($('#dateAlphaWeekly').val());
    endDate = new Date($('#dateOmegaWeekly').val());
    if (endDate < startDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'monthly') {
    startDate = new Date($('#dateAlphaMonthly').val());
    endDate = new Date($('#dateOmegaMonthly').val());
    if (endDate < startDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'yearly') {
    startDate = new Date($('#dateAlphaYearly').val());
    endDate = new Date($('#dateOmegaYearly').val());
    if (endDate < startDate) {
      return false;
    } else {
      return true;
    }
  }
});

$.validator.addMethod("multiEmailCheck", function (value, element) {
  var emailList = document.forms["newics"]["multiEmail"].value.replace(/\s/g, '').split(',');
  if (emailList == '') {
    return true;
  } else {
    if (emailList.length == 1) {
      if (validateEmail(emailList)) {
        return true;
      } else {
        return false;
      }
    }
    if (emailList.length > 1) {
      for (var i = 0; i < emailList.length; i++) {
        var result = true;
        if (validateEmail(emailList[i])) {
          result = true;
        } else {
          result = false;
        }
      }
      return result;
    }
  }
});

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$(function () {
  $("form[name='newics']").validate({
    groups: {
      date1: "dateAlpha dateOmega",
      date2: "dateAlphaDaily dateOmegaDaily",
      date3: "dateAlphaWeekly dateOmegaWeekly",
      date4: "dateAlphaMonthly dateOmegaMonthly",
      date4: "dateAlphaYearly dateOmegaYearly",
      time1: "timeAlpha timeOmega",
      time2: "timeAlphaDaily timeOmegaDaily",
      time3: "timeAlphaWeekly timeOmegaWeekly",
      time4: "timeAlphaMonthly timeOmegaMonthly",
      time4: "timeAlphaYearly timeOmegaYearly",
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
        maxlength: 300
      },
      multiEmail: {
        multiEmailCheck: true
      },
      recurrence: {
        required: true
      },
      everyDayRadio: {
        required: true
      },
      endDaily: {
        required: true,
      },
      dateAlpha: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentAlpha: true,
        minAlpha: true
      },
      dateAlphaDaily: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentAlpha: true,
        minAlpha: {
          depends: function () {
            return $('input[name=endDaily]:checked').val() == 'byDaily';
          }
        }
      },
      dateAlphaWeekly: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentAlpha: true,
        minAlpha: {
          depends: function () {
            return $('input[name=endWeekly]:checked').val() == 'byWeekly';
          }
        }
      },
      dateAlphaMonthly: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentAlpha: true,
        minAlpha: {
          depends: function () {
            return $('input[name=endMonthly]:checked').val() == 'byMonthly';
          }
        }
      },
      dateAlphaYearly: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentAlpha: true,
        minAlpha: {
          depends: function () {
            return $('input[name=endYearly]:checked').val() == 'byYearly';
          }
        }
      },
      everyDay: {
        required: {
          depends: function () {
            return $('input[name=everyDayRadio]:checked').val() == 'customDaily';
          }
        },
        integerCheckEveryDay: {
          depends: function () {
            return $('input[name=everyDayRadio]:checked').val() == 'customDaily';
          }
        }
      },
      dailyCount: {
        required: {
          depends: function () {
            return $('input[name=endDaily]:checked').val() == 'afterDaily';
          }
        },
        integerCheckDailyCount: {
          depends: function () {
            return $('input[name=endDaily]:checked').val() == 'afterDaily';
          }
        }
      },
      everyWeek: {
        required: true,
        integerCheckEveryWeek: true
      },
      dayName: {
        required: true
      },
      weeklyCount: {
        required: {
          depends: function () {
            return $('input[name=endWeekly]:checked').val() == 'afterWeekly';
          }
        },
        integerCheckWeeklyCount: {
          depends: function () {
            return $('input[name=endWeekly]:checked').val() == 'afterWeekly';
          }
        }
      },
      monthlyCount: {
        required: {
          depends: function () {
            return $('input[name=endMonthly]:checked').val() == 'afterMonthly';
          }
        },
        integerCheckMonthlyCount: {
          depends: function () {
            return $('input[name=endMonthly]:checked').val() == 'afterMonthly';
          }
        }
      },
      yearlyCount: {
        required: {
          depends: function () {
            return $('input[name=endYearly]:checked').val() == 'afterYearly';
          }
        },
        integerCheckYearlyCount: {
          depends: function () {
            return $('input[name=endYearly]:checked').val() == 'afterYearly';
          }
        }
      },
      dayMonthly: {
        required: {
          depends: function () {
            return $('input[name=recurrMonthly]:checked').val() == 'chooseDayMonthly';
          }
        },
        integerCheckDayMonthlyCount: {
          depends: function () {
            return $('input[name=recurrMonthly]:checked').val() == 'chooseDayMonthly';
          }
        },
        integerCheckGreaterThan31: {
          depends: function () {
            return $('input[name=recurrMonthly]:checked').val() == 'chooseDayMonthly';
          }
        }
      },
      everyMonth: {
        required: {
          depends: function () {
            return $('input[name=recurrMonthly]:checked').val() == 'chooseDayMonthly';
          }
        },
        integerCheckEveryMonthCount: {
          depends: function () {
            return $('input[name=recurrMonthly]:checked').val() == 'chooseDayMonthly';
          }
        }
      },
      monthMonthly: {
        emptySelectMonthMonthly: {
          depends: function () {
            return $('input[name=recurrMonthly]:checked').val() == 'chooseToMonthly';
          }
        }
      },
      weekDayMonthly: {
        emptySelectWeekDayMonthly: {
          depends: function () {
            return $('input[name=recurrMonthly]:checked').val() == 'chooseToMonthly';
          }
        }
      },
      toEveryMonth: {
        required: {
          depends: function () {
            return $('input[name=recurrMonthly]:checked').val() == 'chooseToMonthly';
          }
        },
        integerCheckEveryMonth: {
          depends: function () {
            return $('input[name=recurrMonthly]:checked').val() == 'chooseToMonthly';
          }
        }
      },
      numYears: {
        required: true,
        integerCheckNumYears: true
      },
      monthNameYearly: {
        emptySelectYearChooseMonthName: {
          depends: function () {
            return $('input[name=recurrYearly]:checked').val() == 'chooseDayYearly';
          }
        }
      },
      everyDayOfMonthYear: {
        required: {
          depends: function () {
            return $('input[name=recurrYearly]:checked').val() == 'chooseDayYearly';
          }
        },
        integerCheckDayOfMonth: {
          depends: function () {
            return $('input[name=recurrYearly]:checked').val() == 'chooseDayYearly';
          }
        }
      },
      recurrMonthly: {
        required: true
      },
      recurrYearly: {
        required: true
      },
      endWeekly: {
        required: true
      },
      endMonthly: {
        required: true
      },
      endYearly: {
        required: true
      },
      weekYearly: {
        emptySelectYearChooseWeekYearly: {
          depends: function () {
            return $('input[name=recurrYearly]:checked').val() == 'chooseToYearly';
          }
        }
      },
      weekDayYearly: {
        emptySelectYearChooseWeekDayYearly: {
          depends: function () {
            return $('input[name=recurrYearly]:checked').val() == 'chooseToYearly';
          }
        }
      },
      monthNameYearly2: {
        emptySelectYearChooseMonthName2: {
          depends: function () {
            return $('input[name=recurrYearly]:checked').val() == 'chooseToYearly';
          }
        }
      },
      dateOmega: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentOmega: true,
        minOmega: true
      },
      dateOmegaDaily: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentOmega: true,
        minOmega: true,
        dailyCheck: true
      },
      dateOmegaWeekly: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentOmega: true,
        minOmega: true,
        weeklyCheck: true
      },
      dateOmegaMonthly: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentOmega: true,
        minOmega: true,
        monthlyCheck: true,
        monthlyCheckChoose: {
          depends: function () {
            return $('input[name=recurrMonthly]:checked').val() == 'chooseToMonthly';
          }
        }
      },
      dateOmegaYearly: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentOmega: true,
        minOmega: true,
        yearlyCheck: true
      },
      timeAlpha: {
        required: true,
        timeTestNone: true
      },
      timeAlphaDaily: {
        required: true,
        timeTestDaily: true
      },
      timeAlphaWeekly: {
        required: true,
        timeTestWeekly: true
      },
      timeAlphaMonthly: {
        required: true,
        timeTestMonthly: true
      },
      timeAlphaYearly: {
        required: true,
        timeTestYearly: true
      },
      timeOmega: {
        required: true,
        timeTestNone: true
      },
      timeOmegaDaily: {
        required: true,
        timeTestDaily: true
      },
      timeOmegaWeekly: {
        required: true,
        timeTestWeekly: true
      },
      timeOmegaMonthly: {
        required: true,
        timeTestMonthly: true
      },
      timeOmegaYearly: {
        required: true,
        timeTestYearly: true
      },
      downloadType: {
        downloadChoice: true
      },
      classType: {
        classChoice: true
      },
    },
    // Specify validation error messages
    messages: {
      title: "Title is required.",
      location: "Location is required.",
      multiEmail: {
        multiEmailCheck: "One or more email addresses are invalid."
      },
      recurrence: {
        required: "Recurrence is required."
      },
      everyDayRadio: {
        required: "Type of daily recurrence required."
      },
      endDaily: {
        required: "Selection for end is required."
      },
      dateAlpha: {
        required: "Start and end date is required.",
        currentAlpha: "Start date occurs in the past.",
        minAlpha: "Start date occurs after end date."
      },
      dateAlphaDaily: {
        required: "Start and end date is required.",
        currentAlpha: "Start date occurs in the past.",
        minAlpha: "Start date occurs after end date."
      },
      dateAlphaWeekly: {
        required: "Start and end date is required.",
        currentAlpha: "Start date occurs in the past.",
        minAlpha: "Start date occurs after end date."
      },
      dateAlphaMonthly: {
        required: "Start and end date is required.",
        currentAlpha: "Start date occurs in the past.",
        minAlpha: "Start date occurs after end date."
      },
      dateAlphaYearly: {
        required: "Start and end date is required.",
        currentAlpha: "Start date occurs in the past.",
        minAlpha: "Start date occurs after end date."
      },
      dayName: {
        required: "Day(s) of week are required."
      },
      everyDay: {
        required: "Daily recurrence required.",
        integerCheckEveryDay: "Input must be an integer greater than 0."
      },
      everyWeek: {
        required: "Weekly recurrence required.",
        integerCheckEveryWeek: "Input must be an integer greater than 0."
      },
      dailyCount: {
        required: "End after number is required.",
        integerCheckDailyCount: "Input must be an integer greater than 0."
      },
      weeklyCount: {
        required: "End after number is required.",
        integerCheckWeeklyCount: "Input must be an integer greater than 0."
      },
      monthlyCount: {
        required: "End after number is required.",
        integerCheckMonthlyCount: "Input must be an integer greater than 0."
      },
      yearlyCount: {
        required: "End after number is required.",
        integerCheckYearlyCount: "Input must be an integer greater than 0."
      },
      dayMonthly: {
        required: "Day to recurr is required.",
        integerCheckDayMonthlyCount: "Day of month: Input must be an integer greater than 0.",
        integerCheckGreaterThan31: "Day of month: That recurrence is not valid."
      },
      everyMonth: {
        required: "Month(s) to recurr is required.",
        integerCheckEveryMonthCount: "Interval: Input must be an integer greater than 0."
      },
      monthMonthly: {
        emptySelectMonthMonthly: "Week to recurr is required."
      },
      weekDayMonthly: {
        emptySelectWeekDayMonthly: "Day to recurr is required."
      },
      toEveryMonth: {
        required: "Month(s) to recurr is required.",
        integerCheckEveryMonth: "Input must be an integer greater than 0."
      },
      recurrMonthly: {
        required: "Selection for recurrence is required."
      },
      recurrYearly: {
        required: "Selection for recurrence is required."
      },
      endWeekly: {
        required: "Selection for end is required."
      },
      endMonthly: {
        required: "Selection for end is required."
      },
      endYearly: {
        required: "Selection for end is required."
      },
      numYears: {
        required: "Year(s) to recur is required.",
        integerCheckNumYears: "Input must be an integer greater than 0."
      },
      monthNameYearly: {
        emptySelectYearChooseMonthName: "Month of year is required.",
      },
      weekYearly: {
        emptySelectYearChooseWeekYearly: "Week of the month is required.",
      },
      weekDayYearly: {
        emptySelectYearChooseWeekDayYearly: "Day of the week is required.",
      },
      monthNameYearly2: {
        emptySelectYearChooseMonthName2: "Month of year is required.",
      },
      everyDayOfMonthYear: {
        required: "Day of month is required.",
        integerCheckDayOfMonth: "Input must be an integer greater than 0."
      },
      dateOmega: {
        required: "Start and end date is required.",
        currentOmega: "End date occurs in the past.",
        minOmega: "End date occurs before start date.",
      },
      dateOmegaDaily: {
        required: "Start and end date is required.",
        currentOmega: "End date occurs in the past.",
        minOmega: "End date occurs before start date.",
        dailyCheck: "End date must be at least one day after start date.",
      },
      dateOmegaWeekly: {
        required: "Start and end date is required.",
        currentOmega: "End date occurs in the past.",
        minOmega: "End date occurs before start date.",
        weeklyCheck: "End date must be at least one week after start date."
      },
      dateOmegaMonthly: {
        required: "Start and end date is required.",
        currentOmega: "End date occurs in the past.",
        minOmega: "End date occurs before start date.",
        monthlyCheck: "End date must be at least 28 days after start date.",
        monthlyCheckChoose: "That recurrence is not valid."
      },
      dateOmegaYearly: {
        required: "Start and end date is required.",
        currentOmega: "End date occurs in the past.",
        minOmega: "End date occurs before start date.",
        yearlyCheck: "End date must be at least one year after start date.",
      },
      timeAlpha: {
        required: "Start and end time required.",
        timeTestNone: "Start time occurs at or after end time."
      },
      timeAlphaDaily: {
        required: "Start and end time required.",
        timeTestDaily: "Start time occurs at or after end time."
      },
      timeAlphaWeekly: {
        required: "Start and end time required.",
        timeTestWeekly: "Start time occurs at or after end time."
      },
      timeAlphaMonthly: {
        required: "Start and end time required.",
        timeTestMonthly: "Start time occurs at or after end time."
      },
      timeAlphaYearly: {
        required: "Start and end time required.",
        timeTestYearly: "Start time occurs at or after end time."
      },
      timeOmega: {
        required: "Start and end time required.",
        timeTestNone: "Start time occurs at or after end time."
      },
      timeOmegaDaily: {
        required: "Start and end time required.",
        timeTestDaily: "Start time occurs at or after end time."
      },
      timeOmegaWeekly: {
        required: "Start and end time required.",
        timeTestWeekly: "Start time occurs at or after end time."
      },
      timeOmegaMonthly: {
        required: "Start and end time required.",
        timeTestMonthly: "Start time occurs at or after end time."
      },
      timeOmegaYearly: {
        required: "Start and end time required.",
        timeTestYearly: "Start time occurs at or after end time."
      },
      downloadType: {
        downloadChoice: "Please select a type of calendar."
      },
      classType: {
        classChoice: "Please select a classification for your event."
      },
    },
    errorElement: 'div',
    errorPlacement: function (error, element) {
      if (element.is(":radio")) {
        error.appendTo(element.parents('.container'));
      } else if (element.is(":checkbox")) {
        error.appendTo(element.parents('.container'));
      } else if (element.is(":text")) {
        if (element.is('.everyDay')) {
          error.appendTo(element.parents('.text-input'));
        } else if (element.is('.dailyCount')) {
          error.appendTo(element.parents('.text-input'));
        } else if (element.is('.everyWeek')) {
          error.appendTo(element.parents('.text-input'));
        } else if (element.is('.weeklyCount')) {
          error.appendTo(element.parents('.text-input'));
        } else if (element.is('.dayMonthly')) {
          error.appendTo(element.parents('.text-input'));
        } else if (element.is('.everyMonth')) {
          error.appendTo(element.parents('.text-input'));
        } else if (element.is('.toEveryMonth')) {
          error.appendTo(element.parents('.text-input'));
        } else if (element.is('.monthlyCount')) {
          error.appendTo(element.parents('.text-input'));
        } else if (element.is('.numYears')) {
          error.appendTo(element.parents('.text-input'));
        } else if (element.is('.yearlyCount')) {
          error.appendTo(element.parents('.text-input'));
        } else if (element.is('.multiEmail')) {
          error.appendTo(element.parents('.text-input'));
        } else { // This is the default behavior 
          error.insertAfter(element);
        }
      } else if (element.is('.monthMonthly')) {
        error.appendTo(element.parents('.text-input'));
      } else if (element.is('.weekDayMonthly')) {
        error.appendTo(element.parents('.text-input'));
      } else { // This is the default behavior 
        error.insertAfter(element);
      }
    }
  });
});

$(function () {
  $("form[name='newics']").submit(function (event) {
    event.preventDefault();
    if ($(this).valid()) {
      var title = $('#title').val();
      var locationTemp = $('#location').val();
      var locationTemp2 = locationTemp.toString();
      var location = encode(locationTemp2);

      var description = $('#description').val();

      if ($('input[name=recurrence]:checked').val() == 'none') {

        var message = getMessageNone();
        getDownloadChoice(message);

      } else if ($('input[name=recurrence]:checked').val() == 'daily') {
        if ($('input[name=everyDayRadio]:checked').val() == 'customDaily') {
          if ($('input[name=endDaily]:checked').val() == 'byDaily') {

            var message = getMessageByDaily();
            getDownloadChoice(message);

          } else if ($('input[name=endDaily]:checked').val() == 'afterDaily') {

            var message = getMessageAfterDaily();
            getDownloadChoice(message);

          } else if ($('input[name=endDaily]:checked').val() == 'noEndDaily') {

            var message = getMessageNoEndDaily();
            getDownloadChoice(message);

          }
        } else if ($('input[name=everyDayRadio]:checked').val() == 'everyWeekday') {
          if ($('input[name=endDaily]:checked').val() == 'byDaily') {

            var message = getMessageWeekdayByDaily();
            getDownloadChoice(message);

          } else if ($('input[name=endDaily]:checked').val() == 'afterDaily') {

            var message = getMessageWeekdayAfterDaily();
            getDownloadChoice(message);

          } else if ($('input[name=endDaily]:checked').val() == 'noEndDaily') {

            var message = getMessageWeekdayNoEndDaily();
            getDownloadChoice(message);

          }
        }
      } else if ($('input[name=recurrence]:checked').val() == 'weekly') {

        if ($('input[name=endWeekly]:checked').val() == 'byWeekly') {

          var message = getMessageByWeekly();
          getDownloadChoice(message);

        } else if ($('input[name=endWeekly]:checked').val() == 'afterWeekly') {

          var message = getMessageAfterWeekly();
          getDownloadChoice(message);

        } else if ($('input[name=endWeekly]:checked').val() == 'noEndWeekly') {

          var message = getMessageNoEndWeekly();
          getDownloadChoice(message);

        }

      } else if ($('input[name=recurrence]:checked').val() == 'monthly') {
        // if recurrMonthly chooseDayMonthly
        if ($('input[name=recurrMonthly]:checked').val() == 'chooseDayMonthly') {
          // byMonthly
          if ($('input[name=endMonthly]:checked').val() == 'byMonthly') {

            var message = getMessageByMonthlyDay();
            getDownloadChoice(message);

            // afterMonthly
          } else if ($('input[name=endMonthly]:checked').val() == 'afterMonthly') {

            var message = getMessageAfterMonthlyDay();
            getDownloadChoice(message);

            // noEndMonthly
          } else if ($('input[name=endMonthly]:checked').val() == 'noEndMonthly') {

            var message = getMessageNoEndMonthlyDay();
            getDownloadChoice(message);

          }
        }
        // if recurrMonthly chooseToMonthly
        else if ($('input[name=recurrMonthly]:checked').val() == 'chooseToMonthly') {
          // byMonthly
          if ($('input[name=endMonthly]:checked').val() == 'byMonthly') {
            var message = getMessageByMonthlyTo();
            getDownloadChoice(message);

            // afterMonthly
          } else if ($('input[name=endMonthly]:checked').val() == 'afterMonthly') {

            var message = getMessageAfterMonthlyTo();
            getDownloadChoice(message);

            // noEndMonthly
          } else if ($('input[name=endMonthly]:checked').val() == 'noEndMonthly') {

            var message = getMessageNoEndMonthlyTo();
            getDownloadChoice(message);

          }
        }
      } else if ($('input[name=recurrence]:checked').val() == 'yearly') {
        // if recurrYearly chooseDayYearly
        if ($('input[name=recurrYearly]:checked').val() == 'chooseDayYearly') {
          // byYearly
          if ($('input[name=endYearly]:checked').val() == 'byYearly') {

            var message = getMessageByYearlyDay();
            getDownloadChoice(message);

            // afterYearly
          } else if ($('input[name=endYearly]:checked').val() == 'afterYearly') {

            var message = getMessageAfterYearlyDay();
            getDownloadChoice(message);

            // noEndYearly
          } else if ($('input[name=endYearly]:checked').val() == 'noEndYearly') {

            var message = getMessageNoEndYearlyDay();
            getDownloadChoice(message);

          }
        }
        // if recurrYearly chooseToYearly
        else if ($('input[name=recurrYearly]:checked').val() == 'chooseToYearly') {
          // byYearly
          if ($('input[name=endYearly]:checked').val() == 'byYearly') {
            var message = getMessageByYearlyTo();
            getDownloadChoice(message);

            // afterYearly
          } else if ($('input[name=endYearly]:checked').val() == 'afterYearly') {

            var message = getMessageAfterYearlyTo();
            getDownloadChoice(message);

            // noEndYearly
          } else if ($('input[name=endYearly]:checked').val() == 'noEndYearly') {

            var message = getMessageNoEndYearlyTo();
            getDownloadChoice(message);

          }
        }
      }
    }
  });
});
