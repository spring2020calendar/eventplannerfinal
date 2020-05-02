// JavaScript Document
var str;

(function () {
  'use strict';

  var app = angular.module('app', ['ngMaterial']);
  app.controller('AppController', AppController);

  function AppController() {
    var _this = this;

    _this.submit = function () {
      console.log('submit');
    }

    _this.changed = '';

    _this.b = function () {
      console.log('changed');
      _this.changed = 'changed';
    }
  }


  app.directive('googleplace', function () {
    return {
      require: 'ngModel',
      scope: {
        onChanged: '&'
      },
      link: function (scope, element, attrs, model) {
        var options = {
          types: []
        };

        // Create autocomplete instance
        scope.autocomplete = new google.maps.places.Autocomplete(element[0], options);

        google.maps.event.addListener(scope.autocomplete, 'place_changed', function () {
          scope.$apply(function () {
            model.$setViewValue(element.val());
            scope.onChanged();
          });
        });

        google.maps.event.addListener(scope.autocomplete, 'place_changed', function () {
          var geoComponents = scope.autocomplete.getPlace();
          var latitude = geoComponents.geometry.location.lat();
          var longitude = geoComponents.geometry.location.lng();
          var addressComponents = geoComponents.address_components;

          addressComponents = addressComponents.filter(function (component) {
            switch (component.types[0]) {
              case "locality": // city
                return true;
              case "administrative_area_level_1": // state
                return true;
              case "country": // country
                return true;
              default:
                return false;
            }
          }).map(function (obj) {
            return obj.long_name;
          });

          addressComponents.push(latitude, longitude);
          var latlon = [];
          latlon.push(latitude, longitude);
			if (latlon.length > 0) {
          str = latlon.join(";",", ");
			} else {
				str = "";
			}

          scope.$apply(function () {
            scope.details = addressComponents; // array containing each location component
            model.$setViewValue(element.val());
            console.log(str);
          });
        });

        element.on('keydown', function (e) {
          if (e.which === 13 && model.$viewValue !== element.val()) {
            e.preventDefault();
          }
        });
      }
    }
  });
})();
