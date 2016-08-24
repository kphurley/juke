juke.controller('ArtistCtrl', function($scope, $rootScope, $log, ArtistFactory, PlayerFactory){

  $scope.$on('showOneArtist', function(event, data){
    $rootScope.$broadcast('hideAllTheThings');
    ArtistFactory.fetchById(data.id)
    .then(function (artist) {
      $scope.artist = artist;
      $scope.showArtist = true;
      $scope.playList.thePlayList = $scope.artist.songs;
    })
    .catch($log.error);
  })

  $scope.$on('hideAllTheThings', function(event, data){
    $scope.showArtist = false;
  })

  $scope.showAlbum = function(album){
    $rootScope.$broadcast('showAlbum', album);
  }

});
