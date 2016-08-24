'use strict';

juke.factory('PlayerFactory', function(){

  var audio = document.createElement('audio');
  var currentSong = null;
  var queue = null;
  var queueIdx = 0;



  var pause = function(){
    audio.pause();
  }

  var start = function(song, collection){
    queue = collection || null;
    if (queue){
      queueIdx = queue.indexOf(song);
    }
    this.pause();
    currentSong = song;
    audio.src = song.audioUrl;
    audio.load();
    audio.play();
  }

  var resume = function(){
    audio.play();
  }

  var isPlaying = function() {
    console.log('paused?', audio.paused);
    return !audio.paused;
  }

  var getCurrentSong = function() {
    return currentSong;
  }

  var next = function() {
    queueIdx === queue.length-1 ? queueIdx = 0 : queueIdx++;
    this.start(queue[queueIdx], queue);
  }

  var previous = function() {
    queueIdx === 0 ? queueIdx = queue.length-1 : queueIdx--;
    this.start(queue[queueIdx], queue);
  }

  var getProgress = function() {
    if(!currentSong) return 0;
    return audio.currentTime / audio.duration;
  }

  var setProgress = function(percentage) {
    audio.currentTime = audio.duration * percentage;
  }

  return {
    start,
    pause,
    resume,
    isPlaying,
    getCurrentSong,
    next,
    previous,
    getProgress,
    setProgress
  };

});
