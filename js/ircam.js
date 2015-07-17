var ircam = angular.module('ircamApp', ['ngAnimate', 'ngSanitize', 'smoothScroll']);

ircam.controller('ircamController', function($scope, $http, $location, $anchorScroll, $rootScope, $timeout) {

  var continentData = {
      "Europe" : {
        name : "Europe",
        icon_image : "icon_europe.png",
        countries : {}
      },
      "Asia" : {
        name : "Asia",
        icon_image : "icon_asia.png",
        countries : {}
      },
      "South America" : {
        name : "South America",
        icon_image : "icon_south_america.png",
        countries : {}
      },
      "North America" : {
        name : "North America",
        icon_image : "icon_north_america.png",
        countries : {}
      },
      "Africa" : {
        name : "Africa",
        icon_image : "icon_africa.png",
        countries : {}
      },
      "Oceania" : {
        name : "Oceania",
        icon_image : "icon_oceania.png",
        countries : {}
      }
    };
  $scope.continents = continentData;
  
  $http.get('http://crossorigin.me/http://forumnet.ircam.fr/shop/ws-address.php').success(function(data){

    var countryContinentMap = {
      "Afghanistan" : "Asia",
      "Åland Islands" : "Europe",
      "Albania" : "Europe",
      "Algeria" : "Africa",
      "American Samoa" : "Oceania",
      "Andorra" : "Europe",
      "Angola" : "Africa",
      "Anguilla" : "North America",
      "Antarctica" : "Antarctica",
      "Antigua and Barbuda" : "North America",
      "Argentina" : "South America",
      "Armenia" : "Asia",
      "Aruba" : "North America",
      "Australia" : "Oceania",
      "Austria" : "Europe",
      "Azerbaijan" : "Asia",
      "Bahamas" : "North America",
      "Bahrain" : "Asia",
      "Bangladesh" : "Asia",
      "Barbados" : "North America",
      "Belarus" : "Europe",
      "Belgium" : "Europe",
      "Belize" : "North America",
      "Benin" : "Africa",
      "Bermuda" : "North America",
      "Bhutan" : "Asia",
      "Bolivia" : "South America",
      "Bosnia and Herzegovina" : "Europe",
      "Botswana" : "Africa",
      "Bouvet Island" : "Antarctica",
      "Brazil" : "South America",
      "British Indian Ocean Territory" : "Asia",
      "Brunei Darussalam" : "Asia",
      "Bulgaria" : "Europe",
      "Burkina Faso" : "Africa",
      "Burundi" : "Africa",
      "Cambodia" : "Asia",
      "Cameroon" : "Africa",
      "Canada" : "North America",
      "Cape Verde" : "Africa",
      "Cayman Islands" : "North America",
      "Central African Republic" : "Africa",
      "Chad" : "Africa",
      "Chile" : "South America",
      "China" : "Asia",
      "Christmas Island" : "Asia",
      "Cocos (Keeling Islands" : "Asia",
      "Colombia" : "South America",
      "Comoros" : "Africa",
      "Congo" : "Africa",
      "The Democratic Republic of The Congo" : "Africa",
      "Cook Islands" : "Oceania",
      "Costa Rica" : "North America",
      "Cote D'ivoire" : "Africa",
      "Croatia" : "Europe",
      "Cuba" : "North America",
      "Cyprus" : "Asia",
      "Czech Republic" : "Europe",
      "Denmark" : "Europe",
      "Djibouti" : "Africa",
      "Dominica" : "North America",
      "Dominican Republic" : "North America",
      "Ecuador" : "South America",
      "Egypt" : "Africa",
      "El Salvador" : "North America",
      "Equatorial Guinea" : "Africa",
      "Eritrea" : "Africa",
      "Estonia" : "Europe",
      "Ethiopia" : "Africa",
      "Falkland Islands (Malvinas" : "South America",
      "Faroe Islands" : "Europe",
      "Fiji" : "Oceania",
      "Finland" : "Europe",
      "France" : "Europe",
      "French Guiana" : "South America",
      "French Polynesia" : "Oceania",
      "French Southern Territories" : "Antarctica",
      "Gabon" : "Africa",
      "Gambia" : "Africa",
      "Georgia" : "Asia",
      "Germany" : "Europe",
      "Ghana" : "Africa",
      "Gibraltar" : "Europe",
      "Greece" : "Europe",
      "Greenland" : "North America",
      "Grenada" : "North America",
      "Guadeloupe" : "North America",
      "Guam" : "Oceania",
      "Guatemala" : "North America",
      "Guernsey" : "Europe",
      "Guinea" : "Africa",
      "Guinea-bissau" : "Africa",
      "Guyana" : "South America",
      "Haiti" : "North America",
      "Heard Island and Mcdonald Islands" : "Antarctica",
      "Holy See (Vatican City State" : "Europe",
      "Honduras" : "North America",
      "Hong Kong" : "Asia",
      "HongKong" : "Asia",
      "Hungary" : "Europe",
      "Iceland" : "Europe",
      "India" : "Asia",
      "Indonesia" : "Asia",
      "Iran" : "Asia",
      "Iraq" : "Asia",
      "Ireland" : "Europe",
      "Isle of Man" : "Europe",
      "Israel" : "Asia",
      "Italy" : "Europe",
      "Jamaica" : "North America",
      "Japan" : "Asia",
      "Jersey" : "Europe",
      "Jordan" : "Asia",
      "Kazakhstan" : "Asia",
      "Kenya" : "Africa",
      "Kiribati" : "Oceania",
      "Democratic People's Republic of Korea" : "Asia",
      "Republic of Korea" : "Asia",
      "Korea, Dem. Republic of" : "Asia",
      "South Korea" : "Asia",
      "Kuwait" : "Asia",
      "Kyrgyzstan" : "Asia",
      "Lao People's Democratic Republic" : "Asia",
      "Latvia" : "Europe",
      "Lebanon" : "Asia",
      "Lesotho" : "Africa",
      "Liberia" : "Africa",
      "Libya" : "Africa",
      "Liechtenstein" : "Europe",
      "Lithuania" : "Europe",
      "Luxembourg" : "Europe",
      "Luxemburg" : "Europe",
      "Macao" : "Asia",
      "Macedonia" : "Europe",
      "Madagascar" : "Africa",
      "Malawi" : "Africa",
      "Malaysia" : "Asia",
      "Maldives" : "Asia",
      "Mali" : "Africa",
      "Malta" : "Europe",
      "Marshall Islands" : "Oceania",
      "Martinique" : "North America",
      "Mauritania" : "Africa",
      "Mauritius" : "Africa",
      "Mayotte" : "Africa",
      "Mexico" : "North America",
      "Micronesia" : "Oceania",
      "Moldova" : "Europe",
      "Monaco" : "Europe",
      "Mongolia" : "Asia",
      "Montenegro" : "Europe",
      "Montserrat" : "North America",
      "Morocco" : "Africa",
      "Mozambique" : "Africa",
      "Myanmar" : "Asia",
      "Namibia" : "Africa",
      "Nauru" : "Oceania",
      "Nepal" : "Asia",
      "Netherlands" : "Europe",
      "Netherlands Antilles" : "North America",
      "New Caledonia" : "Oceania",
      "New Zealand" : "Oceania",
      "Nicaragua" : "North America",
      "Niger" : "Africa",
      "Nigeria" : "Africa",
      "Niue" : "Oceania",
      "Norfolk Island" : "Oceania",
      "Northern Mariana Islands" : "Oceania",
      "Norway" : "Europe",
      "Oman" : "Asia",
      "Pakistan" : "Asia",
      "Palau" : "Oceania",
      "Palestinia" : "Asia",
      "Panama" : "North America",
      "Papua New Guinea" : "Oceania",
      "Paraguay" : "South America",
      "Peru" : "South America",
      "Philippines" : "Asia",
      "Pitcairn" : "Oceania",
      "Poland" : "Europe",
      "Portugal" : "Europe",
      "Puerto Rico" : "North America",
      "Qatar" : "Asia",
      "Reunion" : "Africa",
      "Reunion Island" : "Africa",
      "Romania" : "Europe",
      "Russian Federation" : "Europe",
      "Rwanda" : "Africa",
      "Saint Helena" : "Africa",
      "Saint Kitts and Nevis" : "North America",
      "Saint Lucia" : "North America",
      "Saint Pierre and Miquelon" : "North America",
      "Saint Vincent and The Grenadines" : "North America",
      "Samoa" : "Oceania",
      "San Marino" : "Europe",
      "Sao Tome and Principe" : "Africa",
      "Saudi Arabia" : "Asia",
      "Senegal" : "Africa",
      "Serbia" : "Europe",
      "Seychelles" : "Africa",
      "Sierra Leone" : "Africa",
      "Singapore" : "Asia",
      "Slovakia" : "Europe",
      "Slovenia" : "Europe",
      "Solomon Islands" : "Oceania",
      "Somalia" : "Africa",
      "South Africa" : "Africa",
      "South Georgia and The South Sandwich Islands" : "Antarctica",
      "Spain" : "Europe",
      "Sri Lanka" : "Asia",
      "Sudan" : "Africa",
      "Suriname" : "South America",
      "Svalbard and Jan Mayen" : "Europe",
      "Swaziland" : "Africa",
      "Sweden" : "Europe",
      "Switzerland" : "Europe",
      "Syrian Arab Republic" : "Asia",
      "Taiwan, Province of China" : "Asia",
      "Taiwan" : "Asia",
      "Tajikistan" : "Asia",
      "Tanzania, United Republic of" : "Africa",
      "Thailand" : "Asia",
      "Timor-leste" : "Asia",
      "Togo" : "Africa",
      "Tokelau" : "Oceania",
      "Tonga" : "Oceania",
      "Trinidad and Tobago" : "North America",
      "Tunisia" : "Africa",
      "Turkey" : "Asia",
      "Turkmenistan" : "Asia",
      "Turks and Caicos Islands" : "North America",
      "Tuvalu" : "Oceania",
      "Uganda" : "Africa",
      "Ukraine" : "Europe",
      "United Arab Emirates" : "Asia",
      "United Kingdom" : "Europe",
      "United States" : "North America",
      "United States Minor Outlying Islands" : "Oceania",
      "Uruguay" : "South America",
      "Uzbekistan" : "Asia",
      "Vanuatu" : "Oceania",
      "Venezuela" : "South America",
      "Vietnam" : "Asia",
      "Virgin Islands, British" : "North America",
      "Virgin Islands, U.S." : "North America",
      "Wallis and Futuna" : "Oceania",
      "Western Sahara" : "Africa",
      "Yemen" : "Asia",
      "Zambia" : "Africa",
      "Zimbabwe" : "Africa"
    };

    for (var i = 0; i < data.length; i++) {
      var cityData = data[i];
      var country = cityData.country;
      var continent = countryContinentMap[country];

      if (!continentData[continent].countries[country]) {
          continentData[continent].countries[country] = {
          name: country,
          member_count: 0,
          premium_count: 0,
          institution_count: 0
        };
      }

      var countryData = continentData[continent].countries[country];
      countryData.member_count += cityData.citycount ? parseInt(cityData.citycount, 10) : 0;
      countryData.premium_count += cityData.premium ? parseInt(cityData.premium, 10) : 0;
      countryData.institution_count += cityData.institutions ? parseInt(cityData.institutions, 10) : 0;
    }
    
    for (var continentKey in continentData) {
      // Get total number of countries in each continent
      var countries = continentData[continentKey].countries;

      continentData[continentKey].countryCount = Object.keys(countries).length;

      // Get the viewport width
      var viewportWidth = window.innerWidth;
      var countryWidth = 250;
      // Display of countries across viewport width
      var displaySize = 3/4;
      var maxGroupSize = Math.floor(( displaySize * viewportWidth ) / countryWidth);
      if (maxGroupSize > 4){
        maxGroupSize = 4;
      }

      // Group the countries into rows
      continentData[continentKey].countriesGrouped = [];
      var groups = continentData[continentKey].countriesGrouped;

      for (var countryKey in countries){
        var countryInfo = countries[countryKey];
        countryInfo.name = countryInfo.name.replace(' ', '<br />');

      if (!groups.length){
          groups.push([]);
      }

      var newestGroup = groups[groups.length - 1];
      if (newestGroup.length < maxGroupSize){
           newestGroup.push(countryInfo);
      } else {
           groups.push([countryInfo]);
        }
      }

    }

  });
});

// Controller to show one continent's countries at a time 
ircam.directive('showCountries', function() {
  return {
    restrict: "A",
    link: function(scope, element, attrs) {

      element.on('click', function() {
        var show = scope.showCountries;

        scope.$parent.$broadcast('$close');
        scope.$apply(function() {
          scope.showCountries = !show;
        });
      });

      scope.$on('$close', function() {
        scope.showCountries = false;
      });
    }
  };
});

// Filter to make names dashed and lowercase
ircam.filter('dashlower', function(){
  return function(input) {
    return input.toLowerCase().replace(' ', '-');
  };
});

