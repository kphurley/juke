juke.controller('ArtistCtrl', function($scope, $rootScope, $log, ArtistFactory, PlayerFactory){

  $scope.$on('showOneArtist', function(event, data){
    $rootScope.$broadcast('hideAllTheThings');
    ArtistFactory.fetchById(data.id)
    .then(function (artist) {
      $scope.artist = artist;
      $scope.showArtist = true;
    })
    .catch($log.error);
  })

  $scope.$on('hideAllTheThings', function(event, data){
    $scope.showArtist = false;
  })

  $scope.showAlbum = function(album){
    $rootScope.$broadcast('showAlbum', album);
  }

  $scope.toggle = function (song) {
    if (PlayerFactory.isPlaying() && song === PlayerFactory.getCurrentSong()) {
      //$rootScope.$broadcast('pause');
      PlayerFactory.pause();
    } else {
      //$rootScope.$broadcast('play', song);
      PlayerFactory.start(song, $scope.artist.songs);
    }
  };

  $scope.getIconStyle = function(song){
    if(PlayerFactory.isPlaying() && song === PlayerFactory.getCurrentSong())
      return 'glyphicon-pause';
    return 'glyphicon-play';
  }

  $scope.isActive = function(song){
    return song === PlayerFactory.getCurrentSong();
  }

});
