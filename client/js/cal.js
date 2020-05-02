$(document).ready(function () {
    msgData1 = document.getElementById('.start-time').time();
    msgData2 = document.getElementById('.end-time').time();
    msgData3 = document.getElementById('.location').text();
    msgData4 = document.getElementById('.summary').text();
    msgData5 = document.getElementById('.fromname').text();
    msgData6 = document.getElementById('.fromemail').text();
    msgData7 = document.getElementById('.attendee').text();

  var icsMSG = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Our Company//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:me@google.com\nDTSTAMP:20120315T170000Z\nATTENDEE;CN=" + msgData7 + ";RSVP=TRUE:MAILTO:"+msgData6+"\nORGANIZER;CN=" + msgData5 + ":MAILTO::"+msgData6+"\nDTSTART:" + msgData1 +"\nDTEND:" + msgData2 +"\nLOCATION:" + msgData3 + "\nSUMMARY:" + msgData4 + "\nEND:VEVENT\nEND:VCALENDAR";

  $('.download').click(function () {
    window.open("data:text/calendar;charset=utf8," + escape(icsMSG));
  });
});
