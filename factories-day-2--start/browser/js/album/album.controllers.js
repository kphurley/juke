/* global juke */
'use strict';

juke.controller('AlbumCtrl', function ($scope, $http, $rootScope, $log, StatsFactory, AlbumFactory, PlayerFactory) {

  AlbumFactory.fetchAll()
  .then(function(albums){
    $scope.albums = albums;
    return $scope.albums;
  })
  .then(function(albums){
    return AlbumFactory.fetchById(albums[0].id)
  })
  .then(function (album) {
    $scope.album = album;
  })
  .catch($log.error); // $log service can be turned on and off; also, pre-bound

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
