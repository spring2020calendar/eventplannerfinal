$(function () {
  $('[data-format]').click(function (event) {
    var input = {
      title: $('#title').val(),
      location: $('#location').val(),
      description: $('#description').val(),
      dateAlpha: $('#dateAlpha').val().replace(/[^0-9]+/g, ''),
      dateOmega: $('#dateOmega').val().replace(/[^0-9]+/g, ''),
      timeAlpha: $('#timeAlpha').val().replace(/[^0-9]+/g, ''),
      timeOmega: $('#timeOmega').val().replace(/[^0-9]+/g, ''),
    };

    input.getAlpha = function () {
      var result = this.dateAlpha;

      if (this.timeAlpha != '') {
        result += 'T' + this.timeAlpha + '00';
      }

      return result;
    };

    input.getOmega = function () {
      var result = this.dateOmega;

      if (this.timeOmega != '') {
        result += 'T' + this.timeOmega + '00';
      }

      return result;
    };

    if ($(this).data('format') === 'ical') {
      var data = [
        'BEGIN:VEVENT',
        'UID:' + Math.random().toString(36).substring(8),
        'SEQUENCE:0',
        'TRANSP:OPAQUE',
        'DTSTART;TZID=US/Central:' + input.getAlpha(),
        'DTEND;TZID=US/Central:' + input.getOmega(),
        'RRULE:FREQ=DAILY;UNTIL=' + input.getOmega(),
        'SUMMARY:' + input.title,
        'LOCATION:' + input.location,
        'DESCRIPTION:' + input.description.replace(/\n/g, '\n'),
        'END:VEVENT'
      ];

      $(this).attr('download', 'event.ics').attr('href', "data:text/calendar;charset=utf8," + escape(data.join("\n")));
    }
  });
});