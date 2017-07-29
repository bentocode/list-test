 var locations = [
    {title: 'Cactus Bellevue Square', location: {lat: 47.616972,
        lng: -122.201963}},
    {title: 'Ishoni Yakiniku', location: {lat: 47.6181,
        lng: -122.197971}},
    {title: '99 Park Restaurant', location: {lat: 47.611666, lng: -122.204546}},
    {title: 'Lunchbox Laboratory', location: {lat: 47.619048,
        lng: -122.191414}}
    ];

// viewModel function that creates the KO observables. locationsList is an observableArray copy of the locations object
  var viewModel = function() {
    var self = this;
    self.locationsList = ko.observableArray([]);
    self.filter = ko.observable('');

// use forEach to populate the observableArray locationsList
    locations.forEach(function(location) {
      self.locationsList.push(location);
    })

// function to implement the live search functionality on the list
    self.filterList = function(){
      // convert the filter to lower case to facilitate matching
        var formattedFilter = self.filter().toLowerCase();
        if (!formattedFilter) {
          locationsList = locations.forEach(function(location) {
          self.locationsList.push(location);
            })} else {
            locations.forEach(function(location) {
          if (location.title.toLowerCase().indexOf(formattedFilter) == -1) {
              locationsList.remove(location)
            } else {
            locationsList.push(location);
          }
        });
      }
    }
  };

ko.applyBindings(viewModel);
