juke.controller('MainCtrl', function($scope, PlayerFactory){

  $scope.playList = {
    thePlayList : null
  };

  $scope.toggle = function (song) {
    if (PlayerFactory.isPlaying() && song === PlayerFactory.getCurrentSong()) {
      //$rootScope.$broadcast('pause');
      PlayerFactory.pause();
    } else {
      //$rootScope.$broadcast('play', song);
      PlayerFactory.start(song, $scope.playList.thePlayList);
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
