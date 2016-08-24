'use strict';

juke.factory('PlayerFactory', function($rootScope){

  var audio = document.createElement('audio');
  var currentSong = null;
  var queue = null;
  var queueIdx = 0;

  audio.addEventListener('timeupdate', function(){
    $rootScope.progress = getProgress() * 100;
    $rootScope.$digest();
  });

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
