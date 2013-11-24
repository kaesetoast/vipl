(function(root, factory) {
    if (typeof define === 'function' && define.amd) define(factory);
    else if (typeof exports === 'object') module.exports = factory();
    else root.vipl = factory();
}(this, function() {

    'use strict';

    var playerElement;

    function vipl(_videoPlayerIdentifier) {
        playerElement = fetchPlayerElement(_videoPlayerIdentifier);
        return vipl;
    }

    vipl.getPlayerElement = function() {
        return playerElement;
    };

    vipl.play = function() {
        playerElement.play();
    };

    vipl.pause = function() {
        playerElement.pause();
    };

    vipl.stop = function() {
        playerElement.pause();
        playerElement.currentTime = 0;
    };

    vipl.setVolume = function(_volumeLevel) {
        if (_volumeLevel >= 0 && _volumeLevel <= 1) {
            playerElement.volume = _volumeLevel;
        } else {
            throw 'Volume level has to be a float between 0 and 1';
        }
    };

    function fetchPlayerElement(_videoPlayerIdentifier) {
        if (typeof _videoPlayerIdentifier === 'string') {
            return document.getElementById(_videoPlayerIdentifier);
        } else if (typeof _videoPlayerIdentifier === 'object') {
            return _videoPlayerIdentifier;
        } else {
            throw 'Could not find the video element. Please provide either an id-string, or the video object itself';
        }
    }

    return vipl;

}));