/* global juke */
'use strict';

juke.controller('AlbumCtrl', function ($scope, $http, $rootScope, $log, StatsFactory, AlbumFactory, PlayerFactory) {

  $scope.$on('showAlbum', function(event, data){
    $rootScope.$broadcast('hideAllTheThings');
    AlbumFactory.fetchById(data.id)
    .then(function (album) {
      $scope.album = album;
      $scope.showAlbum = true;
    })
    .catch($log.error);
  })

  $scope.$on('hideAllTheThings', function(event, data){
    $scope.showAlbum = false;
  });


  // main toggle
  $scope.toggle = function (song) {
    if (PlayerFactory.isPlaying() && song === PlayerFactory.getCurrentSong()) {
      //$rootScope.$broadcast('pause');
      PlayerFactory.pause();
    } else {
      //$rootScope.$broadcast('play', song);
      PlayerFactory.start(song, $scope.album.songs);
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
