juke.factory('ArtistFactory', function($http, AlbumFactory, SongFactory){

  var fetchAll = function() {
    return $http.get('/api/artists/')
    .then(function (res) { return res.data; })
  };

  var fetchById = function(id) {
    var artist;
    return $http.get('/api/artists/' + id)
    .then(function (res) { return res.data; })
    .then(function(_artist){
      artist = _artist;
      return $http.get('/api/artists/' + id + '/albums');
    })
    .then(function(albums){
      artist.albums = albums.data;
      artist.albums.forEach(function(album){
        album.imageUrl = '/api/albums/' + album.id + '/image';
      });
      return $http.get('/api/artists/' + id + '/songs');
    })
    .then(function(songs){
      artist.songs = songs.data;
      artist.songs = SongFactory.convertSongs(artist);
      return artist;
    })
    .catch(console.log);
  };

  return {
    fetchAll,
    fetchById
  }

});
