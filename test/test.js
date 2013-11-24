(function() {
    function createPLayerMarkup() {
        var videoTag = document.createElement('video');
        videoTag.id = 'videoPlayer';
        document.body.appendChild(videoTag);
    }
    function removePlayerMarkup() {
        document.body.removeChild(document.getElementById('videoPlayer'));
    }
    test("getting player by id-string", function() {
        createPLayerMarkup();
        var player = new vipl('videoPlayer');
        equal(document.getElementById('videoPlayer'), player.getPlayerElement(), 'video element was found');
        removePlayerMarkup();
    });
    test("getting player by object", function() {
        createPLayerMarkup();
        var player = new vipl(document.getElementById('videoPlayer'));
        equal(document.getElementById('videoPlayer'), player.getPlayerElement(), 'video element was found');
        removePlayerMarkup();
    });
})();