juke.controller('AlbumsCtrl', function($scope, $rootScope, $log, AlbumFactory) {

  AlbumFactory.fetchAll()
  .then(function(albums){
    $scope.albums = albums;
  })
  .catch($log.error);

  $scope.showAlbums = true;

  $scope.$on('showTheAlbums', function(){
    $rootScope.$broadcast('hideAllTheThings');
    $scope.showAlbums = true;
  })

  $scope.$on('hideAllTheThings', function(){
    $scope.showAlbums = false;
  })

  $scope.showAlbum = function(album){
    $rootScope.$broadcast('showAlbum', album);
  }

});
