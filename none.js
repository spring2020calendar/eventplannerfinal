// JavaScript Document
$.validator.addMethod("timeTestNone", function (value, element) {
  var startDate = $('input[name=dateAlpha]').val();
  var endDate = $('input[name=dateOmega]').val();
  var startTime = $('input[name=timeAlpha]').val();
  var endTime = $('input[name=timeOmega]').val();
  if (startDate == null) {
    return true;
  }
  if (endDate == null) {
    return true;
  } else if (startDate == endDate && startTime > endTime) {
    return false;
  } else if (startDate == endDate && startTime < endTime) {
    return true;
  } else if (startDate < endDate && startTime == endTime) {
    return true;
  } else if (startDate < endDate && startTime < endTime) {
    return true;
  } else if (startDate < endDate && startTime > endTime) {
    return true;
  } else {
    return false;
  }
});

function getMessageNone() {
  var title = $('#title').val();
  var location = $('#location').val();
  var geo = str;
  var description = $('#description').val();
  var attendees = $('#attendees').val();

  var dateAlpha = $('#dateAlpha').val().replace(/[^0-9]+/g, '') + "T" + $('#timeAlpha').val().replace(/\D/g, '') + "00";
  var dateOmega = $('#dateOmega').val().replace(/[^0-9]+/g, '') + "T" + $('#timeOmega').val().replace(/\D/g, '') + "00";

  var startDate = new Date($('#dateAlpha').val());
  var endDate = new Date($('#dateOmega').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

  var to = getTo();
  var toEmail = getEmail();
  var resources = getResources();

  return ["CALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nGEO:" + geo + "\nLOCATION:" + location + "\nPRIORITY:5" + to + toEmail + "\n" + resources +  "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
}
