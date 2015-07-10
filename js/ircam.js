var ircam = angular.module('ircamApp', ['ngAnimate', 'ngSanitize', 'smoothScroll']);

ircam.controller('ircamController', function($scope, $http, $location, $anchorScroll, $rootScope, $timeout){
  
  $http.get('continents.json').success(function(data){

    // Group the countries into max group size
    for (var i = 0; i < data.length; i++){
      var continent = data[i];
      var countries = continent.countries;
      var maxGroupSize = 4;
      continent.countriesGrouped = [];
      continent.totalCountries = countries.length;

      for (var j = 0; j < countries.length; j++){
        var country = countries[j];
        var countryName = country.name;
        country.name = countryName.replace(' ', '<br />');

        if (!continent.countriesGrouped.length){
          continent.countriesGrouped.push([]);
        }

        var group = continent.countriesGrouped[continent.countriesGrouped.length - 1];
        if (group.length < maxGroupSize){
          group.push(country);
        } else {
          continent.countriesGrouped.push([country]);
        }
      }

    }
    $scope.continents = data;
  });
});


// Filter to make names dashed and lowercase
ircam.filter('dashlower', function(){
  return function(input) {
    return input.toLowerCase().replace(' ', '-');
  };
});
