/* global juke */
'use strict';

juke.controller('PlayerCtrl', function ($scope, $rootScope, $interval, PlayerFactory) {

  // main toggle
  $scope.toggle = function () {
    if (PlayerFactory.isPlaying())
      PlayerFactory.pause();
    else
      PlayerFactory.resume();
  };

  $scope.playerIsActive = function() {
    return PlayerFactory.getCurrentSong();
  }

  $scope.getIconStyle = function() {
    if(PlayerFactory.isPlaying())
      return 'glyphicon-pause';
    return 'glyphicon-play';
  }

  $scope.next = PlayerFactory.next.bind(PlayerFactory);
  $scope.prev = PlayerFactory.previous.bind(PlayerFactory);


  $interval(function(){
    $scope.progress = PlayerFactory.getProgress() * 100;
  }, 500)


  $scope.handleProgressClick = function (evt) {
    PlayerFactory.setProgress(evt.offsetX / evt.currentTarget.scrollWidth);
  };

});
