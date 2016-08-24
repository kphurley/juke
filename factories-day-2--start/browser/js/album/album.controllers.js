/* global juke */
'use strict';

juke.controller('AlbumCtrl', function ($scope, $http, $rootScope, $log, StatsFactory, AlbumFactory, PlayerFactory) {

  $scope.$on('showAlbum', function(event, data){
    $rootScope.$broadcast('hideAllTheThings');
    AlbumFactory.fetchById(data.id)
    .then(function (album) {
      $scope.album = album;
      $scope.showAlbum = true;
      $scope.playList.thePlayList = $scope.album.songs;
    })
    .catch($log.error);
  })

  $scope.$on('hideAllTheThings', function(event, data){
    $scope.showAlbum = false;
  });

});
