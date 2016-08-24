juke.controller('AlbumsCtrl', function($scope, $log, AlbumFactory) {

  AlbumFactory.fetchAll()
  .then(function(albums){
    $scope.albums = albums;
  })
  .catch($log.error);

});
