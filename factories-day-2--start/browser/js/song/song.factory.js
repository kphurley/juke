juke.factory('SongFactory', function(){

  var convertSongs = function(data){
    data.songs.forEach(function(song, i){
        song.audioUrl = '/api/songs/' + song.id + '/audio';
        song.index = i;
    });
    return data.songs;
  }

  return {
    convertSongs
  }
})
