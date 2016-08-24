juke.factory('AlbumFactory', function($http, SongFactory){

  var fetchAll = function() {
    return $http.get('/api/albums/')
    .then(function (res) { return res.data; })
    .then(function (albums){
      albums.forEach(function(album){
        album.imageUrl = '/api/albums/' + album.id + '/image';
      });
      return albums;
    })
  };

  var fetchById = function(id) {
    return $http.get('/api/albums/' + id)
    .then(function (res) { return res.data; })
    .then(function (album) {
      album.imageUrl = '/api/albums/' + album.id + '/image';
      album.songs = SongFactory.convertSongs(album);
      return album;
    })
  };

  return {
    fetchAll,
    fetchById
  }

});
