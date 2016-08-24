juke.controller('SidePanelCtrl', function($scope, $rootScope){

  $scope.viewAlbums = function() {
    $rootScope.$broadcast('showTheAlbums');
  }

  $scope.viewAllArtists = function() {
    $rootScope.$broadcast('showTheArtists');
  }

});
