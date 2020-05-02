// JavaScript Document
function getEmail() {
  var emailList = document.forms["newics"]["multiEmail"].value.replace(/\s/g, '').split(',');
  var attendees = '';
  if (emailList.length == 0) {
    attendees = '';
  }
  if (emailList.length > 0) {
    for (var i = 0; i < emailList.length; i++) {
      attendees = [attendees + "\nATTENDEE;" + emailList[i] + ";RSVP=TRUE:mailto:" + emailList[i]];
    }
  }
  return attendees;
}

function getTo() {
  var toInput = $('#organizer').val();
  var organizer;
  if (toInput.length == 0) {
    organizer = '';
  }
  if (toInput.length > 0) {
    organizer = ["ORGANIZER;CN=" + toInput + ":mailto:" + toInput];
  }
  return organizer;
}
