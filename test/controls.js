module('controls');
test('test player controls', function() {
    var videoTag = document.getElementById('videoPlayer'),
        player = new vipl(videoTag);
    player.play();
    ok(!videoTag.paused, 'video is playing');
    player.pause();
    ok(videoTag.paused, 'video paused');
});
