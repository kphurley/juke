juke.controller('ArtistsCtrl', function($scope, $rootScope, $log, ArtistFactory){

  ArtistFactory.fetchAll()
  .then(function(artists){
    $scope.artists = artists;
  })
  .catch($log.error);

  $scope.$on('showTheArtists', function(event, data){
    $rootScope.$broadcast('hideAllTheThings');
    $scope.showArtists = true;
  })

  $scope.$on('hideAllTheThings', function(){
    $scope.showArtists = false;
  })

  $scope.viewOneArtist = function(artist) {
    $rootScope.$broadcast('showOneArtist', artist);
  }

});
