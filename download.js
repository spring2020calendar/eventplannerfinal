// JavaScript Document
var str;
$.validator.addMethod("downloadChoice", function (value, element, arg) {
  if (document.getElementById('downloadType').value == "-1") {
    return false;
  } else {
    return true;
  }
});
$.validator.addMethod("classChoice", function (value, element, arg) {
  if (document.getElementById('classType').value == "-1") {
    return false;
  } else {
    return true;
  }
});

function getDownloadChoice(message) {
  if (document.getElementById('downloadType').value == "1") {
    if (document.getElementById('classType').value == "1") {
      window.open("data:text/calendar;charset=utf8," + escape("BEGIN:VCALENDAR\nCLASS:PUBLIC\nVERSION:2.0\nPRODID:Twelvi // Event Creator\n" + message));
    }
    if (document.getElementById('classType').value == "2") {
      window.open("data:text/calendar;charset=utf8," + escape("BEGIN:VCALENDAR\nCLASS:PRIVATE\nVERSION:2.0\nPRODID:Twelvi // Event Creator\n" + message));
    }
    if (document.getElementById('classType').value == "3") {
      window.open("data:text/calendar;charset=utf8," + escape("BEGIN:VCALENDAR\nCLASS:CONFIDENTIAL\nVERSION:2.0\nPRODID:Twelvi // Event Creator\n" + message));
    } else {
      window.open("data:text/calendar;charset=utf8," + escape("BEGIN:VCALENDAR\nCLASS:PUBLIC\nVERSION:2.0\nPRODID:Twelvi // Event Creator\n" + message));
    }
  }
  if (document.getElementById('downloadType').value == "2") {
    if (document.getElementById('classType').value == "1") {
      window.open("data:text/calendar;charset=utf8," + escape("BEGIN:VCALENDAR\nCLASS:PUBLIC\nVERSION:2.0\nPRODID:Twelvi // Event Creator\n" + message));
    }
    if (document.getElementById('classType').value == "2") {
      window.open("data:text/calendar;charset=utf8," + escape("BEGIN:VCALENDAR\nCLASS:PRIVATE\nVERSION:2.0\nPRODID:Twelvi // Event Creator\n" + message));
    }
    if (document.getElementById('classType').value == "3") {
      window.open("data:text/calendar;charset=utf8," + escape("BEGIN:VCALENDAR\nCLASS:CONFIDENTIAL\nVERSION:2.0\nPRODID:Twelvi // Event Creator\n" + message));
    } else {
      window.open("data:text/calendar;charset=utf8," + escape("BEGIN:VCALENDAR\nCLASS:PUBLIC\nVERSION:2.0\nPRODID:Twelvi // Event Creator\n" + message));
    }
  }
  if (document.getElementById('downloadType').value == "3") {
    if (document.getElementById('classType').value == "1") {
      window.open("data:text/calendar;charset=utf8," + escape("BEGIN:VCALENDAR\nCLASS:PUBLIC\nVERSION:2.0\nPRODID:Twelvi // Event Creator\n" + message));
    }
    if (document.getElementById('classType').value == "2") {
      window.open("data:text/calendar;charset=utf8," + escape("BEGIN:VCALENDAR\nCLASS:PRIVATE\nVERSION:2.0\nPRODID:Twelvi // Event Creator\n" + message));
    }
    if (document.getElementById('classType').value == "3") {
      window.open("data:text/calendar;charset=utf8," + escape("BEGIN:VCALENDAR\nCLASS:CONFIDENTIAL\nVERSION:2.0\nPRODID:Twelvi // Event Creator\n" + message));
    } else {
      window.open("data:text/calendar;charset=utf8," + escape("BEGIN:VCALENDAR\nCLASS:PUBLIC\nVERSION:2.0\nPRODID:Twelvi // Event Creator\n" + message));
    }
  } else {
      window.open("data:text/calendar;charset=utf8," + escape("BEGIN:VCALENDAR\nCLASS:PUBLIC\nVERSION:2.0\nPRODID:Twelvi // Event Creator\n" + message));
  }
}
